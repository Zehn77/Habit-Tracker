import type { HabitItemProps } from "../types";
// import { formatDateTime } from "@/shared/utils/date";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  // CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge/badge";
import EditHabitButton from "./EditHabitButton";
import DeleteHabitButton from "./DeleteHabitButton";

export default function HabitItem({ habit }: HabitItemProps) {
  return (
    <Card className="h-full transition hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{habit.name}</CardTitle>
          <Badge
            variant={habit.type === "custom" ? "default" : "secondary"}
            className="capitalize"
          >
            {habit.type}
          </Badge>
        </div>
        <CardDescription className="font-semibold">
          {habit.description}
        </CardDescription>
      </CardHeader>

      {/* <CardContent className="text-sm text-gray-400 space-y-1 italic">
        <p>Created: {formatDateTime(habit.createdAt)} </p>
        <p>Updated: {formatDateTime(habit.updatedAt)}</p>
      </CardContent> */}

      <CardFooter className="flex justify-between gap-2">
        <Link
          to={`/habit/${habit.id}`}
          className="hover:text-blue-600 hover:underline transition duration-300 italic text-sm text-blue-400"
        >
          Details...
        </Link>
        <div className="flex gap-2">
          <EditHabitButton habit={habit} />
          <DeleteHabitButton habit={habit} />
        </div>
      </CardFooter>
    </Card>
  );
}
