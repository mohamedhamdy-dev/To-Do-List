import { Outlet } from "react-router";
import Header from "../UI/Header";

function Layout() {
  return (
    <div className="bg-white py-5">
      <div className="container mx-auto space-y-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
