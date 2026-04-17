export default function Loading() {
  return (
    <main className="px-4 pb-16 pt-32 md:px-6">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-8 w-40 rounded-full bg-black/8" />
        <div className="mt-8 h-24 max-w-3xl rounded-[2rem] bg-black/8" />
        <div className="mt-5 h-28 max-w-4xl rounded-[2rem] bg-black/7" />
        <div className="mt-10 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <div className="h-[28rem] rounded-[2rem] bg-black/7" />
          <div className="grid gap-5">
            <div className="h-40 rounded-[2rem] bg-black/7" />
            <div className="h-40 rounded-[2rem] bg-black/7" />
            <div className="h-40 rounded-[2rem] bg-black/7" />
          </div>
        </div>
      </div>
    </main>
  );
}
