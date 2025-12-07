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
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import { useTask } from "@/context/TaskContext";

export default function Analytics() {
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
    <main className="space-y-4 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 p-4 text-slate-100 shadow-xl sm:rounded-2xl">
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
                <Cell fill="#38bdf8" />
                <Cell fill="#818cf8" />
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
              {/* Aurora Gradient Fill */}
              <defs>
                <linearGradient id="auroraGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5eead4" stopOpacity={0.9} />{" "}
                  {/* Aqua */}
                  <stop
                    offset="100%"
                    stopColor="#a78bfa"
                    stopOpacity={0.9}
                  />{" "}
                  {/* Violet */}
                </linearGradient>
              </defs>

              <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />

              <XAxis
                dataKey="category"
                stroke="#dbeafe"
                tick={{ fill: "#e0e7ff", fontSize: 13 }}
                tickLine={false}
                axisLine={{ stroke: "#6366f1" }}
              />

              <YAxis
                stroke="#dbeafe"
                tick={{ fill: "#e0e7ff", fontSize: 13 }}
                tickLine={false}
                axisLine={{ stroke: "#6366f1" }}
              />

              <Tooltip
                contentStyle={{
                  background:
                    "linear-gradient(135deg, rgba(94,234,212,0.15), rgba(167,139,250,0.15))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "white",
                }}
              />

              <Legend wrapperStyle={{ color: "#e0e7ff" }} />

              <Bar
                dataKey="count"
                fill="url(#auroraGradient)"
                radius={[10, 10, 4, 4]} // Rounded top edges
                barSize={40}
                activeBar={false}
              />
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
