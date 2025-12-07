import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import AppLayout from "./ui/AppLayout";
import Tasks from "./tasks/Tasks";
import Analytics from "./analytics/Analytics";
import { PageTransition } from "./ui/PageTransition";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<AppLayout />}>
          <Route
            index
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
            path="analytics"
            element={
              <PageTransition>
                <Analytics />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
