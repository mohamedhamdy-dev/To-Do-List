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

    const monthMap = {};
    tasks.forEach((t) => {
      const month = new Date(t.createdAt).toLocaleString("default", {
        month: "short",
      });
      monthMap[month] = (monthMap[month] || 0) + 1;
    });

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
    <main className="h-auto space-y-6 rounded-2xl bg-gradient-to-r from-blue-900 to-violet-800 p-5 p-6">
      <h1 className="text-3xl font-bold text-white">Statistics</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard label="Total Tasks" value={total} />
        <StatCard label="Completed Tasks" value={completed} />
        <StatCard label="Pending Tasks" value={pending} />
        <StatCard label="Overdue Tasks" value={overdue} />
        <StatCard label="Created This Week" value={createdThisWeek} />
        <StatCard label="Completion Rate (%)" value={`${completionRate}%`} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-semibold">Completion Overview</h2>
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

        <div className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-semibold">Importance × Urgency</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={importanceUrgencyData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-4 shadow">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
}
