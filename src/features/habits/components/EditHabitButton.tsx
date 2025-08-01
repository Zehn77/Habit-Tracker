import { Button } from "@/shared/components/button/button";
import type { Habit } from "@/features/habits/types";
import { Pencil } from "lucide-react";
import { useState, useCallback } from "react";
import HabitForm from "@/features/habits/components/HabitForm";
import Modal from "@/shared/ui/Modal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";

export default function EditHabitButton({ habit }: { habit: Habit }) {
  const [showHabitModal, setShowHabitModal] = useState(false);

  const handleCloseHabitModal = useCallback(() => {
    setShowHabitModal(false);
  }, []);

  return (
    <Modal isOpen={showHabitModal} onClose={handleCloseHabitModal}>
      <Modal.OpenButton>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              disabled={habit.type === "predefined"}
              variant="outline"
              size="sm"
              className="cursor-pointer"
              onClick={() => setShowHabitModal(true)}
              aria-label="Edit habit"
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Editing the Habit</p>
          </TooltipContent>
        </Tooltip>
      </Modal.OpenButton>
      <Modal.Content title="Edit The Habit">
        <HabitForm habit={habit} onClose={handleCloseHabitModal} />
      </Modal.Content>
    </Modal>
  );
}
