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

export default function Tasks() {
  const { state } = useTask();
  const doneTasks = state.filter((task) => task.done);
  const toDoTasks = state.filter((task) => !task.done);

  return (
    <main className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">
      <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-white p-5 md:flex-row xl:p-6">
        <div className="flex items-center justify-center gap-3">
          <p>Total Tasks : {state.length}</p>
          <span>|</span>
          <p>To Do: {toDoTasks.length}</p>
          <span>|</span>
          <p>Done : {doneTasks.length}</p>
        </div>

        <input
          type="search"
          name="search"
          placeholder="Search"
          className="w-72 rounded-full px-5 py-2 ring-1 ring-gray-400 outline-none focus:ring-blue-500 sm:w-80"
        />
      </div>

      <div className="mt-5 flex flex-col justify-center gap-5 lg:flex-row">
        {/* to do tasks  */}
        <div className="grow-0 basis-1/2 rounded-2xl bg-gray-50 p-4 lg:w-full xl:h-135 xl:p-6 2xl:w-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <GoTasklist className="size-7" />
              <h2>To Do</h2>
            </div>
            <Dialog>
              <DialogTrigger>
                <div className="relative size-10 cursor-pointer rounded-full bg-indigo-500 px-5 py-2 text-white duration-300 hover:bg-black">
                  <BiAddToQueue className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </DialogTrigger>
              <DialogContent modalType="add" aria-describedby={undefined}>
                <DialogTitle>
                  <DialogClose>
                    <h2 className="mb-4 text-xl font-bold text-white">
                      Add Task
                    </h2>
                    <div className="absolute top-3 right-3 cursor-pointer text-sm duration-300 hover:rotate-180">
                      <HiMiniXMark className="size-7 text-white" />
                    </div>
                  </DialogClose>
                </DialogTitle>
                <AddModal />
              </DialogContent>
            </Dialog>
          </div>
          <ul className="flex flex-col gap-2 overflow-y-scroll py-5 xl:h-111 xl:gap-3 xl:p-5">
            {toDoTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>

        {/* done tasks  */}
        <div className="grow-0 basis-1/2 rounded-2xl bg-white p-4 lg:w-full xl:h-135 xl:p-6 2xl:w-auto">
          <div className="flex h-10 items-center justify-start gap-2">
            <GrTask className="size-5" />
            <h2>Done</h2>
          </div>
          <ul className="flex flex-col gap-2 overflow-y-scroll py-5 xl:h-111 xl:gap-3 xl:p-5">
            {doneTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
