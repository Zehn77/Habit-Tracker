import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { memo } from "react";

type DatePickerProps = {
  date: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

const DatePicker = memo(({ date, onChange }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? date.toDateString() : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={onChange}
          disabled={(d) => d > new Date() || d < new Date("1900-01-01")}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
});

export default DatePicker;
