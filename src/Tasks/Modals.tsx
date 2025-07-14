import { useState } from "react";
import Dropdown from "./Dropdown";
import { FiAlertTriangle } from "react-icons/fi";
import DatePicker from "./DatePicker";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { HiMiniXMark } from "react-icons/hi2";

export default function ModalWindow({
  selectedTask,
  modalType,
  modalRef,
  closeModal,
}) {
  return (
    <AnimatePresence>
      {selectedTask && modalType && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal} // Clicking backdrop closes modal
        >
          <motion.div
            ref={modalRef}
            className={`relative w-full rounded-lg p-6 ${
              modalType === "add"
                ? "max-w-md bg-gradient-to-r from-indigo-500 to-blue-500"
                : modalType === "edit"
                  ? "max-w-2xl bg-gradient-to-br from-emerald-700 to-green-500/90"
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
            onMouseDown={(e) => e.stopPropagation()} // prevent backdrop click
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
          className="cursor-pointer rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 duration-300 hover:bg-green-500 hover:text-white"
        >
          Cancel
        </button>
        <button
          // onClick={onDelete}
          className="cursor-pointer rounded-xl bg-orange-700 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-red-500"
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
                options={["not urgent", "urgent"]}
                label={"Urgency"}
                Icon={MdOutlineAccessTimeFilled}
              />

              <Dropdown
                options={["not important", "important"]}
                label={"Importance"}
                Icon={FaStar}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 w-full cursor-pointer rounded-lg bg-green-600/90 px-5 py-2 font-medium text-white duration-300 hover:bg-emerald-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

//////////////////////////////////////////////////////////

export function AddModal({ isAddModalOpen, closeAddModal }) {
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
    closeAddModal();
  };

  return (
    <AnimatePresence>
      {isAddModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeAddModal} // Clicking backdrop closes modal
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 p-6"
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
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-xl font-bold text-white">Add Task</h2>

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
                      className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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
                  className="mt-5 w-full cursor-pointer rounded-lg bg-blue-500 px-5 py-2 font-medium text-white duration-300 hover:bg-indigo-500"
                >
                  Add Task
                </button>
              </div>
            </form>

            <button
              onClick={closeAddModal}
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
