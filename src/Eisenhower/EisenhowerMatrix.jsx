function EisenhowerMatrix() {
  return (
    <main className="">
      <div className="h-[800px] bg-white">
        <div className="h-[700px] rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-5">
          <div className="grid h-full grid-cols-[50px_1fr_1fr] grid-rows-[50px_1fr_1fr] items-center justify-center gap-5">
            <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex h-full flex-col items-center justify-center rounded-2xl bg-white text-violet-600 italic xl:text-3xl">
              Urgent
            </div>
            <div className="col-start-3 col-end-4 row-start-1 row-end-2 flex h-full items-center justify-center rounded-2xl bg-white text-violet-600 italic xl:text-3xl">
              Not Urgent
            </div>

            <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex h-full items-center justify-center rounded-2xl bg-white text-violet-600 italic xl:text-3xl">
              <span className="rotate-270 text-nowrap">Important</span>
            </div>
            <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex h-full items-center justify-center rounded-2xl bg-white text-violet-600 italic xl:text-3xl">
              <span className="rotate-270 text-nowrap">Not Important</span>
            </div>

            {/* top-left  */}
            <div className="col-start-2 row-start-2 h-full rounded-2xl bg-white"></div>

            {/* top-right */}
            <div className="col-start-3 row-start-2 h-full rounded-2xl bg-white"></div>

            {/* bot-left */}
            <div className="col-start-2 row-start-3 h-full rounded-2xl bg-white"></div>

            {/* bot-right */}
            <div className="col-start-3 row-start-3 h-full rounded-2xl bg-white"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default EisenhowerMatrix;
