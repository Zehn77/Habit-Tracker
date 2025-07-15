import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button/button";
import CreateOrEditHabitDialog from "@/shared/ui/CreateOrEditHabitDialog";
import type { CreateOrEditHabitDialogFormData } from "@/shared/ui/CreateOrEditHabitDialog";
import { useDispatch } from "react-redux";
import { addHabit } from "@/features/habits/slice";
import type { Habit } from "@/features/habits/types";

export default function Header() {
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
  const dispatch = useDispatch();
  const hideHabitModalHandler = useCallback(() => {
    setShowAddHabitModal(false);
  }, []);

  const onSubmitHandler = useCallback(
    (formData: CreateOrEditHabitDialogFormData) => {
      const createdAt = new Date().toISOString();

      const newHabit: Habit = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description!,
        type: "custom",
        createdAt,
        updatedAt: createdAt,
      };

      dispatch(addHabit(newHabit));

      setShowAddHabitModal(false);
    },
    [dispatch]
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <nav className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600 transition"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600 transition"
            }
          >
            Stats
          </NavLink>
        </nav>

        <Button
          onClick={() => {
            setShowAddHabitModal(true);
          }}
          variant="outline"
        >
          Open Dialog
        </Button>
        <CreateOrEditHabitDialog
          isOpen={showAddHabitModal}
          onClose={hideHabitModalHandler}
          onSubmit={onSubmitHandler}
          // defaultFormData={{ name: "Jack", description: "Hey Jack" }}
        />
      </div>
    </header>
  );
}
