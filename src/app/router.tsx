import { Dashboard, NotFound } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "habit/:id",
        lazy: async () => {
          const { HabitDetail } = await import("@/pages");
          return { Component: HabitDetail };
        },
      },
      {
        path: "stats",
        lazy: async () => {
          const { Stats } = await import("@/pages");
          return { Component: Stats };
        },
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
