import { useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import { useTask } from "@/Context/TaskContext";
import { DialogClose } from "@/components/ui/dialog";
import { BiAddToQueue } from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { HiMiniXMark } from "react-icons/hi2";

export default function AddModal() {
  const [form, setForm] = useState({
    done: false,
    description: "",
    dueDate: "",
    importance: "not important",
    urgency: "not urgent",
  });
  const [errors, setErrors] = useState({});
  const { addTask } = useTask();

  function validateForm() {
    let newErrors = {};

    if (!form.description.trim()) {
      newErrors.description = "Task description is required.";
    }

    if (!form.dueDate) {
      newErrors.dueDate = "Due date is required.";
    }

    return newErrors;
  }

  function handleChangeDescription(e) {
    setForm({ ...form, description: e.target.value });
  }

  function handleAdd(e) {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      return;
    }

    addTask({ ...form, createdAt: new Date().toISOString() });
    setForm({
      done: false,
      description: "",
      dueDate: "",
      importance: "not important",
      urgency: "not urgent",
    });
    setErrors({});
  }

  function handleDateChange(value) {
    setForm({ ...form, dueDate: value });
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative size-10 cursor-pointer rounded-full bg-indigo-500 shadow-md shadow-indigo-500/40 transition hover:bg-indigo-400">
          <BiAddToQueue className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="max-w-96 border border-white/20 bg-gradient-to-br from-slate-800 to-indigo-900 sm:max-w-2xl"
      >
        <DialogTitle>
          <DialogClose>
            <h2 className="mb-4 text-xl font-bold text-white">Add Task</h2>
            <div className="absolute top-3 right-3 cursor-pointer duration-300 hover:rotate-180">
              <HiMiniXMark className="size-7 text-white" />
            </div>
          </DialogClose>
        </DialogTitle>

        <div className="">
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
              <div className="flex w-1/2 flex-col justify-start gap-5">
                <div>
                  <DatePicker
                    date={form.dueDate}
                    onDateChange={handleDateChange}
                  />
                  {errors.dueDate && !form.dueDate && (
                    <span className="text-sm text-red-500">
                      {errors.dueDate}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Dropdown
                    key={"urgency"}
                    options={["urgent", "not urgent"]}
                    label={"Urgency"}
                    Icon={MdOutlineAccessTimeFilled}
                    value={form.urgency}
                    onChange={(value) => setForm({ ...form, urgency: value })}
                  />

                  <Dropdown
                    key={"importance"}
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

            <div className="mt-5 flex justify-center rounded-full sm:mt-0 sm:justify-end">
              <DialogClose>
                <div
                  onClick={handleAdd}
                  className="w-full cursor-pointer rounded-lg bg-indigo-900/95 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-black sm:px-5 sm:text-base"
                >
                  Add Task
                </div>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
