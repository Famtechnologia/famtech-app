'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin, Facebook } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '/#platform' },
      { label: 'How it works', href: '/#how' },
      { label: 'Why Famtech', href: '/#why' },
      { label: 'Marketplace', href: 'https://marketplace.famtech.llc/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sign in', href: 'https://app.famtech.llc' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-16 text-chalk">
      <div className="container-x section">
        <div className="grid gap-12 border-b border-white/8 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand + CTA */}
          <div>
            <span className="relative block h-11 w-[150px]">
              <Image
                src="/images/home/famtech-white-logo-trim.png"
                alt="Famtech"
                fill
                sizes="150px"
                className="object-contain object-left"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-chalk-2">
              The operating system for African farms. Technology, agriculture and
              intelligence in one place.
            </p>
            <a
              href="mailto:famtechnologia@gmail.com?subject=Famtech%20Demo%20Request"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Request a demo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-chalk-2">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-chalk/80 transition-colors hover:text-lime"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
          <div className="text-sm text-chalk-2">
            <p>© {new Date().getFullYear()} Famtechnologia. All rights reserved.</p>
            <p className="mt-1">
              <a href="mailto:famtechnologia@gmail.com" className="hover:text-lime">
                famtechnologia@gmail.com
              </a>{' '}
              · <a href="tel:+2349131264493" className="hover:text-lime">0913 126 4493</a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {[
              { icon: Instagram, href: 'https://www.instagram.com/_famtech', label: 'Instagram' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/famtechnologia/', label: 'LinkedIn' },
              { icon: Facebook, href: 'https://www.facebook.com/share/1AnR1tyTV4/', label: 'Facebook' },
              { icon: XIcon, href: 'https://x.com/_Famtech', label: 'X' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-chalk-2 transition-colors hover:border-lime/30 hover:text-lime"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden className="select-none overflow-hidden">
        <div className="container-x section">
          <div className="pointer-events-none pb-6 text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-white/[0.03] lg:text-[13vw]">
            FAMTECH
          </div>
        </div>
      </div>
    </footer>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
