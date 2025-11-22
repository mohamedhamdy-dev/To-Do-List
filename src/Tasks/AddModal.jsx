// import { useState } from "react";
// import { MdOutlineAccessTimeFilled } from "react-icons/md";
// import { FaStar } from "react-icons/fa";
// import DatePicker from "./DatePicker";
// import Dropdown from "./Dropdown";
// import { useTask } from "@/Context/TaskContext";
// import { DialogClose } from "@/components/ui/dialog";

// export default function AddModal() {
//   const [form, setForm] = useState({
//     done: false,
//     description: "",
//     dueDate: "",
//     importance: "not important",
//     urgency: "not urgent",
//     color: "bg-yellow-200",
//   });
//   const [errors, setErrors] = useState({});
//   const { addTask } = useTask();

//   function validateForm() {
//     let newErrors = {};

//     if (!form.description.trim()) {
//       newErrors.description = "Task description is required.";
//     }

//     if (!form.dueDate) {
//       newErrors.dueDate = "Due date is required.";
//     }

//     return newErrors;
//   }

//   function handleChangeDescription(e) {
//     setForm({ ...form, description: e.target.value });
//   }

//   function handleAdd(e) {
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       e.preventDefault();
//       setErrors(newErrors);
//       return;
//     }

//     addTask({ ...form, createdAt: new Date().toISOString() });
//     setForm({
//       done: false,
//       description: "",
//       dueDate: "",
//       importance: "not important",
//       urgency: "not urgent",
//       color: "bg-yellow-200",
//     });
//     setErrors({});
//   }

//   function handleDateChange(value) {
//     setForm({ ...form, dueDate: value });
//   }

//   function handleChangeColor(e) {
//     setForm({ ...form, color: `bg-${e.target.id}-200` });
//   }

//   return (
//     <>
//       <div>
//         <div className="w-full rounded-2xl bg-white p-5">
//           <div className="flex gap-10">
//             <label
//               htmlFor="description"
//               className="mb-1 flex w-1/2 flex-col gap-2 font-medium"
//             >
//               Task
//               <textarea
//                 name="description"
//                 value={form.description}
//                 required
//                 onChange={(e) => handleChangeDescription(e)}
//                 placeholder="Task Details"
//                 className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               />
//               {errors.description && !form.description && (
//                 <span className="text-sm text-red-500">
//                   {errors.description}
//                 </span>
//               )}
//             </label>
//             <div className="flex w-1/2 flex-col justify-start gap-5">
//               <div>
//                 <DatePicker
//                   date={form.dueDate}
//                   onDateChange={handleDateChange}
//                 />
//                 {errors.dueDate && !form.dueDate && (
//                   <span className="text-sm text-red-500">{errors.dueDate}</span>
//                 )}
//               </div>
//               <div className="flex gap-2">
//                 <Dropdown
//                   key={"urgency"}
//                   options={["urgent", "not urgent"]}
//                   label={"Urgency"}
//                   Icon={MdOutlineAccessTimeFilled}
//                   value={form.urgency}
//                   onChange={(value) => setForm({ ...form, urgency: value })}
//                 />

//                 <Dropdown
//                   key={"importance"}
//                   options={["important", "not important"]}
//                   label={"Importance"}
//                   Icon={FaStar}
//                   value={form.importance}
//                   onChange={(value) => setForm({ ...form, importance: value })}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 flex items-center justify-between rounded-full">
//             <ul className="flex items-center gap-2">
//               <li
//                 onClick={handleChangeColor}
//                 id="yellow"
//                 className={`${form.color === "bg-yellow-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-yellow-300`}
//               ></li>
//               <li
//                 onClick={handleChangeColor}
//                 id="blue"
//                 className={`${form.color === "bg-blue-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-blue-300`}
//               ></li>
//               <li
//                 onClick={handleChangeColor}
//                 id="green"
//                 className={`${form.color === "bg-green-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-green-300`}
//               ></li>
//               <li
//                 onClick={handleChangeColor}
//                 id="red"
//                 className={`${form.color === "bg-red-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-red-300`}
//               ></li>
//               <li
//                 onClick={handleChangeColor}
//                 id="gray"
//                 className={`${form.color === "bg-gray-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-gray-300`}
//               ></li>
//               <li
//                 onClick={handleChangeColor}
//                 id="indigo"
//                 className={`${form.color === "bg-indigo-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-indigo-300`}
//               ></li>
//             </ul>

//             <DialogClose>
//               <div
//                 onClick={handleAdd}
//                 className="w-full cursor-pointer rounded-lg bg-blue-500 px-5 py-2 font-medium text-white duration-300 hover:bg-indigo-500"
//               >
//                 Add Task
//               </div>
//             </DialogClose>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
    color: "bg-yellow-200",
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
      color: "bg-yellow-200",
    });
    setErrors({});
  }

  function handleDateChange(value) {
    setForm({ ...form, dueDate: value });
  }

  function handleChangeColor(e) {
    setForm({ ...form, color: `bg-${e.target.id}-200` });
  }

  return (
    <>
      <div className="">
        <div className="w-full rounded-2xl bg-white p-5">
          <div className="flex flex-col gap-10 sm:flex-row">
            <label
              htmlFor="description"
              // className="mb-1 flex w-1/2 flex-col gap-2 font-medium"
              className="mb-1 flex w-full flex-col gap-2 font-medium sm:w-1/2"
            >
              Task
              <textarea
                name="description"
                value={form.description}
                required
                onChange={(e) => handleChangeDescription(e)}
                placeholder="Task Details"
                // className="h-44 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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

          <div className="mt-5 flex items-center justify-between rounded-full">
            <ul className="flex items-center gap-2">
              <li
                onClick={handleChangeColor}
                id="yellow"
                className={`${form.color === "bg-yellow-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-yellow-300`}
              ></li>
              <li
                onClick={handleChangeColor}
                id="blue"
                className={`${form.color === "bg-blue-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-blue-300`}
              ></li>
              <li
                onClick={handleChangeColor}
                id="green"
                className={`${form.color === "bg-green-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-green-300`}
              ></li>
              <li
                onClick={handleChangeColor}
                id="red"
                className={`${form.color === "bg-red-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-red-300`}
              ></li>
              <li
                onClick={handleChangeColor}
                id="gray"
                className={`${form.color === "bg-gray-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-gray-300`}
              ></li>
              <li
                onClick={handleChangeColor}
                id="indigo"
                className={`${form.color === "bg-indigo-200" ? "border-2 border-gray-500" : ""} size-8 cursor-pointer rounded-full bg-indigo-300`}
              ></li>
            </ul>

            <DialogClose>
              <div
                onClick={handleAdd}
                className="w-full cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-indigo-500 sm:px-5 sm:text-base"
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
