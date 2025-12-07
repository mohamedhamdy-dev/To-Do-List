import { IoMdCheckmark } from "react-icons/io";
import { TiInfoLarge } from "react-icons/ti";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useTask } from "../-context/TaskContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MobileOptions from "./MobileOptions";
import { motion } from "motion/react";

export default function TaskItem({ task }) {
  const urgent = task.urgency === "urgent";
  const important = task.importance === "important";

  const { toggleTask } = useTask();

  return (
    <motion.li
      layout
      className="flex flex-row items-center justify-between gap-1 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_0_18px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-all duration-300 select-none md:gap-5 md:p-5"
    >
      {/* LEFT SIDE — CHECKBOX + TEXT */}
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={task.done}
          className="peer sr-only"
          onChange={() => toggleTask(task.id)}
        />

        {/* Aurora Checkbox */}
        <div className="flex size-5 items-center justify-center rounded-full border-2 border-indigo-300 text-transparent transition-colors peer-checked:border-indigo-500 peer-checked:bg-indigo-600 peer-checked:text-white">
          <IoMdCheckmark className="size-5" />
        </div>

        {/* Task Text */}

        <p className="ml-2 w-64 break-words text-white/90 sm:ml-3 sm:w-96 md:w-100 lg:w-160 xl:w-64">
          {task.description}
        </p>
      </label>

      {/* DESKTOP OPTIONS */}
      <div className="hidden items-center justify-center gap-4 px-2 md:flex">
        {/* INFO */}
        <Tooltip>
          <TooltipTrigger asChild>
            <TiInfoLarge className="size-6 text-indigo-300 duration-300 hover:text-indigo-400" />
          </TooltipTrigger>
          <TooltipContent className="rounded-xl border border-white/10 bg-black/80 text-white shadow-xl backdrop-blur-lg">
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <span
                  className={`rounded-full px-2 py-1 text-xs text-white capitalize ${urgent ? "bg-red-500" : "bg-green-600"} `}
                >
                  {task.urgency}
                </span>

                <span
                  className={`rounded-full px-2 py-1 text-xs text-white capitalize ${important ? "bg-yellow-500" : "bg-gray-500"} `}
                >
                  {task.importance}
                </span>
              </div>
              <p className="text-sm text-indigo-200">Due: {task.dueDate}</p>
            </div>
          </TooltipContent>
        </Tooltip>

        {/* EDIT MODAL */}
        <EditModal task={task} />
        {/* DELETE MODAL */}
        <DeleteModal id={task.id} />
      </div>
      {/* MOBILE OPTIONS */}
      <MobileOptions task={task} />
    </motion.li>
  );
}
