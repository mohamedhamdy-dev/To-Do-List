import { useEffect, useRef, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FiAlertTriangle, FiEdit } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { GrTask } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";
import { LuDelete } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";
import { HiMiniXMark } from "react-icons/hi2";
import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";

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
  const task = {
    title: "sadfas",
  };

  return (
    <>
      <main className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">
        <div className="flex items-center justify-between rounded-2xl bg-white xl:p-6">
          <div className="flex items-center justify-center gap-3">
            {/* <div className="flex items-center justify-center gap-2">
            <BsListTask className="size-6" />
            <span>Total Tasks : 15</span>
            </div>
            <div className="flex items-center justify-center gap-2">
            <GoTasklist className="size-7" />

            <span>To Do: 10</span>
            </div>
            <div className="flex items-center justify-center gap-2">
            <GrTask className="size-5" />
            <span>Done : 5</span>
          </div> */}

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
                onClick={() => openModal(null, "edit")}
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
      {/* <ModalWindow
        modalType={modalType}
        modalRef={modalRef}
        closeModal={closeModal}
      /> */}
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      //   if (modalRef.current && !modalRef.current?.contains(event.target)) {
      //     closeModal();
      //   }
    };
    if (selectedTask) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedTask]);

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
            Rounded checkbox with checkmark
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

function ModalWindow({ selectedTask, modalType, modalRef, closeModal }) {
  return (
    <AnimatePresence>
      {selectedTask && modalType && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className={`relative w-full rounded-lg p-6 ${
              modalType === "add"
                ? "max-w-md bg-gradient-to-r from-indigo-500 to-blue-500"
                : modalType === "edit"
                  ? "max-w-2xl bg-gradient-to-br from-emerald-800 to-emerald-600/90"
                  : "max-w-md bg-gradient-to-r from-red-500 to-orange-500"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <h2 className="mb-4 text-xl font-bold text-white">
              {modalType === "edit"
                ? "Edit Task"
                : modalType === "Add"
                  ? "Add Task"
                  : "Delete Task"}
            </h2>

            {modalType === "add" && <AddModal />}

            {modalType === "edit" && (
              <EditModal closeModal={closeModal} selectedTask={selectedTask} />
            )}

            {modalType === "delete" && (
              <DeleteModal
                closeModal={closeModal}
                selectedTask={selectedTask}
              />
            )}

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 cursor-pointer text-sm duration-300 hover:rotate-180"
            >
              <HiMiniXMark className="size-7 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AddModal({ closeModal }) {
  // function AddModal() {
  const [form, setForm] = useState({
    descryption: "",
    dueDate: "",
    importance: "",
    urgency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-full rounded-2xl bg-white p-5">
        <div className="flex gap-10">
          <label
            htmlFor="descryption"
            className="mb-1 flex w-1/2 flex-col gap-2 font-medium"
          >
            Task
            <textarea
              id="descryption"
              name="descryption"
              value={form.descryption}
              onChange={handleChange}
              placeholder="Task Details"
              className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </label>
          <div className="flex w-1/2 flex-col justify-start gap-5">
            <DatePicker />
            <div className="flex gap-2">
              <Dropdown
                options={["urgent", "not urgent"]}
                label={"Urgency"}
                Icon={MdOutlineAccessTimeFilled}
              />

              <Dropdown
                options={["important", "not important"]}
                label={"Importance"}
                Icon={FaStar}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 w-full cursor-pointer rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

function DeleteModal({ closeModal, selectedTask }) {
  // function DeleteModal() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-2xl bg-white p-6 text-center shadow-xl">
      <div className="flex justify-center text-4xl text-red-500">
        <FiAlertTriangle />
      </div>

      <h2 className="text-xl font-semibold text-gray-800">Delete Auction?</h2>

      <p className="text-sm text-gray-600">
        Are you sure you want to delete this task?{" "}
        <strong className="text-red-600">Task Name</strong>
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={closeModal}
          className="cursor-pointer rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          // onClick={onDelete}
          className="cursor-pointer rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function EditModal({ closeModal, selectedTask }) {
  // function EditModal() {
  const [form, setForm] = useState({
    descryption: selectedTask.descryption || "",
    dueDate: selectedTask.dueDate || "",
    importance: selectedTask.importance || "",
    urgency: selectedTask.urgency || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-full rounded-2xl bg-white p-5">
        <div className="flex gap-10">
          <label
            htmlFor="descryption"
            className="mb-1 flex w-1/2 flex-col gap-2 font-medium"
          >
            Task
            <textarea
              id="descryption"
              name="descryption"
              value={form.descryption}
              onChange={handleChange}
              placeholder="Task Details"
              className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </label>
          <div className="flex w-1/2 flex-col justify-start gap-5">
            <DatePicker />
            <div className="flex gap-2">
              <Dropdown
                options={["urgent", "not urgent"]}
                label={"Urgency"}
                Icon={MdOutlineAccessTimeFilled}
              />

              <Dropdown
                options={["important", "not important"]}
                label={"Importance"}
                Icon={FaStar}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 w-full cursor-pointer rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
