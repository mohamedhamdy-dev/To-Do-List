import { FiAlertTriangle } from "react-icons/fi";
import type { DeleteModalProp } from "./Modal.types";

export default function DeleteModal({
  closeModal,
  selectedTask,
}: DeleteModalProp) {
  // function DeleteModal() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-2xl bg-white p-6 text-center shadow-xl">
      <div className="flex justify-center text-4xl text-red-500">
        <FiAlertTriangle />
      </div>

      <h2 className="text-xl font-semibold text-gray-800">Delete Task?</h2>

      <p className="text-sm text-gray-600">
        Are you sure you want to delete this task?{" "}
        <strong className="text-red-600">Task Name</strong>
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={closeModal}
          className="cursor-pointer rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 duration-300 hover:bg-green-500 hover:text-white"
        >
          Cancel
        </button>
        <button
          // onClick={onDelete}
          className="cursor-pointer rounded-xl bg-orange-700 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
