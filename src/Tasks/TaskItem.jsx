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
  const urgent = task.urgency === "urgent" ? true : false;
  const important = task.importance === "important" ? true : false;

  const { toggleTask } = useTask();

  return (
    <>
      <motion.li
        layout
        className={`flex items-center justify-between gap-2 rounded-xl sm:gap-5 ${task.color} flex-row p-5 shadow-xl select-none`}
      >
        <label className="inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={task.done}
            className="peer sr-only"
            onChange={() => {
              toggleTask(task.id);
            }}
          />
          <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-400 text-transparent transition-colors peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white">
            <IoMdCheckmark className="size-5" />
          </div>

          <p className="ml-2 w-64 break-words text-gray-800 sm:w-96 md:w-64">
            {task.description}
          </p>
        </label>

        <div className="hidden items-center justify-center gap-4 px-2 sm:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <TiInfoLarge className="size-6" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  {
                    <span
                      className={`rounded-full px-2 py-1 text-xs text-white capitalize ${urgent ? "bg-red-500" : "bg-green-500"} `}
                    >
                      {task.urgency}
                    </span>
                  }

                  {
                    <span
                      className={`rounded-full px-2 py-1 text-xs text-white capitalize ${important ? "bg-yellow-500" : "bg-gray-500"} `}
                    >
                      {task.importance}
                    </span>
                  }
                </div>
                <p className="text-sm">Due : {task.dueDate}</p>
              </div>
            </TooltipContent>
          </Tooltip>

          {/* edit modal  */}
          <Dialog>
            <DialogTrigger>
              <FiEdit className="size-5 cursor-pointer duration-300 hover:text-green-500" />
            </DialogTrigger>
            <DialogContent modalType="edit" aria-describedby={undefined}>
              <DialogTitle>
                <DialogClose>
                  <h2 className="mb-4 text-xl font-bold text-white">
                    Edit Task
                  </h2>
                  <div className="absolute top-3 right-3 cursor-pointer text-sm duration-300 hover:rotate-180">
                    <HiMiniXMark className="size-7 text-white" />
                  </div>
                </DialogClose>
              </DialogTitle>
              <EditModal task={task} />
            </DialogContent>
          </Dialog>
          {/* delete modal */}
          <Dialog>
            <DialogTrigger>
              {/* <LuDelete className="size-5 cursor-pointer duration-300 hover:text-red-500" /> */}
              <TfiTrash className="size-5 cursor-pointer duration-300 hover:text-red-500" />
            </DialogTrigger>
            <DialogContent modalType="delete" aria-describedby={undefined}>
              <DialogTitle>
                <DialogClose>
                  <h2 className="mb-4 text-xl font-bold text-white">
                    Delete Task
                  </h2>
                  <div className="absolute top-3 right-3 cursor-pointer text-sm duration-300 hover:rotate-180">
                    <HiMiniXMark className="size-7 text-white" />
                  </div>
                </DialogClose>
              </DialogTitle>
              <DeleteModal id={task.id} />
            </DialogContent>
          </Dialog>
        </div>
        <MobileOptions task={task} />
      </motion.li>
    </>
  );
}

function MobileOptions({ task }) {
  const urgent = task.urgency === "urgent" ? true : false;
  const important = task.importance === "important" ? true : false;

  return (
    <div className="flex items-center justify-center sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text- rounded-full bg-white p-2 text-indigo-500">
            <FaList className="size-4" />
          </div>
        </DropdownMenuTrigger>

        {/* <DropdownMenuContent className="w-40 rounded-2xl bg-white p-2"> */}
        {/* <DropdownMenuContent className="mt-2 flex w-36 flex-col gap-2 rounded-2xl bg-white p-2"> */}
        <DropdownMenuContent
          align="end"
          className="mt-2 flex w-36 flex-col gap-2 rounded-2xl bg-white p-2"
        >
          {/* INFO BUTTON */}

          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left text-blue-600">
                <TiInfoLarge className="size-5" />
                View Info
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>Task Info</DialogTitle>
              <div className="text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs text-white capitalize ${urgent ? "bg-red-500" : "bg-green-500"}`}
                  >
                    {task.urgency}
                  </span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs text-white capitalize ${important ? "bg-yellow-500" : "bg-gray-500"}`}
                  >
                    {task.importance}
                  </span>
                </div>
                <p className="text-sm">Due: {task.dueDate}</p>
              </div>
            </DialogContent>
          </Dialog>

          {/* EDIT BUTTON */}

          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left text-green-600">
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

          {/* DELETE BUTTON */}

          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left text-red-600">
                <TfiTrash className="size-5 cursor-pointer duration-300 hover:text-red-500" />
                Delete Task
              </button>
            </DialogTrigger>

            <DialogContent modalType="delete">
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
