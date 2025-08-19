export type task = {
  id: number;
  descryption: string;
  dueDate: string;
  importance: string;
  urgency: string;
};

export type TaskItemProps = {
  task: task;
};
