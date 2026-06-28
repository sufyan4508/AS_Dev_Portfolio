'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { projects, type Project } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web Development', value: 'web' },
  { label: 'Graphic Design', value: 'graphics' },
  { label: 'Flutter Apps', value: 'flutter' },
] as const

export function Portfolio() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="My Work" title="Portfolio" />

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                filter === f.value
                  ? 'gradient-bg text-white'
                  : 'border border-border bg-card/60 text-muted-foreground hover:text-foreground',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition-colors hover:border-[color:var(--accent-blue)] hover:text-[color:var(--accent-blue)]"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass group overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-[color:var(--accent-blue)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full gradient-bg px-2.5 py-1 text-xs font-medium text-white">
          {project.categoryLabel}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.features && (
            <ul className="mb-2 w-full space-y-1 text-xs text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-1.5">
                  <span className="mt-1.5 size-1 rounded-full bg-[color:var(--accent-blue)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-accent px-2 py-0.5 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm">
          {project.demo && (
            <a
              href={project.demo}
              target={project.demo.startsWith('http') ? '_blank' : undefined}
              rel={project.demo.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-[color:var(--accent-blue)]"
            >
              Live Demo <ExternalLink className="size-3.5" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              aria-label={`${project.title} GitHub`}
              className="ml-auto inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
