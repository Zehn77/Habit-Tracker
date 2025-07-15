import { Button } from "@/components/ui/button/button";
import type { Habit } from "@/features/habits/types";
import { Trash2 } from "lucide-react";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import ConfirmModal from "@/shared/ui/ConfirmModal";
import { deleteHabit } from "../slice";

export default function DeleteHabitButton({ habit }: { habit: Habit }) {
  const [showDeleteHabitModal, setShowDeleteHabitModal] = useState(false);
  const dispatch = useDispatch();

  function openDeleteHabitModal() {
    setShowDeleteHabitModal(true);
  }

  const deleteHabitHandler = () => {
    dispatch(deleteHabit(habit.id));
    setShowDeleteHabitModal(false);
  };

  const hideDeleteModal = useCallback(() => {
    setShowDeleteHabitModal(false);
  }, []);

  return (
    <>
      <Button
        onClick={openDeleteHabitModal}
        disabled={habit.type === "predefined"}
        variant="destructive"
        size="sm"
        className="cursor-pointer"
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Delete
      </Button>

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
