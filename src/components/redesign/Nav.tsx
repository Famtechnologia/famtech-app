'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const DEMO_MAIL = 'mailto:famtechnologia@gmail.com?subject=Famtech%20Demo%20Request';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Marketplace', href: 'https://marketplace.famtech.llc/' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Only the homepage has a dark hero behind the nav; every other page has a
  // light top, so the nav should always be in its solid state there.
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          solid
            ? 'bg-paper/85 backdrop-blur-xl border-b border-sand shadow-[0_10px_30px_-24px_rgba(10,16,13,0.6)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-x section flex h-[68px] items-center justify-between lg:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Famtech home">
            <span className="relative block h-10 w-[132px] lg:h-12 lg:w-[160px]">
              <Image
                src={solid ? '/images/home/famtech-logo-two-trim.png' : '/images/home/famtech-white-logo-trim.png'}
                alt="Famtech"
                fill
                priority
                sizes="160px"
                className="object-contain object-left"
              />
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? 'text-ink/70 hover:text-ink hover:bg-sand/60'
                    : 'text-chalk/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://app.famtech.llc"
              className={`text-sm font-semibold transition-colors ${
                solid ? 'text-ink/75 hover:text-ink' : 'text-chalk/85 hover:text-white'
              }`}
            >
              Sign in
            </a>
            <a
              href={DEMO_MAIL}
              className={`group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                solid
                  ? 'bg-ink text-paper'
                  : 'bg-lime text-ink shadow-lg shadow-lime/20'
              }`}
            >
              Request demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${
              solid ? 'text-ink hover:bg-sand/60' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`fixed inset-0 top-[68px] bg-paper transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="section container-x flex flex-col gap-1 py-6">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-sand py-4 text-2xl font-medium text-ink"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
                <ArrowUpRight className="h-5 w-5 text-muted" />
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://app.famtech.llc"
                className="rounded-full border border-sand-2 px-5 py-3.5 text-center text-base font-semibold text-ink"
              >
                Sign in
              </a>
              <a
                href={DEMO_MAIL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-base font-semibold text-paper"
              >
                Request demo <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
