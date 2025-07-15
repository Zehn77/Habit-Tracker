import { Dashboard, HabitDetail, Stats, NotFound } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "habit/:id", element: <HabitDetail /> },
      { path: "stats", element: <Stats /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
