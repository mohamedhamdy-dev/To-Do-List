import { AnimatePresence, motion } from "motion/react";
import { HiMiniXMark } from "react-icons/hi2";
import type { ModalContainerProps } from "./Modal.types";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal.tsx";

export default function ModalContainer({
  selectedTask,
  modalType,
  modalRef,
  closeModal,
}: ModalContainerProps) {
  return (
    <AnimatePresence>
      {selectedTask && modalType && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal} // Clicking backdrop closes modal
        >
          <motion.div
            ref={modalRef}
            className={`relative w-full rounded-lg p-6 ${
              modalType === "add"
                ? "max-w-md bg-gradient-to-r from-indigo-500 to-blue-500"
                : modalType === "edit"
                  ? "max-w-2xl bg-gradient-to-br from-emerald-700 to-green-500/90"
                  : "max-w-md bg-gradient-to-r from-red-500 to-orange-500"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
            onMouseDown={(e) => e.stopPropagation()} // prevent backdrop click
          >
            <h2 className="mb-4 text-xl font-bold text-white">
              {modalType === "edit" ? "Edit Task" : "Delete Task"}
            </h2>

            {modalType === "edit" && (
              <EditModal closeModal={closeModal} selectedTask={selectedTask} />
            )}

            {modalType === "delete" && (
              <DeleteModal
                closeModal={closeModal}
                selectedTask={selectedTask}
              />
            )}

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 cursor-pointer text-sm duration-300 hover:rotate-180"
            >
              <HiMiniXMark className="size-7 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
