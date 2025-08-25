import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

function init() {
  const stored = localStorage.getItem("todoTasks");
  const parsed = JSON.parse(stored || "[]");
  return parsed;
}

const TaskContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, { id: action.id, ...action.payload }];
    }
    case "remove": {
      return state.filter((task) => task.id !== action.id);
    }
    case "edit": {
      return state.map((task) =>
        task.id === action.id ? { ...task, ...action.payload } : task,
      );
    }
    case "toggle": {
      return state.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task,
      );
    }
    default:
      return state;
  }
}

export default function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [], init);

  function addTask(taskData) {
    const stored = localStorage.getItem("todoTasks");
    const parsed = JSON.parse(stored || "[]");
    const id = uuidv4();
    const updatedTasks = [...parsed, { id: id, ...taskData }];
    localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
    dispatch({ type: "add", id: id, payload: taskData });
  }

  function removeTask(taskID) {
    const stored = localStorage.getItem("todoTasks");
    const parsed = JSON.parse(stored || "[]");
    const updatedTasks = parsed.filter((task) => task.id !== taskID);
    localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
    dispatch({ type: "remove", id: taskID });
  }

  function editTask(id, updates) {
    const stored = localStorage.getItem("todoTasks");
    const parsed = JSON.parse(stored || "[]");
    const updatedTasks = parsed.map((task) =>
      task.id === id ? { ...task, ...updates } : task,
    );
    localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
    dispatch({ type: "edit", id: id, payload: updates });
  }

  function toggleTask(id) {
    const stored = localStorage.getItem("todoTasks");
    const parsed = JSON.parse(stored || "[]");
    const updatedTasks = parsed.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    );
    localStorage.setItem("todoTasks", JSON.stringify(updatedTasks));
    dispatch({ type: "toggle", id });
  }

  const value = { state, addTask, editTask, removeTask, toggleTask };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTask() {
  const task = useContext(TaskContext);

  if (task === undefined)
    throw Error("tasks only accessable inside the context");
  else return task;
}
