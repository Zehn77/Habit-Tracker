import { Button } from "@/components/ui/button/button";
import type { Habit } from "@/features/habits/types";
import { Pencil } from "lucide-react";
import { useState, useCallback } from "react";
import HabitForm from "@/shared/ui/HabitForm";
import Modal from "@/shared/ui/Modal";

export default function EditHabitButton({ habit }: { habit: Habit }) {
  const [showHabitModal, setShowHabitModal] = useState(false);

  const handleCloseHabitModal = useCallback(() => {
    setShowHabitModal(false);
  }, []);

  return (
    <Modal isOpen={showHabitModal} onClose={handleCloseHabitModal}>
      <Modal.OpenButton>
        <Button
          disabled={habit.type === "predefined"}
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => setShowHabitModal(true)}
        >
          <Pencil className="w-4 h-4 mr-1" />
          Edit
        </Button>
      </Modal.OpenButton>
      <Modal.Content title="Edit The Habit">
        <HabitForm habit={habit} onClose={handleCloseHabitModal} />
      </Modal.Content>
    </Modal>
  );
}
