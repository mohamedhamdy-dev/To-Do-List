import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import { motion } from "framer-motion";
import { useTask } from "../Context/TaskContext";

export default function Dashboard() {
  const { state: tasks } = useTask();

  const {
    total,
    completed,
    pending,
    overdue,
    createdThisWeek,
    importanceUrgencyData,
    completionRate,
  } = useMemo(() => {
    const total = tasks.length;

    const completed = tasks.filter((t) => t.done).length;
    const pending = tasks.filter((t) => !t.done).length;

    const overdue = tasks.filter((t) => {
      const due = new Date(t.dueDate);
      const now = new Date();
      return !t.done && due < now;
    }).length;

    const createdThisWeek = tasks.filter((t) => {
      const created = new Date(t.createdAt);
      const now = new Date();
      const weekAgo = new Date();
      weekAgo.setDate(now.getDate() - 7);
      return created >= weekAgo && created <= now;
    }).length;

    const importanceUrgencyMap = {};
    tasks.forEach((t) => {
      const key = `${t.importance} / ${t.urgency}`;
      importanceUrgencyMap[key] = (importanceUrgencyMap[key] || 0) + 1;
    });

    const importanceUrgencyData = Object.entries(importanceUrgencyMap).map(
      ([category, count]) => ({ category, count }),
    );

    const completionRate =
      total === 0 ? 0 : Math.round((completed / total) * 100);

    return {
      total,
      completed,
      pending,
      overdue,
      createdThisWeek,
      importanceUrgencyData,
      completionRate,
    };
  }, [tasks]);

  return (
    <main className="space-y-4 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 p-4 text-slate-100 shadow-xl">
      {/* Title */}
      <h1 className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-4xl font-extrabold text-transparent">
        Statistics
      </h1>

      {/* Stats Grid */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard label="Total Tasks" value={total} />
        <StatCard label="Completed Tasks" value={completed} />
        <StatCard label="Pending Tasks" value={pending} />
        <StatCard label="Overdue Tasks" value={overdue} />
        <StatCard label="Created This Week" value={createdThisWeek} />
        <StatCard label="Completion Rate (%)" value={`${completionRate}%`} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Completion Overview */}

        <div className="rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
          <h2 className="mb-4 text-xl font-semibold text-indigo-200">
            Completion Overview
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={[
                  { name: "Completed", value: completed },
                  { name: "Pending", value: pending },
                ]}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                <Cell fill="#4ade80" />
                <Cell fill="#f87171" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Importance x Urgency */}

        <div className="rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
          <h2 className="mb-4 text-xl font-semibold text-indigo-200">
            Importance × Urgency
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={importanceUrgencyData}>
              <XAxis dataKey="category" stroke="#c7d2fe" />
              <YAxis stroke="#c7d2fe" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#a78bfa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

/* -------------------- Stat Card -------------------- */

function StatCard({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex transform flex-col rounded-xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md transition hover:scale-[1.02] hover:shadow-indigo-500/30"
    >
      <span className="text-sm text-indigo-200">{label}</span>
      <span className="text-3xl font-bold text-white">{value}</span>
    </motion.div>
  );
}
