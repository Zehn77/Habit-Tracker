import { Button } from "@/components/ui/button/button";
import type { Habit } from "@/features/habits/types";
import CreateOrEditHabitDialog, {
  type CreateOrEditHabitDialogFormData,
} from "@/shared/ui/CreateOrEditHabitDialog";
import { Pencil } from "lucide-react";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { editHabit } from "../slice";

export default function EditHabitButton({ habit }: { habit: Habit }) {
  const [showEditHabitModal, setShowEditHabitModal] = useState(false);
  const dispatch = useDispatch();

  const editHabitHandler = () => {
    setShowEditHabitModal(true);
  };

  const hideHabitModalHandler = useCallback(() => {
    setShowEditHabitModal(false);
  }, []);

  const onSubmitHandler = useCallback(
    (formData: CreateOrEditHabitDialogFormData) => {
      const updatedHabit: Habit = {
        id: habit.id,
        createdAt: habit.createdAt,
        type: habit.type,
        name: formData.name,
        description: formData.description as string,
        updatedAt: new Date().toISOString(),
      };
      dispatch(editHabit(updatedHabit));
      setShowEditHabitModal(false);
    },
    [dispatch, habit]
  );

  return (
    <>
      <Button
        disabled={habit.type === "predefined"}
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={editHabitHandler}
      >
        <Pencil className="w-4 h-4 mr-1" />
        Edit
      </Button>

      <CreateOrEditHabitDialog
        isOpen={showEditHabitModal}
        onClose={hideHabitModalHandler}
        onSubmit={onSubmitHandler}
        defaultFormData={{
          name: habit.name,
          description: habit.description,
        }}
      />
    </>
  );
}
