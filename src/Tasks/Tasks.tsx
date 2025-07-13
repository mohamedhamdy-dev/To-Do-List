import { FiEdit } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { LuDelete } from "react-icons/lu";

export default function Tasks() {
  return (
    <main className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">
      <div className="flex items-center justify-between rounded-2xl bg-white xl:p-6">
        <div className="flex items-center justify-center gap-5">
          <div>Total Tasks : 15</div>
          <div>un Done : 10</div>
          <div>Done : 5</div>
        </div>

        <input
          type="search"
          name="search"
          placeholder="Search"
          className="rounded-full px-5 py-1 ring-1 ring-gray-400 outline-none focus:ring-blue-500 xl:w-80"
        />
      </div>

      <div className="flex items-center justify-center gap-5 xl:p-6">
        <div className="bg-white-500 shrink-0 grow-0 basis-1/2 rounded-2xl bg-gray-200 xl:min-h-96 xl:p-6">
          <h2>To Do</h2>
          <ul className="flex flex-col p-5 xl:gap-5">
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </ul>
        </div>
        <div className="shrink-0 grow-0 basis-1/2 rounded-2xl bg-white xl:min-h-96 xl:p-6">
          <h2>Done</h2>
          <ul>
            <TaskItem />
          </ul>
        </div>
      </div>
    </main>
  );
}

function TaskItem() {
  return (
    <li className="red-500 flex items-center justify-between gap-5 rounded-xl bg-white p-5 shadow-xl select-none">
      <label className="inline-flex cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" />
        <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-400 text-transparent transition-colors peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:text-white">
          <IoMdCheckmark className="size-5" />
        </div>
        <span className="ml-2 text-gray-800">
          Rounded checkbox with checkmark
        </span>
      </label>
      <div className="flex items-center gap-4 px-2">
        <div>
          <FiEdit className="size-5 cursor-pointer duration-300 hover:text-green-500" />
        </div>
        <div>
          <LuDelete className="size-5 cursor-pointer duration-300 hover:text-red-500" />
        </div>
      </div>
    </li>
  );
}
