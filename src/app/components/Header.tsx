import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HabitsList from "./HabitsList";

import Modal from "@/shared/ui/Modal";
import HabitForm from "@/shared/ui/HabitForm";

export default function Header() {
  const [showHabitModal, setShowHabitModal] = useState(false);

  const handleCloseHabitModal = useCallback(() => {
    setShowHabitModal(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <nav className="space-x-6 font-semibold">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
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
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`
            }
          >
            Statistics
          </NavLink>
        </nav>

        <Modal isOpen={showHabitModal} onClose={() => setShowHabitModal(false)}>
          <Modal.OpenButton>
            <Button
              onClick={() => setShowHabitModal(true)}
              variant="outline"
              className="cursor-pointer"
            >
              Add Habit
            </Button>
          </Modal.OpenButton>

          <Modal.Content>
            <Tabs defaultValue="create" className="mt-3">
              <TabsList className="w-full">
                <TabsTrigger value="create" className="cursor-pointer">
                  Create New Habit
                </TabsTrigger>
                <TabsTrigger value="select" className="cursor-pointer">
                  Select The Habit
                </TabsTrigger>
              </TabsList>
              <TabsContent value="create">
                <HabitForm onClose={handleCloseHabitModal} />
              </TabsContent>
              <TabsContent value="select">
                <HabitsList />
              </TabsContent>
            </Tabs>
          </Modal.Content>
        </Modal>
      </div>
    </header>
  );
}
