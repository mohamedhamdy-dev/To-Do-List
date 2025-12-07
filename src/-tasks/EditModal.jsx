import { FiEdit } from "react-icons/fi";
import { useTask } from "../-context/TaskContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function EditModal({ task }) {
  const [form, setForm] = useState({
    done: task?.done,
    description: task?.description,
    dueDate: task?.dueDate,
    importance: task?.importance,
    urgency: task?.urgency,
  });

  const [errors, setErrors] = useState({});
  const { editTask } = useTask();

  function validateForm() {
    let newErrors = {};
    if (!form.description.trim())
      newErrors.description = "Task description is required.";
    if (!form.dueDate) newErrors.dueDate = "Due date is required.";
    return newErrors;
  }

  function handleChangeDescription(e) {
    setForm({ ...form, description: e.target.value });
  }

  function handleDateChange(value) {
    setForm({ ...form, dueDate: value });
  }

  function handleEdit(e) {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    editTask(task.id, form);
    setForm({
      done: false,
      description: "",
      dueDate: "",
      importance: "not important",
      urgency: "not urgent",
    });
    setErrors({});
  }

  return (
    <Dialog>
      <DialogTrigger>
        <FiEdit className="size-5 cursor-pointer text-indigo-300 duration-300 hover:text-green-400" />
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="max-w-96 border border-white/20 bg-gradient-to-br from-slate-800 to-indigo-900 sm:max-w-2xl"
      >
        <DialogTitle>
          <DialogClose>
            <h2 className="mb-4 text-xl font-bold text-white">Edit Task</h2>
            <div className="absolute top-3 right-3 cursor-pointer duration-300 hover:rotate-180">
              <HiMiniXMark className="size-7 text-white" />
            </div>
          </DialogClose>
        </DialogTitle>

        <div className="rounded-2xl p-[1px]">
          <div className="w-full rounded-2xl bg-white p-5">
            <div className="flex flex-col gap-10 sm:flex-row">
              <label
                htmlFor="description"
                className="mb-1 flex w-full flex-col gap-2 font-medium sm:w-1/2"
              >
                Task
                <textarea
                  name="description"
                  value={form.description}
                  required
                  onChange={(e) => handleChangeDescription(e)}
                  placeholder="Task Details"
                  className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                {errors.description && !form.description && (
                  <span className="text-sm text-red-500">
                    {errors.description}
                  </span>
                )}
              </label>

              {/* RIGHT SIDE CONTROLS */}
              <div className="flex w-full flex-col gap-6 sm:w-1/2">
                <div>
                  <DatePicker
                    date={form.dueDate}
                    onDateChange={handleDateChange}
                  />
                  {errors.dueDate && !form.dueDate && (
                    <span className="text-sm text-red-400">
                      {errors.dueDate}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <Dropdown
                    options={["urgent", "not urgent"]}
                    label={"Urgency"}
                    Icon={MdOutlineAccessTimeFilled}
                    value={form.urgency}
                    onChange={(value) => setForm({ ...form, urgency: value })}
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

            {/* SUBMIT BUTTON */}
            <div className="mt-5 flex justify-center sm:mt-0 sm:justify-end">
              <DialogClose>
                <div
                  onClick={handleEdit}
                  className="cursor-pointer rounded-lg bg-indigo-900/95 px-6 py-2 text-base font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-black"
                >
                  Edit
                </div>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
