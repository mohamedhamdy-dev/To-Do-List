import { FaTasks } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { NavLink, useLocation } from "react-router";

import { motion } from "framer-motion";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <nav className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-violet-900 p-[2px] shadow-xl">
      <ul className="flex flex-row items-center justify-center gap-6 px-8 py-4 text-nowrap">
        {/* Tasks */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          className={`w-64 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/20 lg:w-80 ${pathname === "/tasks" ? "border-indigo-300 bg-white/30 text-white shadow-indigo-500/50" : "text-slate-200"} `}
        >
          <NavLink
            to="./tasks"
            className="flex items-center justify-center gap-2 px-5 py-2 font-medium tracking-wide"
          >
            <FaTasks className="size-5" />
            <span>Tasks</span>
          </NavLink>
        </motion.li>

        {/* Dashboard */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          className={`w-64 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/20 lg:w-80 ${pathname === "/dashboard" ? "border-indigo-300 bg-white/30 text-white shadow-indigo-500/50" : "text-slate-200"} `}
        >
          <NavLink
            to="./analytics"
            className="flex items-center justify-center gap-2 px-5 py-2 font-medium tracking-wide"
          >
            {/* <MdOutlineSpaceDashboard /> */}
            <SiGoogleanalytics className="size-5" />
            <span>Analytics</span>
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
}
