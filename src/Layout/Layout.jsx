import { Outlet } from "react-router";
import Header from "../UI/Header";
import TaskProvider from "@/Context/TaskContext";

function Layout() {
  return (
    <div className="h-screen bg-black py-5">
      <div className="container mx-auto space-y-5">
        <Header />
        <TaskProvider>
          <Outlet />
        </TaskProvider>
      </div>
    </div>
  );
}

export default Layout;
