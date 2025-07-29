const baseBadgeClass =
  "h-7 w-7 min-w-5 rounded-full font-mono tabular-nums bg-white  border  font-bold text-md cursor-default";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { formatDateToISO } from "@/shared/lib/date";
import { Badge } from "@/shared/components/badge/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/tooltip";
import { cn } from "@/shared/lib/utils";

export default function HabitProgressForToday() {
  const habits = useSelector((state: RootState) => state.habits);
  const allProgress = useSelector((state: RootState) => state.progress);

  const habitsCount = habits.length;
  const today = new Date();
  const todayISO = formatDateToISO(today);

  const completedTodayProgressesCount = allProgress.filter(
    (entry) => entry.date === todayISO && entry.status === "completed"
  ).length;

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
