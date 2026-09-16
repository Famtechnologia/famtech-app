'use client';

import React from 'react';
import {
  FolderClock, Radar, Sparkles, LineChart, MapPin, Droplets, Bug, CheckCircle2,
  LayoutDashboard, Tractor, Wallet, ShoppingBasket, FileBarChart2, Bell, Clock,
} from 'lucide-react';
import Reveal from './Reveal';

const PILLARS = [
  {
    icon: FolderClock,
    title: 'Farm records',
    body: 'Every planting, input, harvest and cost captured in one living, permanent history.',
  },
  {
    icon: Radar,
    title: 'Real-time monitoring',
    body: 'Track crop health, weather, tasks and field activity as the season unfolds.',
  },
  {
    icon: Sparkles,
    title: 'Intelligent insights',
    body: 'AI turns your data into clear next steps on when to plant, treat and harvest.',
  },
  {
    icon: LineChart,
    title: 'Markets & planning',
    body: 'Live market prices and planning tools help farmers decide what to grow and sell.',
  },
];

export default function Platform() {
  return (
    <section id="platform" className="grain relative overflow-hidden bg-ink py-20 text-chalk lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] glow-lime opacity-40" />
      <div className="container-x section relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Farm Management Platform
            </span>
            <h2 className="display-2 mt-5 font-display font-semibold text-white">
              One platform for the <span className="text-gradient">whole farm</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-chalk-2">
              FamOS gives every farmer a command centre. Records, monitoring and
              intelligence live in one place, so decisions are backed by real data.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* real platform screenshot */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-x-6 -bottom-6 top-10 rounded-[28px] bg-gradient-to-b from-lime/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[16px] border border-white/12 bg-ink-2 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-terra/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lime/80" />
                  <div className="ml-3 flex items-center gap-2 rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] text-chalk-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" /> app.famtech.llc
                  </div>
                </div>
                {/* coded FamOS dashboard — crisp, on-brand, no baked-in artifacts */}
                <div className="flex bg-[#F6F7F6] text-ink">
                  {/* sidebar */}
                  <aside className="hidden w-[128px] shrink-0 flex-col gap-0.5 border-r border-black/5 bg-white px-2.5 py-3 sm:flex">
                    <div className="mb-2 px-1.5 text-[11px] font-bold tracking-tight text-ink">
                      FAM<span className="text-brand">TECH</span>
                    </div>
                    {[
                      { icon: LayoutDashboard, label: 'Dashboard', active: true },
                      { icon: Tractor, label: 'Farm Ops' },
                      { icon: Sparkles, label: 'AI Insights' },
                      { icon: Wallet, label: 'Financials' },
                      { icon: ShoppingBasket, label: 'Marketplace' },
                      { icon: FileBarChart2, label: 'Reports' },
                    ].map((n) => (
                      <div
                        key={n.label}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium ${
                          n.active ? 'bg-brand/10 text-brand' : 'text-ink/55'
                        }`}
                      >
                        <n.icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{n.label}</span>
                      </div>
                    ))}
                  </aside>

                  {/* main */}
                  <div className="min-w-0 flex-1 p-3.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[13px] font-semibold text-ink">Dashboard</div>
                        <div className="text-[10px] text-ink/45">
                          Welcome back, John — here&apos;s your farm today.
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-black/5">
                          <Bell className="h-3 w-3 text-ink/50" />
                        </span>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/15 text-[9px] font-semibold text-brand">
                          JF
                        </span>
                      </div>
                    </div>

                    {/* task overview */}
                    <div className="mt-3 rounded-xl border border-black/5 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-ink">Task Overview</span>
                        <span className="text-[10px] font-medium text-brand">View all</span>
                      </div>
                      <div className="mt-2.5 grid grid-cols-3 gap-2">
                        {[
                          { n: '3', l: 'Completed', c: 'text-brand', bg: 'bg-brand/10' },
                          { n: '8', l: 'In Progress', c: 'text-gold', bg: 'bg-gold/12' },
                          { n: '2', l: 'Overdue', c: 'text-terra', bg: 'bg-terra/12' },
                        ].map((s) => (
                          <div key={s.l} className={`rounded-lg ${s.bg} py-2 text-center`}>
                            <div className={`text-[15px] font-bold ${s.c}`}>{s.n}</div>
                            <div className="text-[9px] text-ink/50">{s.l}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2.5 space-y-1.5">
                        {[
                          { icon: CheckCircle2, c: 'text-brand', t: 'Irrigation system maintenance', s: 'Completed today', p: 'Medium', pc: 'bg-gold/12 text-gold' },
                          { icon: Clock, c: 'text-ink/40', t: 'Harvest winter wheat — North field', s: 'Due tomorrow', p: 'High', pc: 'bg-terra/12 text-terra' },
                          { icon: Clock, c: 'text-ink/40', t: 'Order livestock feed supplies', s: 'Due in 2 days', p: 'Medium', pc: 'bg-gold/12 text-gold' },
                        ].map((r) => (
                          <div key={r.t} className="flex items-center gap-2 rounded-lg border border-black/5 px-2.5 py-1.5">
                            <r.icon className={`h-3.5 w-3.5 shrink-0 ${r.c}`} />
                            <div className="min-w-0 flex-1">
                              <div className="truncate text-[10.5px] font-medium text-ink">{r.t}</div>
                              <div className="text-[9px] text-ink/40">{r.s}</div>
                            </div>
                            <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8.5px] font-semibold ${r.pc}`}>
                              {r.p}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* crop health strip */}
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-black/5 bg-white p-2.5">
                        <div className="text-[10px] font-semibold text-ink">Crop Health</div>
                        {[
                          { n: 'Winter Wheat', v: 85, c: 'bg-brand' },
                          { n: 'Corn', v: 68, c: 'bg-gold' },
                        ].map((c) => (
                          <div key={c.n} className="mt-1.5">
                            <div className="flex items-center justify-between text-[9px] text-ink/55">
                              <span>{c.n}</span>
                              <span className="font-semibold text-ink">{c.v}%</span>
                            </div>
                            <div className="mt-0.5 h-1 rounded-full bg-black/8">
                              <div className={`h-full rounded-full ${c.c}`} style={{ width: `${c.v}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl border border-black/5 bg-white p-2.5">
                          <Droplets className="h-3.5 w-3.5 text-brand" />
                          <div className="mt-1 text-[13px] font-bold text-ink">62%</div>
                          <div className="text-[8.5px] text-ink/45">Soil moisture</div>
                        </div>
                        <div className="rounded-xl border border-black/5 bg-white p-2.5">
                          <Radar className="h-3.5 w-3.5 text-gold" />
                          <div className="mt-1 text-[13px] font-bold text-ink">18°C</div>
                          <div className="text-[8.5px] text-ink/45">Soil temp</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* pillars */}
          <div className="grid gap-3 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-5 transition-colors hover:border-lime/25 hover:bg-white/[0.04]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/12 text-lime">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-chalk-2">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* capability strip */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-5">
            <span className="text-xs uppercase tracking-widest text-chalk-2">
              Everything in one place
            </span>
            {[
              { icon: MapPin, label: 'Field mapping' },
              { icon: Droplets, label: 'Crop health' },
              { icon: Bug, label: 'Pest & disease alerts' },
              { icon: CheckCircle2, label: 'Task planning' },
            ].map((f) => (
              <span key={f.label} className="inline-flex items-center gap-2 text-sm text-chalk">
                <f.icon className="h-4 w-4 text-lime" />
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
