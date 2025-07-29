import { Plus } from "lucide-react";
import { Button } from "@/shared/components/button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";
import Modal from "@/shared/ui/Modal";
import Tabs from "@/shared/ui/Tabs";
import HabitForm from "./HabitForm";
import PredefinedHabitsList from "./PredefinedHabitsList";

interface HabitCreationModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function HabitCreationModal({
  isOpen,
  onOpen,
  onClose,
}: HabitCreationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.OpenButton>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onOpen}
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
              content: <HabitForm onClose={onClose} />,
            },
            {
              title: "Select The Habit",
              content: <PredefinedHabitsList onClose={onClose} />,
            },
          ]}
        />
      </Modal.Content>
    </Modal>
  );
}
