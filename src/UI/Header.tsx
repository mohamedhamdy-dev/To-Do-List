export default function Header() {
  return (
    <nav className="">
      <ul className="flex items-center justify-center gap-5 rounded-2xl bg-green-500 px-8 py-4">
        <li className="rounded-3xl bg-red-500 px-3 py-2">Tasks</li>
        <li className="rounded-3xl bg-red-500 px-3 py-2">Eisenhower Matrix</li>
        <li className="rounded-3xl bg-red-500 px-3 py-2">Dashboard</li>
      </ul>
    </nav>
  );
}
