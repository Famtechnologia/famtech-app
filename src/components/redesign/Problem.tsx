'use client';

import React from 'react';
import Image from 'next/image';
import { NotebookPen, EyeOff, HelpCircle, History } from 'lucide-react';
import Reveal from './Reveal';

const PROBLEMS = [
  {
    icon: NotebookPen,
    stat: '80%',
    statLabel: 'of records lost',
    title: 'Records live in notebooks and memory',
    body: 'Seasons of work vanish. Nothing is provable, nothing carries forward.',
  },
  {
    icon: EyeOff,
    stat: 'Days',
    statLabel: 'to spot problems',
    title: 'No clear view across the farm',
    body: 'Pests, dry soil and failing crops are noticed far too late.',
  },
  {
    icon: HelpCircle,
    stat: '~50%',
    statLabel: 'yield left behind',
    title: 'Decisions made on guesswork',
    body: 'Without insight, inputs are wasted and yields fall short of potential.',
  },
  {
    icon: History,
    stat: 'Every',
    statLabel: 'season restarts',
    title: 'Knowledge never compounds',
    body: 'With no history to learn from, good seasons are hard to repeat.',
  },
];

export default function Problem() {
  return (
    <section className="relative bg-paper py-20 lg:py-28">
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <span className="eyebrow text-terra">
              <span className="h-1.5 w-1.5 rounded-full bg-terra" />
              The reality on the ground
            </span>
            <h2 className="display-2 mt-5 font-display font-semibold text-ink">
              African farmers feed the continent,
              <span className="text-muted"> with almost no data on their side.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-muted lg:pb-2">
              The hard work has never been the problem. The problem is that everything a farm
              does, every planting, harvest and repair, disappears instead of becoming an asset.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="card-paper group h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-lime">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div className="text-right">
                    <div className="font-display text-2xl font-semibold leading-none text-terra">
                      {p.stat}
                    </div>
                    <div className="text-[11px] uppercase tracking-wide text-muted-2">
                      {p.statLabel}
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* image-backed statement band */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-[26px]">
            <Image
              src="/images/blog/strawberry-field.jpg"
              alt="Rows of healthy crops on an African farm"
              width={2000}
              height={900}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="h-[280px] w-full object-cover object-center lg:h-[340px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/30" />
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-8 lg:p-12">
              <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-white lg:text-3xl">
                Famtech turns that invisible work into a farm that{' '}
                <span className="text-gradient">runs on data</span>.
              </p>
              <a
                href="#platform"
                className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                See how it works
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
