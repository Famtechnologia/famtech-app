'use client';

import React from 'react';
import { Sprout, LayoutGrid, Database, BrainCircuit, TrendingUp, RotateCw } from 'lucide-react';
import Reveal from './Reveal';

const STEPS = [
  { icon: Sprout, title: 'The farmer', body: 'Works the land and logs everyday activity on the farm.' },
  { icon: LayoutGrid, title: 'The platform', body: 'FamOS captures every action into one connected farm record.' },
  { icon: Database, title: 'Verified data', body: 'Activity becomes structured, trustworthy, time-stamped farm data.' },
  { icon: BrainCircuit, title: 'Intelligence', body: 'AI reads the data and returns clear, timely decisions.' },
  { icon: TrendingUp, title: 'Better yields', body: 'Smarter decisions mean less waste, healthier crops and stronger harvests.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="grain relative overflow-hidden bg-ink py-20 text-chalk lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-8 h-[360px] w-[520px] -translate-x-1/2 glow-lime opacity-30" />
      <div className="container-x section relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            How Famtech works
          </span>
          <h2 className="display-2 mt-5 font-display font-semibold text-white">
            One connected <span className="text-gradient">loop</span> of value
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-chalk-2">
            Every part reinforces the next. The more a farm does, the smarter it gets,
            and the better it performs season after season.
          </p>
        </Reveal>

        {/* Flow */}
        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <svg
            className="absolute left-0 top-[38px] hidden h-2 w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 8"
          >
            <line x1="40" y1="4" x2="960" y2="4" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <line
              x1="40"
              y1="4"
              x2="960"
              y2="4"
              stroke="url(#flowGrad)"
              strokeWidth="2"
              strokeDasharray="6 10"
              className="animate-dash"
            />
            <defs>
              <linearGradient id="flowGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#35D07F" />
                <stop offset="50%" stopColor="#E9A93B" />
                <stop offset="100%" stopColor="#E4682E" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative flex h-full flex-col items-center text-center lg:items-center">
                  <span className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-2xl border border-white/10 bg-ink-2 text-lime shadow-lg">
                    <s.icon className="h-7 w-7" />
                    <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-lime text-[11px] font-bold text-ink">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-chalk-2">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-chalk-2">
              <RotateCw className="h-4 w-4 text-lime" />
              A self-reinforcing loop where data compounds into intelligence, and intelligence into better farming.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
