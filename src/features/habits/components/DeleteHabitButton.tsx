import { Button } from "@/shared/components/button/button";
import type { Habit } from "@/features/habits/types";
import { Trash2 } from "lucide-react";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import ConfirmModal from "@/shared/ui/ConfirmModal";
import { deleteHabit } from "../slice";
import { deleteProgress } from "@/features/progress/slice";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";

export default function DeleteHabitButton({ habit }: { habit: Habit }) {
  const [showDeleteHabitModal, setShowDeleteHabitModal] = useState(false);
  const dispatch = useDispatch();

  function openDeleteHabitModal() {
    setShowDeleteHabitModal(true);
  }

  const deleteHabitHandler = () => {
    dispatch(deleteHabit(habit.id));
    dispatch(deleteProgress(habit.id));
    setShowDeleteHabitModal(false);
  };

  const hideDeleteModal = useCallback(() => {
    setShowDeleteHabitModal(false);
  }, []);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={openDeleteHabitModal}
            variant="outline"
            size="sm"
            className="cursor-pointer"
            aria-label="Delete habit"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Deleting the Habit</p>
        </TooltipContent>
      </Tooltip>

      <ConfirmModal
        onConfirm={deleteHabitHandler}
        onCancel={hideDeleteModal}
        title="Are you absolutely sure?"
        isOpen={showDeleteHabitModal}
        description="This action cannot be undone. This will permanently delete the habit and remove your data from our servers."
      />
    </>
  );
}
