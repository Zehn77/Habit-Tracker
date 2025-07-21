import { CalendarCheck } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button/button";
import { useState } from "react";
import Modal from "@/shared/ui/Modal";
import { Calendar } from "@/components/ui/calendar";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { DialogFooter } from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { addProgress } from "../slice";
import type { HabitProgressEntry } from "../types";
import { formatDateToISO } from "@/shared/utils/date";

type HabitStatusPickerProps = {
  habitId: string;
};

function HabitStatusPicker({ habitId }: HabitStatusPickerProps) {
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const progresses = useSelector((state: RootState) => state.progress);
  const dispatch = useDispatch();
  const filteredHabitsById = progresses.filter(
    (progress) => progress.habitId === habitId
  );

  const disabledDates = filteredHabitsById.map(
    (progress) => new Date(progress.date)
  );

  const handleCloseDatePickerModal = () => {
    setShowDatePickerModal(false);
    setSelectedDate(undefined);
  };

  function handleSaveChanges() {
    const newHabitProggess: HabitProgressEntry = {
      habitId,
      status: "completed",
      updatedAt: new Date().toISOString(),
      date: formatDateToISO(selectedDate!),
    };

    dispatch(addProgress(newHabitProggess));

    handleCloseDatePickerModal();
  }

  return (
    <Modal isOpen={showDatePickerModal} onClose={handleCloseDatePickerModal}>
      <Modal.OpenButton>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setShowDatePickerModal(true)}
              variant="outline"
              size="sm"
              className="cursor-pointer !py-3 !px-2"
            >
              <CalendarCheck
                className="!w-5 !h-5 text-stone-600"
                strokeWidth={2}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Select Date</p>
          </TooltipContent>
        </Tooltip>
      </Modal.OpenButton>
      <Modal.Content title="Select Date">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setSelectedDate(date)}
            disabled={(date) =>
              date > new Date() ||
              date < new Date("1900-01-01") ||
              disabledDates.some(
                (d) => d.toDateString() === date.toDateString()
              )
            }
            captionLayout="dropdown"
            className="border rounded-sm shadow-md"
          />

          <DialogFooter className="w-full">
            <Button
              disabled={!selectedDate}
              type="submit"
              onClick={handleSaveChanges}
              className="cursor-pointer w-full"
            >
              Save changes
            </Button>
          </DialogFooter>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default HabitStatusPicker;
