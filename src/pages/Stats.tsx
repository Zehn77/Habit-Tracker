import { Button } from "@/components/ui/button/button";
import { Link } from "react-router-dom";

export default function Stats() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-foreground">
          We are coming soon 🚀
        </h1>
        <p className="text-muted-foreground text-md">
          This page is under construction. Stay tuned!
        </p>
        <Button asChild>
          <Link to="/" className="font-semibold">
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
