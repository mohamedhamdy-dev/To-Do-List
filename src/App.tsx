import { Route, Routes, useLocation } from "react-router";
import Tasks from "./Tasks/Tasks";

import Layout from "./Layout/Layout";
import EisenhowerMatrix from "./Eisenhower/EisenhowerMatrix";
import { AnimatePresence, motion } from "motion/react";
import { PageTransition } from "./UI/PageTransition";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Tasks />
              </PageTransition>
            }
          />

          <Route
            path="tasks"
            element={
              <PageTransition>
                <Tasks />
              </PageTransition>
            }
          />
          <Route
            path="eisenhower-matrix"
            element={
              <PageTransition>
                <EisenhowerMatrix />
              </PageTransition>
            }
          />
          <Route
            path="dashboard"
            element={
              <PageTransition>
                <Tasks />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
