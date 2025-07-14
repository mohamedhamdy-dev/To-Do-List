import { useEffect, useRef, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FiAlertTriangle, FiEdit } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { GrTask } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { LuDelete } from "react-icons/lu";

import ModalWindow, { AddModal } from "./Modals";

// 1 state to handle opening and closeing the modal
// 2 modal component redered condtionally base on state
// 3 click outside close the modal   -> use Effect to check if it does click outside
// 4 i need also modal component for editing task data
// 5 i need also maodl component for confirming deletetion
// 6 how to modal the state for the 3 modal windows -> need open state + type === modal type to open window
// 7 when closing the window make the open state = false  ,  type state = null
// 8 i need overlay to blur the vision outside the modal window
// 9

////////////////////////////////////////////////////

// 1 open modal from   tasks  &  task Item
// 2 open modal take task as optional only for add  ... else it's required
// 3;

export default function Tasks() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const task = {
    title: "sadfas",
  };

  function closeAddModal() {
    setIsAddModalOpen(false);
  }

  return (
    <>
      <main className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">
        <div className="flex items-center justify-between rounded-2xl bg-white xl:p-6">
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
            className="rounded-full px-5 py-1 ring-1 ring-gray-400 outline-none focus:ring-blue-500 xl:w-80"
          />
        </div>

        <div className="flex items-center justify-center gap-5 xl:p-6">
          <div className="bg-white-500 shrink-0 grow-0 basis-1/2 rounded-2xl bg-white xl:min-h-96 xl:p-6">
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

            <ul className="flex flex-col p-5 xl:gap-5 2xl:min-h-96">
              <TaskItem task={task} />
              <TaskItem task={task} />
              <TaskItem task={task} />
            </ul>
          </div>
          <div className="shrink-0 grow-0 basis-1/2 rounded-2xl bg-white xl:min-h-96 xl:p-6">
            <div className="flex items-center justify-start gap-2">
              <GrTask className="size-5" />
              <h2>Done</h2>
            </div>
            <ul className="flex flex-col p-5 xl:gap-5 2xl:min-h-96">
              <TaskItem task={task} />
              <TaskItem task={task} />
              <TaskItem task={task} />
            </ul>
          </div>
        </div>
      </main>
      <AddModal isAddModalOpen={isAddModalOpen} closeAddModal={closeAddModal} />
    </>
  );
}

function TaskItem({ task }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);

  const openModal = (task, type) => {
    setSelectedTask(task);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setModalType(null);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current?.contains(event.target)) {
  //       closeModal();
  //     }
  //   };

  //   console.log(event.target);
  //   console.log(modalRef.current);

  //   if (selectedTask) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [selectedTask]);

  const urgent = false;
  const important = false;

  return (
    <>
      <li className="red-500 flex items-center justify-between gap-5 rounded-xl border-1 border-amber-500 bg-white p-5 shadow-xl select-none">
        <label className="inline-flex w-1/2 cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" />
          <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-400 text-transparent transition-colors peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white">
            <IoMdCheckmark className="size-5" />
          </div>
          <span className="ml-2 text-gray-800">
            Rounded checkbox with checkmark Rounded checkbox with checkmark
          </span>
        </label>

        <div className="flex w-1/2 items-center gap-4 px-2">
          <div className="text-center">
            <div className="mb-2 flex items-center gap-2">
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
          <div className="flex items-center gap-4 px-2">
            <button type="button" onClick={() => openModal(task, "edit")}>
              <FiEdit className="size-5 cursor-pointer duration-300 hover:text-green-500" />
            </button>
            <button type="button" onClick={() => openModal(task, "delete")}>
              <LuDelete className="size-5 cursor-pointer duration-300 hover:text-red-500" />
            </button>
          </div>
        </div>
      </li>

      <ModalWindow
        selectedTask={selectedTask}
        modalType={modalType}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    </>
  );
}
