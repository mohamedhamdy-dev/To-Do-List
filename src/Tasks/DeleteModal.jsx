import { FiAlertTriangle } from "react-icons/fi";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTask } from "@/Context/TaskContext";

export default function DeleteModal({ id }) {
  const { removeTask } = useTask();

  return (
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
  );
}
