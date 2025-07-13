export default function Tasks() {
  return (
    <main className="rounded-2xl bg-red-500 p-5">
      <div>control bar </div>
      <div className="flex items-center justify-center gap-5">
        <div className="shrink-0 grow-0 basis-1/2 bg-blue-500">unDone </div>
        <div className="shrink-0 grow-0 basis-1/2 bg-green-500">Done </div>
      </div>
    </main>
  );
}
