const baseBadgeClass =
  "h-7 w-7 min-w-5 rounded-full font-mono tabular-nums bg-white  border  font-bold text-md cursor-default";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Badge } from "@/shared/components/badge/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";
import { cn } from "@/shared/lib/utils";
import { selectHabitProgressForToday } from "../progressSelectors";

export default function HabitProgressForToday() {
  const habitsCount = useSelector((state: RootState) => state.habits.length);
  const completedTodayProgressesCount = useSelector(
    selectHabitProgressForToday
  );

  return (
    <div className="flex items-end gap-2">
      <Tooltip>
        <TooltipTrigger>
          <Badge
            className={cn(baseBadgeClass, "border-green-600 text-green-600")}
          >
            {completedTodayProgressesCount}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>Completed Habits Count</TooltipContent>
      </Tooltip>

      <span className="text-xl text-stone-500">/</span>

      <Tooltip>
        <TooltipTrigger>
          <Badge
            className={cn(baseBadgeClass, "text-stone-800 border-stone-600")}
          >
            {habitsCount}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>All Habits Count</TooltipContent>
      </Tooltip>
    </div>
  );
}
