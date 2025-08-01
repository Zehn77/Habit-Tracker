import { Checkbox } from "@/shared/components/checkbox";
import { Label } from "@/shared/components/label";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import type { HabitProgressEntry } from "@/features/progress/types";
import { addProgress, deleteProgress } from "@/features/progress/slice";
import { formatDateToISO } from "@/shared/lib/date";
import { selectTodayProgressByHabitId } from "@/features/progress/progressSelectors";
import { useDebouncedCallback } from "use-debounce";

type HabitTodayCheckboxProps = {
  habitId: string;
};

function HabitTodayCheckbox({ habitId }: HabitTodayCheckboxProps) {
  const dispatch = useDispatch();
  const habitProgress = useSelector(selectTodayProgressByHabitId(habitId));
  const initiallyChecked = habitProgress?.status === "completed";

  const [isChecked, setIsChecked] = useState(initiallyChecked);

  useEffect(() => {
    setIsChecked(initiallyChecked);
  }, [initiallyChecked]);

  const debouncedToggleProgress = useDebouncedCallback((value: boolean) => {
    if (value) {
      const newHabitProgress: HabitProgressEntry = {
        date: formatDateToISO(new Date()),
        habitId,
        updatedAt: new Date().toISOString(),
        status: "completed",
      };
      dispatch(addProgress(newHabitProgress));
    } else {
      dispatch(deleteProgress(habitId));
    }
    console.log("value changed");
  }, 300);

  const handleCheckboxChange = (value: boolean) => {
    setIsChecked(value);
    debouncedToggleProgress(value);
  };

  return (
    <Label
      htmlFor={habitId}
      className="italic text-stone-500 cursor-pointer inline-flex items-center min-w-[120px]"
    >
      <Checkbox
        id={habitId}
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        className="border border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:text-white data-[state=checked]:border-green-500"
        aria-label={`Mark habit as ${
          isChecked ? "uncompleted" : "completed"
        } for today`}
      />
      {isChecked ? (
        <span className="underline text-green-500">Completed</span>
      ) : (
        <span className="line-through">Uncompleted</span>
      )}
    </Label>
  );
}

export default HabitTodayCheckbox;
