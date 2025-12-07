import { FiAlertTriangle } from "react-icons/fi";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTask } from "@/context/TaskContext";
import { TfiTrash } from "react-icons/tfi";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniXMark } from "react-icons/hi2";

export default function DeleteModal({ id }) {
  const { removeTask } = useTask();

  return (
    <Dialog>
      <DialogTrigger>
        <TfiTrash className="size-5 cursor-pointer text-indigo-300 duration-300 hover:text-red-500" />
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="max-w-96 border border-white/20 bg-gradient-to-br from-slate-800 to-indigo-900"
      >
        <DialogTitle>
          <DialogClose>
            <h2 className="mb-4 text-xl font-bold text-white">Delete Task</h2>
            <div className="absolute top-3 right-3 cursor-pointer duration-300 hover:rotate-180">
              <HiMiniXMark className="size-7 text-white" />
            </div>
          </DialogClose>
        </DialogTitle>

        <div className="mx-auto w-full max-w-sm space-y-4 rounded-2xl bg-white p-6 text-center shadow-xl">
          <div className="flex justify-center text-4xl text-red-500">
            <FiAlertTriangle />
          </div>

          <p className="text-sm text-gray-600">
            Are you sure you want to delete this task?{" "}
          </p>

          <DialogClose>
            <div
              onClick={() => removeTask(id)}
              className="cursor-pointer rounded-xl bg-orange-700 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-red-500"
            >
              Delete
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
