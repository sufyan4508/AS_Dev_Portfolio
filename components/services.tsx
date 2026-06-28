import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What I Do" title="Services" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--accent-blue)]"
            >
              <span
                className="flex size-12 items-center justify-center rounded-xl"
                style={{ background: `color-mix(in oklab, ${service.color} 18%, transparent)` }}
              >
                <service.icon
                  className="size-6"
                  style={{ color: service.color }}
                />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ArrowRight className="mt-5 size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--accent-blue)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
