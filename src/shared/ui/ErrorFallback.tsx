import { useRouteError } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "../components/alert";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button/button";

export default function ErrorFallback() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center px-4 mt-4">
      <div className="max-w-lg w-full p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 dark:bg-red-800 p-3 rounded-full">
            <AlertCircle className="text-red-600 dark:text-red-300 w-6 h-6" />
          </div>
          <h1 className="text-xl md:text-2xl font-semibold text-red-700 dark:text-red-300">
            Oops! Something went wrong
          </h1>
        </div>

        <Alert className="border-none p-0 bg-transparent">
          <AlertTitle className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
            Error Details
          </AlertTitle>
          <AlertDescription className="text-sm mt-1 text-zinc-600 dark:text-zinc-300">
            {error?.message || "An unknown error occurred. Please try again."}
          </AlertDescription>
        </Alert>

        <div className="flex justify-end gap-3 pt-2">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
