// import { format } from "date-fns";
import HabitsList from "@/features/habits/components/HabitsList";

export default function Dashboard() {
  //   const now = new Date();
  //   const stringNow = now.toISOString();
  //   console.log(typeof stringNow);
  //   const result = format(stringNow, "yy-MM-dd");
  //   console.log(result);

  return (
    <>
      <HabitsList />
    </>
  );
}
