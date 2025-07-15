import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
