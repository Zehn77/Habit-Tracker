import { NavLink } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import { Button } from "@/shared/components/button/button";
import PredefinedHabitsList from "../../features/habits/components/PredefinedHabitsList";
import Modal from "@/shared/ui/Modal";
import HabitForm from "@/features/habits/components/HabitForm";
import { Plus } from "lucide-react";
import Tabs from "@/shared/ui/Tabs";
import HabitProgressForToday from "@/features/progress/components/HabitProgressForToday";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";

function Header() {
  const [showHabitModal, setShowHabitModal] = useState(false);

  const handleCloseHabitModal = useCallback(() => {
    setShowHabitModal(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 md:px-4 py-3">
        <nav className="space-x-2 md:space-x-6 font-semibold">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-stone-800"
                  : "text-stone-500 hover:text-stone-800"
              }`
            }
          >
            Habits
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-stone-800"
                  : "text-stone-500 hover:text-stone-800"
              }`
            }
          >
            Statistics
          </NavLink>
        </nav>

        <div className="flex items-center space-x-1 md:space-x-2">
          <HabitProgressForToday />

          <Modal
            isOpen={showHabitModal}
            onClose={() => setShowHabitModal(false)}
          >
            <Modal.OpenButton>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setShowHabitModal(true)}
                    variant="ghost"
                    className="flex items-center gap-1 border border-stone-300 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-muted/50 transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-primary" strokeWidth={3} />
                    <span>Add Habit</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Creating New Habit</p>
                </TooltipContent>
              </Tooltip>
            </Modal.OpenButton>

            <Modal.Content>
              <Tabs
                dataSource={[
                  {
                    title: "Create New Habit",
                    content: <HabitForm onClose={handleCloseHabitModal} />,
                  },
                  {
                    title: "Select The Habit",
                    content: (
                      <PredefinedHabitsList onClose={handleCloseHabitModal} />
                    ),
                  },
                ]}
              />
            </Modal.Content>
          </Modal>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
