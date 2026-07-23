import { skillGroups } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What I Know" title="My Skills" />

        <div className="glass mt-10 grid gap-8 rounded-3xl p-6 sm:p-10 md:grid-cols-3">

          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 font-semibold text-[color:var(--accent-blue)]">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-accent">
                      <div
                        className="h-full rounded-full gradient-bg"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
