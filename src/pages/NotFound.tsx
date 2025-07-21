import { Button } from "@/shared/components/button/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/" className="bg-green-600 hover:bg-green-700">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
