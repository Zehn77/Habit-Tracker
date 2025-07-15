import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type CreateOrEditHabitDialogFormData = {
  name: string;
  description?: string;
};

type CreateOrEditHabitDialogProps = {
  defaultFormData?: CreateOrEditHabitDialogFormData;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: CreateOrEditHabitDialogFormData) => void;
};

const CreateOrEditHabitDialog = memo(
  ({
    defaultFormData,
    isOpen,
    onClose,
    onSubmit,
  }: CreateOrEditHabitDialogProps) => {
    const [formData, setFormData] = useState({ name: "", description: "" });

    useEffect(() => {
      setFormData({
        name: defaultFormData?.name || "",
        description: defaultFormData?.description || "",
      });
    }, [defaultFormData, isOpen]);

    function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      onSubmit(formData!);
    }

    return (
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            onClose();
          }
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={onSubmitHandler}>
            <DialogHeader>
              <DialogTitle>Create New Habit</DialogTitle>
              <DialogDescription>Creating new Habit</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 mt-4">
              <div className="grid gap-3">
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter the habit name..."
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      name: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Enter the habit description..."
                  value={formData.description}
                  onChange={(event) =>
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      description: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="cursor-pointer"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
);

export default CreateOrEditHabitDialog;
