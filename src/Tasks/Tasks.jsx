import { BiAddToQueue } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { GrTask } from "react-icons/gr";

import AddModal from "./AddModal";
import { useTask } from "@/Context/TaskContext";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { HiMiniXMark } from "react-icons/hi2";
import TaskItem from "./TaskItem";
import { motion } from "framer-motion";

export default function Tasks() {
  const { state } = useTask();
  const doneTasks = state.filter((task) => task.done);
  const toDoTasks = state.filter((task) => !task.done);

  return (
    <main className="space-y-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 p-6 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-lg md:flex-row xl:p-6">
        <div className="flex items-center justify-center gap-3 text-indigo-200">
          <p>Total Tasks : {state.length}</p>
          <span className="text-indigo-300">|</span>
          <p>To Do: {toDoTasks.length}</p>
          <span className="text-indigo-300">|</span>
          <p>Done : {doneTasks.length}</p>
        </div>

        <input
          type="search"
          name="search"
          placeholder="Search"
          className="w-72 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md transition outline-none placeholder:text-indigo-200 focus:ring-2 focus:ring-indigo-400 sm:w-80"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-col justify-center gap-5 xl:h-124 xl:flex-row">
        {/* To Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grow-0 basis-1/2 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-200">
              <GoTasklist className="size-7" />
              <h2 className="text-lg font-semibold">To Do</h2>
            </div>

            {/* Add Button */}
            <Dialog>
              <DialogTrigger>
                <div className="relative size-10 cursor-pointer rounded-full bg-indigo-500 shadow-md shadow-indigo-500/40 transition hover:bg-indigo-400">
                  <BiAddToQueue className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </DialogTrigger>

              <DialogContent
                modalType="add"
                aria-describedby={undefined}
                className="border border-white/20 bg-gradient-to-br from-slate-800 to-indigo-900"
              >
                <DialogTitle>
                  <DialogClose>
                    <h2 className="mb-4 text-xl font-bold text-white">
                      Add Task
                    </h2>
                    <div className="absolute top-3 right-3 cursor-pointer duration-300 hover:rotate-180">
                      <HiMiniXMark className="size-7 text-white" />
                    </div>
                  </DialogClose>
                </DialogTitle>

                <AddModal />
              </DialogContent>
            </Dialog>
          </div>

          <ul className="flex flex-col gap-3 overflow-y-auto py-5 xl:h-100 xl:p-2">
            {toDoTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </motion.div>

        {/* Done Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grow-0 basis-1/2 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg"
        >
          <div className="mb-2 flex h-10 items-center gap-2 text-indigo-200">
            <GrTask className="size-5" />
            <h2 className="text-lg font-semibold">Done</h2>
          </div>

          <ul className="flex flex-col gap-3 overflow-y-auto py-5 xl:h-100 xl:p-2">
            {doneTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
