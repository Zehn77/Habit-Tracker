import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { PREDEFINED_HABITS } from "@/features/habits/constants";

export default function HabitsList() {
  const [selectedHabitId, setSelectedHabitId] = useState<string | null>(null);

  function handleOnSubmit() {}

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="max-h-64 overflow-y-auto pr-1 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PREDEFINED_HABITS.map((habit) => (
            <div
              key={habit.id}
              onClick={() => setSelectedHabitId(habit.id)}
              className={`p-4 border rounded-xl cursor-pointer transition ${
                selectedHabitId === habit.id
                  ? "border-primary bg-primary/10"
                  : "border-muted"
              }`}
            >
              <h4 className="font-medium text-sm text-center">{habit.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button variant="outline" className="cursor-pointer">
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" className="cursor-pointer">
          Save changes
        </Button>
      </DialogFooter>
    </form>
  );
}
