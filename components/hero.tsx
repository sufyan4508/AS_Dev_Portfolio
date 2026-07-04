'use client'

import Image from 'next/image'
import { Download, Send, Code2, Sparkles } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/brand-icons'

const socials = [
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/923496283206' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/sufyan4508/' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sufyan08/' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/areshzabi45/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/sufyan_4508/' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 lg:px-8"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-[480px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--accent-purple), transparent 60%)',
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-[color:var(--accent-blue)]" />
            Hello, It&apos;s Me
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <br />
            <span className="gradient-text">Abu Sufyan</span>
          </h1>

          <p className="mt-5 text-lg font-semibold sm:text-xl">
            IT-Graduate | Full Stack Developer | Graphic Designer
            <br />
            Flutter Learner | AI Enthusiast
          </p>

          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            I build responsive websites, design creative visuals and explore AI
            to craft smart digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Hire Me <Send className="size-4" />
            </a>
            <a
              href="/cv"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              View CV <Download className="size-4" />
            </a>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-muted-foreground">
              Connect with me
            </p>
            <div className="mt-3 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-[color:var(--accent-blue)] hover:text-[color:var(--accent-blue)]"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* profile */}
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-6 rounded-full opacity-60 blur-2xl"
            style={{
              background:
                'radial-gradient(circle, var(--accent-blue), transparent 65%)',
            }}
          />
          <div className="relative size-[78%] overflow-hidden rounded-full border border-white/10 bg-card">
            <Image
              src="/profile.png"
              alt="Portrait of Abu Sufyan"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 400px"
              className="object-cover"
            />
          </div>

          {/* orbiting tech badges */}
          <TechBadge className="left-0 top-1/3 animate-float" label="React">
            <Code2 className="size-6 text-[color:var(--accent-blue)]" />
          </TechBadge>
          <TechBadge
            className="right-2 top-10 animate-float [animation-delay:1s]"
            label="Node"
          >
            <span className="text-xs font-bold text-[color:var(--accent-blue)]">
              node
            </span>
          </TechBadge>
          <TechBadge
            className="bottom-10 right-0 animate-float [animation-delay:2s]"
            label="JavaScript"
          >
            <span className="text-xs font-bold text-[color:var(--accent-purple)]">
              JS
            </span>
          </TechBadge>
          <TechBadge
            className="bottom-6 left-10 animate-float [animation-delay:1.5s]"
            label="Flutter"
          >
            <span className="text-xs font-bold text-[color:var(--accent-blue)]">
              Flutter
            </span>
          </TechBadge>
        </div>
      </div>
    </section>
  )
}

function TechBadge({
  children,
  className,
  label,
}: {
  children: React.ReactNode
  className?: string
  label: string
}) {
  return (
    <div
      aria-label={label}
      className={`absolute flex size-14 items-center justify-center rounded-full border border-white/10 bg-card/90 shadow-lg backdrop-blur ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
