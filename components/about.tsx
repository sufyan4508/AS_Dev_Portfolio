import { GraduationCap, Target, User } from 'lucide-react'

export function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="glass group grid min-h-[360px] gap-10 rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-[color:var(--accent-blue)] hover:shadow-2xl hover:shadow-blue-500/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-12 lg:grid-cols-2 lg:p-14">
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
              <User className="size-6 text-[color:var(--accent-blue)] transition duration-300 group-hover:scale-110 group-hover:text-[color:var(--accent-purple)]" />
              About Me
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a passionate Full Stack Developer and Graphic Designer who
              loves turning ideas into real-world digital products. I enjoy
              writing clean code, designing user-friendly interfaces, and
              constantly learning new technologies.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5">
              <GraduationCap className="size-7 shrink-0 text-[color:var(--accent-purple)] transition duration-300 group-hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--accent-blue)]">
                  Education
                </h3>
                <p className="mt-1 text-base text-muted-foreground">
                  BS in Information Technology
                  <br />
                  National University Of Modern Languages(NUML).
                  <br />
                  2022 – 2026
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Target className="size-7 shrink-0 text-[color:var(--accent-purple)] transition duration-300 group-hover:scale-110" />
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--accent-blue)]">
                  Career Goals
                </h3>
                <p className="mt-1 text-base text-muted-foreground">
                  To become a successful Full Stack Developer, build impactful
                  products and contribute to open-source &amp; AI driven
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
