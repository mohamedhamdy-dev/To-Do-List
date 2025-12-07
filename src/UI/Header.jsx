// import { FaTasks } from "react-icons/fa";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { TbMatrix } from "react-icons/tb";
// import { NavLink, useLocation } from "react-router";
// import { motion, scale } from "motion/react";

// export default function Header() {
//   const { pathname } = useLocation();

//   console.log(pathname);

//   return (
//     <nav className="rounded-2xl bg-gradient-to-r from-blue-900 to-violet-800">
//       {/* <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 lg:flex-row"> */}
//       {/* <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 sm:flex-row"> */}
//       <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 text-nowrap sm:flex-row">
//         <li
//           className={`w-64 rounded-3xl bg-white text-black duration-400 hover:bg-black hover:text-white lg:w-80 ${pathname === "/tasks" ? "!bg-black text-white" : ""} `}
//         >
//           <NavLink
//             to="./tasks"
//             className={`flex items-center justify-start gap-2 px-5 py-2 sm:justify-center`}
//           >
//             <FaTasks className="size-5" />
//             <span>Tasks</span>
//           </NavLink>
//         </li>

//         <li
//           className={`w-64 rounded-3xl bg-white text-black duration-400 hover:bg-black hover:text-white lg:w-80 ${pathname === "/dashboard" ? "!bg-black text-white" : ""}`}
//         >
//           <NavLink
//             to="./dashboard"
//             className="flex items-center justify-start gap-2 px-5 py-2 sm:justify-center"
//           >
//             <MdOutlineSpaceDashboard className="size-5" />
//             <span>Dashboard</span>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// import { FaTasks } from "react-icons/fa";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { NavLink, useLocation } from "react-router";

// export default function Header() {
//   const { pathname } = useLocation();

//   console.log(pathname);

//   return (
//     <nav className="rounded-2xl bg-gradient-to-r from-blue-900 to-violet-800">
//       <ul className="flex flex-row items-center justify-center gap-5 px-8 py-4 text-nowrap">
//         <li
//           className={`w-64 rounded-3xl bg-white text-black duration-400 hover:bg-black hover:text-white lg:w-80 ${pathname === "/tasks" ? "!bg-black text-white" : ""} `}
//         >
//           <NavLink
//             to="./tasks"
//             className="flex items-center justify-center gap-2 px-5 py-2"
//           >
//             <FaTasks className="size-5" />
//             <span>Tasks</span>
//           </NavLink>
//         </li>

//         <li
//           className={`w-64 rounded-3xl bg-white text-black duration-400 hover:bg-black hover:text-white lg:w-80 ${pathname === "/dashboard" ? "!bg-black text-white" : ""}`}
//         >
//           <NavLink
//             to="./dashboard"
//             className="flex items-center justify-center gap-2 px-5 py-2"
//           >
//             <MdOutlineSpaceDashboard className="size-5" />
//             <span>Dashboard</span>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// import { FaTasks } from "react-icons/fa";
// import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { NavLink, useLocation } from "react-router";
// import { motion } from "framer-motion";

// export default function Header() {
//   const { pathname } = useLocation();

//   return (
//     <nav className="rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-[2px] shadow-lg">
//       <ul className="flex flex-row items-center justify-center gap-6 px-8 py-4 text-nowrap">
//         {/* Tasks */}
//         <motion.li
//           whileHover={{ scale: 1.05 }}
//           className={`w-64 rounded-xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md lg:w-80 ${pathname === "/tasks" ? "border-emerald-400 text-emerald-700 shadow-emerald-300" : "text-slate-700"} `}
//         >
//           <NavLink
//             to="./tasks"
//             className="flex items-center justify-center gap-2 px-5 py-2 font-medium"
//           >
//             <FaTasks className="size-5" />
//             <span>Tasks</span>
//           </NavLink>
//         </motion.li>

//         {/* Dashboard */}
//         <motion.li
//           whileHover={{ scale: 1.05 }}
//           className={`w-64 rounded-xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md lg:w-80 ${pathname === "/dashboard" ? "border-emerald-400 text-emerald-700 shadow-emerald-300" : "text-slate-700"} `}
//         >
//           <NavLink
//             to="./dashboard"
//             className="flex items-center justify-center gap-2 px-5 py-2 font-medium"
//           >
//             <MdOutlineSpaceDashboard className="size-5" />
//             <span>Dashboard</span>
//           </NavLink>
//         </motion.li>
//       </ul>
//     </nav>
//   );
// }

import { FaTasks } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
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
            to="./dashboard"
            className="flex items-center justify-center gap-2 px-5 py-2 font-medium tracking-wide"
          >
            <MdOutlineSpaceDashboard className="size-5" />
            <span>Dashboard</span>
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
}
