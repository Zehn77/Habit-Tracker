import { Checkbox } from "@/shared/components/checkbox";
import { Label } from "@/shared/components/label";
import { useSelector, useDispatch } from "react-redux";
import type { HabitProgressEntry } from "@/features/progress/types";
import { addProgress, deleteProgress } from "@/features/progress/slice";
import { formatDateToISO } from "@/shared/lib/date";
import { selectTodayProgressByHabitId } from "@/features/progress/progressSelectors";

type HabitTodayCheckboxProps = {
  habitId: string;
};

function HabitTodayCheckbox({ habitId }: HabitTodayCheckboxProps) {
  const dispatch = useDispatch();

  const habitProgress = useSelector(selectTodayProgressByHabitId(habitId));
  const checked: boolean = habitProgress?.status === "completed" || false;

  function handleCheckboxChange(value: boolean) {
    if (!checked) {
      const newHabitProgress: HabitProgressEntry = {
        date: formatDateToISO(new Date()),
        habitId,
        updatedAt: new Date().toISOString(),
        status: value ? "completed" : null,
      };
      dispatch(addProgress(newHabitProgress));
      return;
    }

    dispatch(deleteProgress(habitId));
  }

  return (
    <Label
      htmlFor={habitId}
      className="italic text-stone-500 cursor-pointer inline-flex items-center min-w-[120px]"
    >
      <Checkbox
        id={habitId}
        checked={checked}
        onCheckedChange={handleCheckboxChange}
        className="border border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:text-white data-[state=checked]:border-green-500"
        aria-label={`Mark habit as ${
          checked ? "uncompleted" : "completed"
        } for today`}
      />
      {checked ? (
        <span className="underline text-green-500">Completed</span>
      ) : (
        <span className="line-through">Uncompleted</span>
      )}
    </Label>
  );
}

export default HabitTodayCheckbox;
