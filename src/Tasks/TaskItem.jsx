import { FiEdit } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { TiInfoLarge } from "react-icons/ti";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { motion } from "motion/react";
import { useTask } from "../Context/TaskContext";
import { TfiTrash } from "react-icons/tfi";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniXMark } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FaList } from "react-icons/fa";

export default function TaskItem({ task }) {
  const urgent = task.urgency === "urgent";
  const important = task.importance === "important";

  const { toggleTask } = useTask();

  return (
    <motion.li
      layout
      className="flex flex-row items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-[0_0_18px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-all duration-300 select-none sm:gap-5"
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
        <p className="ml-3 w-64 break-words text-white/90 sm:w-96 md:w-64">
          {task.description}
        </p>
      </label>

      {/* DESKTOP OPTIONS */}
      <div className="hidden items-center justify-center gap-4 px-2 sm:flex">
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
        <Dialog>
          <DialogTrigger>
            <FiEdit className="size-5 cursor-pointer text-indigo-300 duration-300 hover:text-green-400" />
          </DialogTrigger>

          <DialogContent
            aria-describedby={undefined}
            className="border border-white/20 bg-gradient-to-br from-slate-800 to-indigo-900"
          >
            <DialogTitle>
              <DialogClose>
                <h2 className="mb-4 text-xl font-bold text-white">Edit Task</h2>
                <div className="absolute top-3 right-3 cursor-pointer duration-300 hover:rotate-180">
                  <HiMiniXMark className="size-7 text-white" />
                </div>
              </DialogClose>
            </DialogTitle>

            <EditModal task={task} />
          </DialogContent>
        </Dialog>

        {/* DELETE MODAL */}
        <Dialog>
          <DialogTrigger>
            <TfiTrash className="size-5 cursor-pointer text-indigo-300 duration-300 hover:text-red-500" />
          </DialogTrigger>

          <DialogContent
            aria-describedby={undefined}
            className="border border-white/20 bg-gradient-to-br from-slate-800 to-indigo-900"
          >
            <DialogTitle>
              <DialogClose>
                <h2 className="mb-4 text-xl font-bold text-white">
                  Delete Task
                </h2>
                <div className="absolute top-3 right-3 cursor-pointer duration-300 hover:rotate-180">
                  <HiMiniXMark className="size-7 text-white" />
                </div>
              </DialogClose>
            </DialogTitle>

            <DeleteModal id={task.id} />
          </DialogContent>
        </Dialog>
      </div>

      {/* MOBILE OPTIONS */}
      <MobileOptions task={task} />
    </motion.li>
  );
}

function MobileOptions({ task }) {
  const urgent = task.urgency === "urgent";
  const important = task.importance === "important";

  return (
    <div className="flex items-center justify-center sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-full bg-indigo-500 p-2 text-white shadow-lg">
            <FaList className="size-4" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="mt-2 flex w-36 flex-col gap-2 rounded-2xl border border-white/10 bg-white/10 p-3 text-white shadow-[0_0_18px_rgba(139,92,246,0.35)] backdrop-blur-xl"
        >
          {/* INFO */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left hover:text-indigo-300">
                <TiInfoLarge className="size-5" />
                View Info
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle className="text-white">Task Info</DialogTitle>

              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs text-white ${urgent ? "bg-red-500" : "bg-green-600"} `}
                  >
                    {task.urgency}
                  </span>

                  <span
                    className={`rounded-full px-2 py-1 text-xs text-white ${important ? "bg-yellow-500" : "bg-gray-500"} `}
                  >
                    {task.importance}
                  </span>
                </div>

                <p className="text-sm">Due: {task.dueDate}</p>
              </div>
            </DialogContent>
          </Dialog>

          {/* EDIT */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left hover:text-green-400">
                <FiEdit className="size-5" />
                Edit Task
              </button>
            </DialogTrigger>

            <DialogContent modalType="edit">
              <DialogTitle>Edit Task</DialogTitle>
              <DialogClose />
              <EditModal task={task} />
            </DialogContent>
          </Dialog>

          {/* DELETE */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left hover:text-red-500">
                <TfiTrash className="size-5" />
                Delete Task
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>Delete Task</DialogTitle>
              <DialogClose />
              <DeleteModal id={task.id} />
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
