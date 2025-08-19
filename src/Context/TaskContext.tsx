// import { useReducer } from "react";
// import { createContext } from "vm";

// const TaskContext = createContext();

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return;
//     case "delete":
//       return;
//     case "edit":
//       return;
//     default:
//       return state;
//   }
// }

// export default function TaskProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return <TaskContext.Provider value={}>{children}</TaskContext.Provider>;
// }
