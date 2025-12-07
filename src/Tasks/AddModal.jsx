import { useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import { useTask } from "@/Context/TaskContext";
import { DialogClose } from "@/components/ui/dialog";

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
    <>
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
                  <span className="text-sm text-red-500">{errors.dueDate}</span>
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
                  onChange={(value) => setForm({ ...form, importance: value })}
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
    </>
  );
}
