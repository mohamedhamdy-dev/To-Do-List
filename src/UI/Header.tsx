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
import { FaTasks } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbMatrix } from "react-icons/tb";
import { NavLink, useLocation } from "react-router";
import { motion, scale } from "motion/react";

export default function Header() {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className="rounded-2xl bg-gradient-to-r from-blue-900 to-violet-800">
      {/* <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 lg:flex-row"> */}
      {/* <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 sm:flex-row"> */}
      {/* <ul className="flex flex-col items-center justify-center gap-5 px-8 py-4 text-nowrap sm:flex-row"> */}
      <ul className="flex flex-row items-center justify-center gap-5 px-8 py-4 text-nowrap">
        <li
          className={`w-64 rounded-3xl bg-white text-black duration-400 hover:bg-black hover:text-white lg:w-80 ${pathname === "/tasks" ? "!bg-black text-white" : ""} `}
        >
          <NavLink
            to="./tasks"
            className="flex items-center justify-center gap-2 px-5 py-2"
          >
            <FaTasks className="size-5" />
            <span>Tasks</span>
          </NavLink>
        </li>

        <li
          className={`w-64 rounded-3xl bg-white text-black duration-400 hover:bg-black hover:text-white lg:w-80 ${pathname === "/dashboard" ? "!bg-black text-white" : ""}`}
        >
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
