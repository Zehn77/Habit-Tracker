import { NavLink } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import HabitProgressForToday from "@/features/progress/components/HabitProgressForToday";
import { cn } from "@/shared/lib/utils";
import HabitCreationModal from "@/features/habits/components/HabitCreationModal";

const NAV_ITEMS = [
  { label: "Habits", path: "/" },
  { label: "Statistics", path: "stats" },
];

function Header() {
  const [showHabitModal, setShowHabitModal] = useState(false);

  const handleOpenHabitModal = useCallback(() => {
    setShowHabitModal(true);
  }, []);

  const handleCloseHabitModal = useCallback(() => {
    setShowHabitModal(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 md:px-4 py-3">
        <nav className="space-x-2 md:space-x-6 font-semibold">
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                cn(
                  "transition-colors duration-300",
                  isActive
                    ? "text-stone-800"
                    : "text-stone-500 hover:text-stone-800"
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-1 md:space-x-2">
          <HabitProgressForToday />

          <HabitCreationModal
            isOpen={showHabitModal}
            onOpen={handleOpenHabitModal}
            onClose={handleCloseHabitModal}
          />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
