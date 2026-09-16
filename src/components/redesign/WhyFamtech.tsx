'use client';

import React from 'react';
import { ShieldCheck, WifiOff, Sparkles, Globe2, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

export default function WhyFamtech() {
  return (
    <section id="why" className="relative bg-paper py-20 lg:py-28">
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <span className="eyebrow text-terra">
              <span className="h-1.5 w-1.5 rounded-full bg-terra" />
              Why Famtech
            </span>
            <h2 className="display-2 mt-5 font-display font-semibold text-ink">
              Serious technology,
              <br />
              built for <span className="text-gradient">how Africa farms</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-muted lg:pb-2">
              Not another dashboard bolted onto agriculture. A platform designed around the
              realities of African farms and the people who run them.
            </p>
          </Reveal>
        </div>

        {/* Bento */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/8 bg-ink p-8 text-chalk lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 glow-lime opacity-40" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-lime/15 text-lime">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white lg:text-3xl">
                  Verified data that belongs to the farmer
                </h3>
                <p className="mt-3 max-w-lg text-chalk-2">
                  Every season builds a trustworthy track record the farmer owns. That record
                  makes each decision sharper, turning honest work into lasting knowledge that
                  compounds year after year.
                </p>
              </div>
              <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/8 pt-6">
                <Metric value="100%" label="Farmer-owned records" />
                <Metric value="24/7" label="Farm visibility" />
                <Metric value="Less" label="Input waste" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <ValueCard
              icon={Sparkles}
              title="Insight you can act on"
              body="Clear next steps, not raw numbers. The platform tells you what to do next."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ValueCard
              icon={WifiOff}
              title="Built for low connectivity"
              body="Designed to keep working where the network is weak or comes and goes."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <ValueCard
              icon={Globe2}
              title="African context, first"
              body="Made for smallholders, cooperatives and local crops, not retrofitted."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <ValueCard
              icon={TrendingUp}
              title="Grows with the farm"
              body="From a single plot to a cooperative of thousands, on the same platform."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold leading-none text-lime lg:text-3xl">
        {value}
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-wide text-chalk-2">{label}</div>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="card-paper h-full rounded-[24px] p-7 transition-transform duration-300 hover:-translate-y-1">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-lime">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
