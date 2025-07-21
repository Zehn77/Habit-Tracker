import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/alert-dialog";
import { memo } from "react";

type ConfirmModalProps = {
  isOpen: boolean;
  description: string;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmModal = memo(
  ({ isOpen, description, title, onCancel, onConfirm }: ConfirmModalProps) => {
    return (
      <AlertDialog
        onOpenChange={(open) => {
          if (!open) {
            onCancel();
          }
        }}
        open={isOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onConfirm}
              className="cursor-pointer bg-red-600 text-white hover:bg-red-700"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);

export default ConfirmModal;
