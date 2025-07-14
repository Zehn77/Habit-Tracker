import { Dashboard, HabitDetail, Stats, NotFound } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    element: <Dashboard />,
  },
  { path: "habit/:id", element: <HabitDetail /> },
  { path: "stats", element: <Stats /> },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
