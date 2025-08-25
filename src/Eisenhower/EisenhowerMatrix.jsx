import { useTask } from "../Context/TaskContext";
import TaskItem from "../Tasks/TaskItem";

function EisenhowerMatrix() {
  const { state: tasks } = useTask();

  const importantAndUrgent = tasks.filter(
    (task) =>
      task.done === false &&
      task.urgency === "urgent" &&
      task.importance === "important",
  );
  const importantAndNotUrgent = tasks.filter(
    (task) =>
      task.done === false &&
      task.urgency === "not urgent" &&
      task.importance === "important",
  );
  const notImportantAndUrgent = tasks.filter(
    (task) =>
      task.done === false &&
      task.urgency === "urgent" &&
      task.importance === "not important",
  );
  const notImportantAndNotUrgent = tasks.filter(
    (task) =>
      task.done === false &&
      task.urgency === "not urgent" &&
      task.importance === "not important",
  );

  console.log(tasks);
  return (
    <main className="h-auto rounded-2xl bg-gradient-to-r from-blue-900 to-violet-800 p-5">
      {/* <div className="h-[800px] bg-white"> */}

      {/* <div className="h-[700px] rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5"> */}

      <div className="grid h-full grid-cols-[50px_1fr_1fr] grid-rows-[50px_1fr_1fr] items-center justify-center gap-5">
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex h-full flex-col items-center justify-center rounded-2xl bg-white text-red-700 italic xl:text-3xl">
          Urgent
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 flex h-full items-center justify-center rounded-2xl bg-white text-green-700 italic xl:text-3xl">
          Not Urgent
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex h-full items-center justify-center rounded-2xl bg-white text-yellow-700 italic xl:text-3xl">
          <span className="rotate-270 text-nowrap">Important</span>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex h-full items-center justify-center rounded-2xl bg-white text-gray-700 italic xl:text-3xl">
          <span className="rotate-270 text-nowrap">Not Important</span>
        </div>

        {/* top-left  */}
        <TopLeft tasks={importantAndUrgent} />

        {/* top-right */}
        <TopRight tasks={importantAndNotUrgent} />

        {/* bot-left */}
        <BotLeft tasks={notImportantAndUrgent} />

        {/* bot-right */}
        <BotRight tasks={notImportantAndNotUrgent} />
      </div>
    </main>
  );
}
export default EisenhowerMatrix;

function TopLeft({ tasks }) {
  return (
    <div className="col-start-2 row-start-2 h-64 overflow-hidden rounded-2xl bg-white p-5">
      <ul className="flex h-54 flex-col gap-3 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
function TopRight({ tasks }) {
  return (
    <div className="col-start-3 row-start-2 h-64 overflow-hidden rounded-2xl bg-white p-5">
      <ul className="flex h-54 flex-col gap-3 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
function BotLeft({ tasks }) {
  return (
    <div className="col-start-2 row-start-3 h-64 overflow-hidden rounded-2xl bg-white p-5">
      <ul className="flex h-54 flex-col gap-3 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
function BotRight({ tasks }) {
  return (
    <div className="col-start-3 row-start-3 h-64 overflow-hidden rounded-2xl bg-white p-5">
      <ul className="flex h-54 flex-col gap-3 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
