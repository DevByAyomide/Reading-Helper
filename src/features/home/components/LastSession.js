export default function LastSession({ when, pages, minutes }) {
  return (
    <section className="flex min-h-16 items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3">
      <div>
        <p className="text-xs leading-4 text-neutral-500">Last session</p>
        <p className="text-sm leading-5 font-medium text-neutral-900">{when}</p>
      </div>
      <p className="text-sm text-neutral-500">
        {pages} pages · {minutes} min
      </p>
    </section>
  );
}
