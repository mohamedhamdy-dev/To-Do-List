import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FaList } from "react-icons/fa";

import { TiInfoLarge } from "react-icons/ti";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MobileOptions({ task }) {
  const urgent = task.urgency === "urgent";
  const important = task.importance === "important";

  return (
    <div className="flex items-center justify-center md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-full bg-indigo-500 p-2 text-white shadow-lg">
            <FaList className="size-4" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          side="top"
          sideOffset={8}
          className="mt-2 flex w-36 flex-col gap-2 rounded-2xl border border-white/10 bg-white p-3 text-black shadow-[0_0_18px_rgba(139,92,246,0.35)] backdrop-blur-xl"
        >
          {/* INFO */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex w-full items-center gap-2 text-left hover:text-indigo-300">
                <TiInfoLarge className="size-5" />
                View Info
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle className="text-white">Task Info</DialogTitle>

              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs text-white ${urgent ? "bg-red-500" : "bg-green-600"} `}
                  >
                    {task.urgency}
                  </span>

                  <span
                    className={`rounded-full px-2 py-1 text-xs text-white ${important ? "bg-yellow-500" : "bg-gray-500"} `}
                  >
                    {task.importance}
                  </span>
                </div>

                <p className="text-sm">Due: {task.dueDate}</p>
              </div>
            </DialogContent>
          </Dialog>

          {/* EDIT */}
          <EditModal task={task} />

          {/* DELETE */}
          <DeleteModal id={task.id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
