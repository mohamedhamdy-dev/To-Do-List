import { useState } from "react";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import type { EditModalProps } from "./Modal.types";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function EditModal({
  closeModal,
  selectedTask,
}: EditModalProps) {
  // function EditModal() {
  const [form, setForm] = useState({
    descryption: selectedTask.descryption || "",
    dueDate: selectedTask.dueDate || "",
    importance: selectedTask.importance || "",
    urgency: selectedTask.urgency || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
