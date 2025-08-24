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

  const { addTask } = useTask();
  console.log(form);

  function handleChangeDescription(e) {
    setForm({ ...form, description: e.target.value });
  }

  function handleAdd(e) {
    addTask(form);
    console.log(form);
  }

  function handleDateChange(value) {
    setForm({ ...form, dueDate: value });
  }

  return (
    <>
      <div>
        <div className="w-full rounded-2xl bg-white p-5">
          <div className="flex gap-10">
            <label
              htmlFor="description"
              className="mb-1 flex w-1/2 flex-col gap-2 font-medium"
            >
              Task
              <textarea
                name="description"
                value={form.description}
                onChange={(e) => handleChangeDescription(e)}
                placeholder="Task Details"
                className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </label>
            <div className="flex w-1/2 flex-col justify-start gap-5">
              <DatePicker date={form.dueDate} onDateChange={handleDateChange} />
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

          <DialogClose>
            <div
              onClick={handleAdd}
              className="mt-5 w-full cursor-pointer rounded-lg bg-blue-500 px-5 py-2 font-medium text-white duration-300 hover:bg-indigo-500"
            >
              Add Task
            </div>
          </DialogClose>
        </div>
      </div>
    </>
  );
}
