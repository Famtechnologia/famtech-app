'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ShoppingBasket, BadgeCheck, Truck, Star, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const MARKET_URL = 'https://marketplace.famtech.llc/';

const FEATURES = [
  { icon: ShoppingBasket, label: 'Buy & sell', sub: 'Inputs and produce' },
  { icon: BadgeCheck, label: 'Verified', sub: 'Trusted sellers' },
  { icon: Truck, label: 'Direct', sub: 'Farm to buyer' },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="bg-paper py-20 lg:py-28">
      <div className="container-x section">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink text-chalk">
            <div className="grid lg:grid-cols-2">
              {/* content */}
              <div className="relative z-10 order-2 p-8 sm:p-12 lg:order-1 lg:py-16">
                <span className="eyebrow text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Famora Marketplace
                </span>
                <h2 className="display-2 mt-5 font-display font-semibold text-white">
                  A marketplace for <span className="text-gradient">every harvest</span>.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-chalk-2">
                  Buy quality inputs and sell your produce in one trusted place, connected to the
                  farms and records that power Famtech.
                </p>

                <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
                  {FEATURES.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 text-center"
                    >
                      <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl bg-lime/12 text-lime">
                        <f.icon className="h-4 w-4" />
                      </span>
                      <div className="mt-2.5 text-[13px] font-semibold text-white">{f.label}</div>
                      <div className="text-[11px] leading-tight text-chalk-2">{f.sub}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={MARKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Visit the marketplace
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* image + floating listings */}
              <div className="relative order-1 min-h-[260px] sm:min-h-[340px] lg:order-2 lg:min-h-full">
                <Image
                  src="/images/blog/fresh-vegetables-market.jpg"
                  alt="Fresh produce at a Famora market stall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* blend into the dark content panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/25 lg:to-transparent" />

                {/* live listing cards */}
                <div className="pointer-events-none absolute left-4 top-4 hidden sm:block lg:left-auto lg:right-5 lg:top-6">
                  <ListingCard
                    name="Fresh Tomatoes"
                    price="₦12,000"
                    unit="/ basket"
                    rating="4.9"
                    place="Oyo State"
                  />
                </div>
                <div className="pointer-events-none absolute bottom-4 right-4 hidden sm:block lg:bottom-8 lg:left-6 lg:right-auto">
                  <ListingCard
                    name="Yellow Maize"
                    price="₦42,500"
                    unit="/ 100kg"
                    rating="4.8"
                    place="Kaduna State"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ListingCard({
  name,
  price,
  unit,
  rating,
  place,
}: {
  name: string;
  price: string;
  unit: string;
  rating: string;
  place: string;
}) {
  return (
    <div className="w-[190px] rounded-2xl border border-white/12 bg-ink/70 p-3 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">{name}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-lime/15 px-1.5 py-0.5 text-[10px] font-semibold text-lime">
          <BadgeCheck className="h-3 w-3" /> Verified
        </span>
      </div>
      <div className="mt-1.5 flex items-baseline gap-1">
        <span className="text-[17px] font-bold text-white">{price}</span>
        <span className="text-[11px] text-chalk-2">{unit}</span>
      </div>
      <div className="mt-1.5 flex items-center gap-3 text-[11px] text-chalk-2">
        <span className="inline-flex items-center gap-1 text-gold">
          <Star className="h-3 w-3 fill-gold" /> {rating}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {place}
        </span>
      </div>
    </div>
  );
}
