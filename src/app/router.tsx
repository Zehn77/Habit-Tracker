import { Dashboard, NotFound } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import ErrorFallback from "@/shared/ui/ErrorFallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: <Dashboard />, errorElement: <ErrorFallback /> },
      {
        path: "habit/:id",
        lazy: async () => {
          const { HabitDetail } = await import("@/pages");
          return { Component: HabitDetail };
        },
        errorElement: <ErrorFallback />,
      },
      {
        path: "stats",
        lazy: async () => {
          const { Stats } = await import("@/pages");
          return { Component: Stats };
        },
        errorElement: <ErrorFallback />,
      },
      { path: "*", element: <NotFound />, errorElement: <ErrorFallback /> },
    ],
  },
]);

export default router;
