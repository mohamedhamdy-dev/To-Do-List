import { FaTasks } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbMatrix } from "react-icons/tb";

export default function Header() {
  return (
    <nav className="rounded-2xl bg-green-500">
      <ul className="flex items-center justify-center gap-5 px-8 py-4">
        <li className="flex items-center gap-2 rounded-3xl bg-red-500 px-3 py-2">
          <FaTasks className="size-5" />
          <span>Tasks</span>
        </li>
        <li className="flex items-center gap-2 rounded-3xl bg-red-500 px-3 py-2">
          <TbMatrix className="size-5" />
          <span>Eisenhower Matrix</span>
        </li>
        <li className="flex items-center gap-2 rounded-3xl bg-red-500 px-3 py-2">
          <MdOutlineSpaceDashboard className="size-5" />
          <span>Dashboard</span>
        </li>
      </ul>
    </nav>
  );
}
