import { GoTasklist } from "react-icons/go";
import { GrTask } from "react-icons/gr";
import AddModal from "./AddModal";
import { useTask } from "@/context/TaskContext";
import TaskItem from "./TaskItem";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Tasks() {
  const { state } = useTask();
  const [search, setSearch] = useState("");

  // search filter
  const filteredTasks = state?.filter((task) =>
    task?.description?.toLowerCase()?.includes(search?.toLowerCase()),
  );

  const doneTasks = filteredTasks.filter((task) => task.done);
  const toDoTasks = filteredTasks.filter((task) => !task.done);

  return (
    <main className="space-y-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 p-2 text-white shadow-xl sm:rounded-2xl sm:p-6">
      {/* Header */}
      <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-lg md:flex-row xl:p-6">
        <div className="flex items-center justify-center gap-3 text-indigo-200">
          <p>Total Tasks : {filteredTasks.length}</p>
          <span className="text-indigo-300">|</span>
          <p>To Do: {toDoTasks.length}</p>
          <span className="text-indigo-300">|</span>
          <p>Done : {doneTasks.length}</p>
        </div>

        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          className="grow-0 basis-1/2 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-lg sm:p-6"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-200">
              <GoTasklist className="size-7" />
              <h2 className="text-lg font-semibold">To Do</h2>
            </div>

            <AddModal />
          </div>

          <ul className="flex flex-col gap-3 py-2 sm:py-5 md:overflow-y-auto xl:h-100 xl:p-2">
            {toDoTasks.length === 0 ? (
              <EmptyMessage label="No tasks to do." />
            ) : (
              toDoTasks.map((task) => <TaskItem key={task.id} task={task} />)
            )}
          </ul>
        </motion.div>

        {/* Done Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grow-0 basis-1/2 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-lg sm:p-6"
        >
          <div className="mb-2 flex h-10 items-center gap-2 text-indigo-200">
            <GrTask className="size-5" />
            <h2 className="text-lg font-semibold">Done</h2>
          </div>

          <ul className="flex flex-col gap-3 py-2 sm:py-5 md:overflow-y-auto xl:h-100 xl:p-2">
            {doneTasks.length === 0 ? (
              <EmptyMessage label="No completed tasks yet." />
            ) : (
              doneTasks.map((task) => <TaskItem key={task.id} task={task} />)
            )}
          </ul>
        </motion.div>
      </div>
    </main>
  );
}

// Empty message component
function EmptyMessage({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-10 text-indigo-300"
    >
      <p className="text-sm opacity-80">{label}</p>
    </motion.div>
  );
}
