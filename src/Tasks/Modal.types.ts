import type { task } from "@/Tasks/Tasks.types";

export type EditModalProps = {
  selectedTask: task;
  closeModal: () => void;
};

export type AddModalProps = {
  isAddModalOpen: boolean;
  closeAddModal: () => void;
};

export type DeleteModalProp = {
  selectedTask: task;
  closeModal: () => void;
};

export type modalTypeType = null | "edit" | "add" | "delete";

export type ModalContainerProps = {
  selectedTask: task | null;
  modalType: modalTypeType;
  modalRef: React.RefObject<HTMLDivElement | null>;
  closeModal: () => void;
};

export type Dropdown = {
  options: string[];
  label: string;
  value: string;
  onChange: (value: string) => void;
  Icon: React.ComponentType<{ className?: string }>;
};
