import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/form";
import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/button/button";
import { Textarea } from "@/shared/components/textarea";
import { DialogFooter } from "@/shared/components/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import type { Habit } from "@/features/habits/types";
import { useDispatch } from "react-redux";
import { addHabit, editHabit } from "@/features/habits/slice";
import { memo } from "react";

const formSchema = z.object({
  name: z.string().trim().min(4, {
    message: "Habit name must be at least 4 characters.",
  }),
  description: z.string().trim().optional(),
});

type HabitFormProps = {
  habit?: Habit;
  onClose: () => void;
};

function HabitForm({ habit, onClose }: HabitFormProps) {
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: habit?.name ?? "",
      description: habit?.description ?? "",
    },
  });

  function onSubmit({ name, description }: z.infer<typeof formSchema>) {
    const currentDate = new Date();

    if (habit) {
      const updatedHabit: Habit = {
        ...habit,
        name,
        description: description as string,
        updatedAt: currentDate.toISOString(),
      };

      dispatch(editHabit(updatedHabit));
    } else {
      const habitId = Date.now().toString();

      const newHabit: Habit = {
        id: habitId,
        name,
        description: description as string,
        type: "custom",
        createdAt: currentDate.toISOString(),
        updatedAt: currentDate.toISOString(),
      };

      dispatch(addHabit(newHabit));
    }

    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900 mt-1">Habit Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter The Habit Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habit Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter The Habit Description..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
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
    </Form>
  );
}

export default memo(HabitForm);
