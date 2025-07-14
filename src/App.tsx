import { createBrowserRouter, RouterProvider } from "react-router";
import Tasks from "./Tasks/Tasks";

import Layout from "./Layout/Layout";
import EisenhowerMatrix from "./Eisenhower/EisenhowerMatrix";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, path: "/tasks", Component: Tasks },
      { path: "/eisenhower-matrix", Component: EisenhowerMatrix },
      { path: "/dashboard", Component: Tasks },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
