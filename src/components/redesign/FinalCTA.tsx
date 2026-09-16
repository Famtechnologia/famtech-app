'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sprout, Handshake, LineChart } from 'lucide-react';
import Reveal from './Reveal';

const PATHS = [
  {
    icon: Sprout,
    tag: 'For farmers',
    title: 'Run a smarter farm',
    body: 'Manage records, monitor your fields and act on clear insight from day one.',
    cta: 'Request a demo',
    href: 'mailto:famtechnologia@gmail.com?subject=Famtech%20Demo%20Request',
    featured: true,
  },
  {
    icon: Handshake,
    tag: 'For partners',
    title: 'Reach farmers with confidence',
    body: 'Cooperatives, agronomists and off-takers built on verified farm data.',
    cta: 'Partner with us',
    href: 'mailto:famtechnologia@gmail.com?subject=Partnership',
  },
  {
    icon: LineChart,
    tag: 'For investors',
    title: 'Back African agriculture',
    body: 'Invest in the platform powering the continent’s next harvest.',
    cta: 'Talk to us',
    href: 'mailto:famtechnologia@gmail.com?subject=Investment',
  },
];

export default function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-20 text-chalk lg:py-28">
      {/* tractor backdrop */}
      <Image
        src="/images/home/agriculture-healthy-food.jpg"
        alt="A tractor working a field at sunrise"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] glow-terra opacity-40" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] glow-lime opacity-40" />

      <div className="container-x section relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display-1 font-display font-semibold text-white">
            Let&rsquo;s grow the future of
            <br />
            <span className="text-gradient">African agriculture</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-chalk-2">
            Whether you farm, partner or invest, there&rsquo;s a place for you in what Famtech
            is building. Start the conversation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PATHS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <a
                href={p.href}
                className={`group flex h-full flex-col rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  p.featured
                    ? 'border-lime/40 bg-gradient-to-b from-lime/[0.12] to-transparent'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    p.featured ? 'bg-lime text-ink' : 'bg-white/[0.06] text-lime'
                  }`}
                >
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-chalk-2">
                  {p.tag}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-chalk-2">{p.body}</p>
                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                    p.featured ? 'text-lime' : 'text-white'
                  }`}
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
