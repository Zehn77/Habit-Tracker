import { format } from "date-fns";

export function formatDateTime(date: string): string {
  return format(new Date(date), "dd MMM yyyy, hh:mm a");
}
