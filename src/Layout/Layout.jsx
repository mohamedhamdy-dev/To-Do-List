import { Outlet } from "react-router";
import Header from "../UI/Header";
import TaskProvider from "@/Context/TaskContext";

// export default Layout;
export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#1a1f4a] to-[#3b0a50] py-6">
      <div className="container mx-auto space-y-6 px-3">
        {/* Aurora Header */}
        <Header />

        <div className="rounded-3xl p-4 shadow-[0_0_25px_rgba(99,102,241,0.35)] backdrop-blur-xl">
          <TaskProvider>
            <Outlet />
          </TaskProvider>
        </div>
      </div>
    </div>
  );
}
