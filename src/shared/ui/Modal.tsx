import type { ReactNode } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {children}
    </Dialog>
  );
};

const OpenButton = ({ children }: { children: ReactNode }) => {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
};

const Content = ({
  children,
  title = "",
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <DialogContent>
      <DialogTitle className={title ? "" : "hidden"}>{title}</DialogTitle>
      <DialogDescription className="hidden" />
      {children}
    </DialogContent>
  );
};

Modal.OpenButton = OpenButton;
Modal.Content = Content;

export default Modal;
