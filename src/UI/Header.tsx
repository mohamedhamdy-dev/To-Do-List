import { FaTasks } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbMatrix } from "react-icons/tb";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <nav className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600">
      <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 lg:flex-row">
        <li className="w-80 rounded-3xl bg-white duration-300 hover:text-violet-600">
          <NavLink
            to="./tasks"
            className="flex items-center justify-center gap-2 px-5 py-2"
          >
            <FaTasks className="size-5" />
            <span>Tasks</span>
          </NavLink>
        </li>
        <li className="w-80 rounded-3xl bg-white duration-300 hover:text-violet-600">
          <NavLink
            to="./eisenhower-matrix"
            className="flex items-center justify-center gap-2 px-5 py-2"
          >
            <TbMatrix className="size-5" />
            <span>Eisenhower Matrix</span>
          </NavLink>
        </li>
        <li className="w-80 rounded-3xl bg-white duration-300 hover:text-violet-600">
          <NavLink
            to="./dashboard"
            className="flex items-center justify-center gap-2 px-5 py-2"
          >
            <MdOutlineSpaceDashboard className="size-5" />
            <span>Dashboard</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
