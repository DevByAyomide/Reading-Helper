import Image from 'next/image';
import LastSession from '@/features/home/components/LastSession';
import { lastSession } from '@/features/reading';
import { FlameIcon } from 'lucide-react';

function BookCover() {
  return (
    <div className="@container/cover flex w-[20dvh] max-w-50 shrink-0 justify-center [@media(min-height:701px)_and_(max-height:850px)]:w-[18.667dvh] [@media(max-height:700px)]:w-[17.333dvh]">
      <Image
        src="/images/Oliver-Twist.jpg"
        alt="Book cover"
        width={200}
        height={300}
        priority
        className="aspect-2/3 h-[clamp(200px,30dvh,300px)] w-[20dvh] max-w-50 rounded-[16px] object-cover shadow-[0_22px_44px_-18px_rgba(31,41,55,0.40)] ring-1 ring-black/6 [@media(min-height:701px)_and_(max-height:850px)]:h-[28dvh] [@media(min-height:701px)_and_(max-height:850px)]:min-h-50 [@media(min-height:701px)_and_(max-height:850px)]:w-[18.667dvh] [@media(min-height:701px)_and_(max-height:850px)]:min-w-33 [@media(max-height:700px)]:h-[26dvh] [@media(max-height:700px)]:w-[17.333dvh]"
      />
    </div>
  );
}

function ProgressArc() {
  return (
    <svg
      viewBox="0 0 216 164"
      role="img"
      aria-label="Reading progress: page 23 of your 278-page goal"
      className="h-auto w-[clamp(216px,62vw,300px)] shrink-0 overflow-visible"
    >
      <title>Reading progress: page 23 of your 278-page goal</title>
      <path
        d="M 24.86 156 A 96 96 0 1 1 191.14 156"
        pathLength="100"
        className="fill-none stroke-neutral-200"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M 24.86 156 A 96 96 0 1 1 191.14 156"
        pathLength="100"
        strokeDasharray="23 77"
        className="fill-none stroke-neutral-950"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <text x="108" y="78" textAnchor="middle" className="fill-neutral-400" fontSize="12" fontWeight="500">
        Page
      </text>
      <text x="108" y="116" textAnchor="middle" className="fill-neutral-950 font-serif" fontSize="42" fontWeight="700">
        23
      </text>
      <text x="108" y="137" textAnchor="middle" className="fill-neutral-500" fontSize="10">
        of your 278-page goal
      </text>
    </svg>
  );
}

function QuickStart() {
  return (
    <section className="flex flex-col gap-1.5" aria-label="Quick start">
      <h2 className="text-sm font-medium text-neutral-500">Or start small</h2>
      <div className="flex gap-2">
        {['5 min', '2 pages', '15 min'].map((option) => (
          <button
            key={option}
            type="button"
            className="min-h-11 flex-1 rounded-full border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-700"
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative -mt-6 mx-auto flex min-h-dvh w-full max-w-md flex-col pt-6 pb-26 [@media(max-height:850px)]:pt-3">
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-[30px] leading-tight font-semibold tracking-[-0.035em]">Your Read</h1>
          <p className="text-sm leading-6 text-neutral-500">Pick up where you left off!</p>
        </div>
        <div className="mt-0.5 flex h-9 items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50 px-3 text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <FlameIcon size={16} strokeWidth={2.25} color="#E25822" aria-hidden="true" />
          <span className="text-sm font-bold tabular-nums text-[#E25822]">1</span>
        </div>
      </header>

      <section
        className="relative isolate flex min-h-0 flex-1 flex-col items-center justify-center gap-2 [@media(min-height:701px)_and_(max-height:850px)]:pt-4 [@media(max-height:700px)]:-mx-4 [@media(max-height:700px)]:w-[calc(100%+2rem)] [@media(max-height:700px)]:flex-row"
        aria-label="Current book and reading progress"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[min(90vw,540px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.08),_transparent_70%)]"
        />
        <section aria-label="Current book">
          <BookCover />
        </section>
        <section aria-label="Reading progress">
          <ProgressArc />
        </section>
      </section>

      <section className="flex flex-col gap-5">
        <LastSession {...lastSession} />
        <button
          type="button"
          className="min-h-11 w-full rounded-full bg-neutral-950 px-7 text-[15px] font-semibold text-white shadow-[0_12px_24px_-10px_rgba(0,0,0,0.45)] transition-transform active:scale-[0.98]"
        >
          Continue Reading
        </button>
        <QuickStart />
      </section>
    </main>
  );
}
