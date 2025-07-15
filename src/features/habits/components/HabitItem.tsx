import type { HabitItemProps } from "../types";
import { formatDateTime } from "@/shared/utils/date";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { Pencil, Trash2 } from "lucide-react";

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

      <CardContent className="text-sm text-gray-400 space-y-1 italic">
        <p>Created: {formatDateTime(habit.createdAt)} </p>
        <p>Updated: {formatDateTime(habit.updatedAt)}</p>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button disabled variant="outline" size="sm">
          <Pencil className="w-4 h-4 mr-1" />
          Edit
        </Button>
        <Button disabled variant="destructive" size="sm">
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
