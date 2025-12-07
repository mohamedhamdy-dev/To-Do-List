import { Outlet } from "react-router";
import Header from "./Header";
import TaskProvider from "@/context/TaskContext";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#1a1f4a] to-[#3b0a50] py-6">
      <div className="container mx-auto space-y-6 px-3">
        <Header />

        <div className="rounded-4xl p-2 shadow-[0_0_25px_rgba(99,102,241,0.35)] backdrop-blur-xl sm:rounded-3xl sm:p-4">
          <TaskProvider>
            <Outlet />
          </TaskProvider>
        </div>
      </div>
    </div>
  );
}
