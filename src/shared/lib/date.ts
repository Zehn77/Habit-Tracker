import { format } from "date-fns";

/**
 * Formats a date string into a human-readable format like "01 Aug 2025, 10:30 AM".
 *
 * @param date - A string representing a valid date (e.g., ISO format).
 * @returns The formatted date string.
 */
export function formatDateTime(date: string): string {
  return format(new Date(date), "dd MMM yyyy, hh:mm a");
}

/**
 * Converts a JavaScript Date object to an ISO format date string (e.g., "2025-08-01").
 *
 * @param date - A JavaScript Date object.
 * @returns The formatted ISO date string.
 */
export function formatDateToISO(date: Date): string {
  return format(date, "yyyy-MM-dd");
}
