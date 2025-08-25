import { FiEdit } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { LuDelete } from "react-icons/lu";
import { TiInfoLarge } from "react-icons/ti";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { motion } from "motion/react";
import { useTask } from "../Context/TaskContext";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniXMark } from "react-icons/hi2";

export default function TaskItem({ task }) {
  const urgent = task.urgency === "urgent" ? true : false;
  const important = task.importance === "important" ? true : false;

  const { toggleTask } = useTask();

  return (
    <>
      <motion.li
        layout
        className={`flex flex-col items-center justify-between gap-5 rounded-xl ${task.color} p-5 shadow-xl select-none md:flex-row`}
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
          <span className="ml-2 text-gray-800">{task.description}</span>
        </label>

        <div className="flex items-center justify-center gap-4 px-2">
          <div className="group relative inline-block">
            <button className="flex cursor-help items-center justify-center">
              <TiInfoLarge className="size-6" />
            </button>
            <div className="absolute top-1/2 right-full z-40 mb-2 hidden w-72 -translate-y-1/2 rounded-tl-4xl rounded-br-4xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-center text-xs text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
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
            </div>
          </div>

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
              <LuDelete className="size-5 cursor-pointer duration-300 hover:text-red-500" />
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
      </motion.li>
    </>
  );
}
