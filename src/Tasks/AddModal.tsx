import { useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { HiMiniXMark } from "react-icons/hi2";
import type { AddModalProps } from "./Modal.types";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";

export default function AddModal({
  isAddModalOpen,
  closeAddModal,
}: AddModalProps) {
  const [form, setForm] = useState({
    descryption: "",
    dueDate: undefined,
    importance: "not important",
    urgency: "not urgent",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);
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
                    <DatePicker
                      value={form.dueDate}
                      setValue={(value) => setForm({ ...form, dueDate: value })}
                    />
                    <div className="flex gap-2">
                      <Dropdown
                        options={["urgent", "not urgent"]}
                        label={"Urgency"}
                        Icon={MdOutlineAccessTimeFilled}
                        value={form.urgency}
                        onChange={(value) =>
                          setForm({ ...form, urgency: value })
                        }
                      />

                      <Dropdown
                        options={["important", "not important"]}
                        label={"Importance"}
                        Icon={FaStar}
                        value={form.importance}
                        onChange={(value) =>
                          setForm({ ...form, importance: value })
                        }
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
