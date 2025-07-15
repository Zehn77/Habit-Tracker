export type Habit = {
  id: string;
  name: string;
  description: string;
  type: "predefined" | "custom";
  createdAt: string;
  updatedAt: string;
};

export type HabitsState = Habit[];

export type HabitItemProps = {
  habit: Habit;
};
