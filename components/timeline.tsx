import { Briefcase, GraduationCap } from 'lucide-react'
import { timeline } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Timeline() {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="My Journey" title="Experience / Education" />

        <div className="relative mt-12">
          {/* center line */}
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-px gradient-bg md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.type === 'work' ? Briefcase : GraduationCap
              return (
                <li
                  key={i}
                  className={cn(
                    'relative pl-14 md:w-1/2 md:pl-0',
                    item.side === 'left'
                      ? 'md:pr-12 md:text-right'
                      : 'md:ml-auto md:pl-12',
                  )}
                >
                  {/* dot */}
                  <span
                    className={cn(
                      'absolute left-2.5 top-1 size-4 rounded-full border-2 border-background gradient-bg md:top-2',
                      item.side === 'left'
                        ? 'md:-right-2 md:left-auto'
                        : 'md:-left-2',
                    )}
                  />
                  <div className="glass group rounded-2xl p-5 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent-purple)] hover:shadow-xl hover:shadow-purple-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div
                      className={cn(
                        'flex items-center gap-2',
                        item.side === 'left' && 'md:flex-row-reverse',
                      )}
                    >
                      <Icon className="size-4 text-[color:var(--accent-blue)] transition duration-300 group-hover:scale-110 group-hover:text-[color:var(--accent-purple)]" />
                      <span className="text-xs font-medium text-[color:var(--accent-purple)]">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="mt-2 font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
