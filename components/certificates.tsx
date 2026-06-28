'use client'

import { useRef } from 'react'
import { Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { certificates } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Certificates() {
  const scroller = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scroller.current?.scrollBy({
      left: dir === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <section id="certificates" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements" title="Certificates" />

        <div className="relative mt-10">
          <div
            ref={scroller}
            className="flex snap-x gap-5 overflow-x-auto pb-4 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {certificates.map((cert) => (
              <article
                key={cert.title}
                className="glass group flex min-h-[180px] flex-[0_0_280px] snap-start items-center gap-6 rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent-blue)] hover:shadow-xl hover:shadow-blue-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:flex-[0_0_340px] lg:flex-[0_0_calc((100%-2.5rem)/3)]"
              >
                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-base font-bold text-[color:var(--accent-blue)] transition duration-300 group-hover:scale-105 group-hover:bg-[color:var(--accent-blue)] group-hover:text-white">
                  {cert.short}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{cert.type}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent-purple)]">
                    <Award className="size-4" />
                    {cert.issuer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll('left')}
            className="absolute -left-3 top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-lg hover:text-[color:var(--accent-blue)] sm:flex"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll('right')}
            className="absolute -right-3 top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-lg hover:text-[color:var(--accent-blue)] sm:flex"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
