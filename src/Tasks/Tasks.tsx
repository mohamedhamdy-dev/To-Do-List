import { useRef, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { GrTask } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { LuDelete } from "react-icons/lu";
import { TiInfoLarge } from "react-icons/ti";
import type { task, TaskItemProps } from "./Tasks.types";
import { tasksData } from "../assets/sometasks";
import type { modalTypeType } from "./Modal.types";
import AddModal from "./AddModal";
import ModalContainer from "./ModalContainer";

export default function Tasks() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // const task = {
  //   descryption: "this is taks one ",
  //   dueDate: "15/10/2025",
  //   importance: "important",
  //   urgency: "urgent ",
  // };

  function closeAddModal() {
    setIsAddModalOpen(false);
  }

  return (
    <>
      <main className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-white p-5 md:flex-row xl:p-6">
          <div className="flex items-center justify-center gap-3">
            <p>Total Tasks : 15</p>
            <span>|</span>
            <p>To Do: 10</p>
            <span>|</span>
            <p>Done : 5</p>
          </div>

          <input
            type="search"
            name="search"
            placeholder="Search"
            className="w-72 rounded-full px-5 py-2 ring-1 ring-gray-400 outline-none focus:ring-blue-500 sm:w-80"
          />
        </div>

        <div className="mt-5 flex flex-col justify-center gap-5 lg:flex-row">
          <div className="grow-0 basis-1/2 rounded-2xl bg-gray-50 p-4 lg:w-full xl:h-135 xl:p-6 2xl:w-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <GoTasklist className="size-7" />
                <h2>To Do</h2>
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="relative size-10 cursor-pointer rounded-full bg-indigo-500 px-5 py-2 text-white duration-300 hover:bg-black"
              >
                <BiAddToQueue className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2" />
              </button>
            </div>
            <ul className="flex flex-col gap-2 overflow-y-scroll py-5 xl:h-111 xl:gap-3 xl:p-5">
              {tasksData.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </ul>
          </div>
          <div className="grow-0 basis-1/2 rounded-2xl bg-white p-4 lg:w-full xl:h-135 xl:p-6 2xl:w-auto">
            <div className="flex items-center justify-start gap-2">
              <GrTask className="size-5" />
              <h2>Done</h2>
            </div>
            <ul className="flex flex-col gap-2 overflow-y-scroll py-5 xl:h-111 xl:gap-3 xl:p-5">
              {tasksData.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </ul>
          </div>
        </div>
      </main>
      <AddModal isAddModalOpen={isAddModalOpen} closeAddModal={closeAddModal} />
    </>
  );
}

function TaskItem({ task }: TaskItemProps) {
  const [selectedTask, setSelectedTask] = useState<null | task>(null);
  const [modalType, setModalType] = useState<modalTypeType>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (task: task, type: modalTypeType) => {
    setSelectedTask(task);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setModalType(null);
  };

  const urgent = false;
  const important = false;

  return (
    <>
      <li className="flex flex-col items-center justify-between gap-5 rounded-xl bg-white p-5 shadow-xl select-none md:flex-row">
        <label className="inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" />
          <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-400 text-transparent transition-colors peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white">
            <IoMdCheckmark className="size-5" />
          </div>
          <span className="ml-2 text-gray-800">
            Rounded checkbox with checkmark Rounded checkbox with checkmark
          </span>
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
                      {urgent ? "urgent" : "not urgent"}
                    </span>
                  }

                  {
                    <span
                      className={`rounded-full px-2 py-1 text-xs text-white capitalize ${important ? "bg-yellow-500" : "bg-gray-500"} `}
                    >
                      {important ? "important" : "not important"}
                    </span>
                  }
                </div>
                <p className="text-sm">Due : 14/15/2025 </p>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => openModal(task, "edit")}>
            <FiEdit className="size-5 cursor-pointer duration-300 hover:text-green-500" />
          </button>
          <button type="button" onClick={() => openModal(task, "delete")}>
            <LuDelete className="size-5 cursor-pointer duration-300 hover:text-red-500" />
          </button>
        </div>
      </li>

      <ModalContainer
        selectedTask={selectedTask}
        modalType={modalType}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    </>
  );
}
