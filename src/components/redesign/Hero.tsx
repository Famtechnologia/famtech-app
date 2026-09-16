'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Cpu, Sprout, BrainCircuit } from 'lucide-react';

const DEMO_MAIL =
  'mailto:famtechnologia@gmail.com?subject=Famtech%20Demo%20Request';

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (y = 20) => (reduce ? false : { opacity: 0, y });

  return (
    <section className="relative flex min-h-[94vh] items-center overflow-hidden bg-ink text-chalk">
      {/* background video */}
      <video
        src="/videos/smart_farm.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink" />
      <div className="absolute inset-0 bg-ink/25" />

      {/* content — centered */}
      <div className="container-x section relative w-full py-28 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            initial={fade(20)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="display-1 font-display font-semibold text-balance text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]"
          >
            The operating system
            <br className="hidden sm:block" />{' '}
            for African <span className="text-gradient">farms</span>.
          </motion.h1>

          <motion.p
            initial={fade(20)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-chalk drop-shadow"
          >
            A modern platform that helps farmers manage their farms, keep records and monitor
            activity. Everyday work becomes verified data and intelligent insight, so farmers
            grow more with less.
          </motion.p>

          <motion.div
            initial={fade(16)}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={DEMO_MAIL}
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Request a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
            >
              See the platform
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-chalk-2"
          >
            <Chip icon={Cpu} label="Technology" />
            <Plus />
            <Chip icon={Sprout} label="Agriculture" />
            <Plus />
            <Chip icon={BrainCircuit} label="Intelligence" />
          </motion.div>
        </div>
      </div>

      {/* trust row pinned near the bottom */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-x section pb-7">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/12 pt-6 text-center">
            <span className="text-[11px] uppercase tracking-widest text-chalk-2">
              Built for the whole value chain
            </span>
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-1 text-sm text-chalk/75">
              {['Smallholder farms', 'Cooperatives', 'Agronomists', 'Off-takers', 'Agribusinesses'].map(
                (t) => (
                  <span key={t} className="whitespace-nowrap">
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-white backdrop-blur-sm">
      <Icon className="h-3.5 w-3.5 text-lime" />
      {label}
    </span>
  );
}

function Plus() {
  return <span className="text-chalk-2/60">+</span>;
}
