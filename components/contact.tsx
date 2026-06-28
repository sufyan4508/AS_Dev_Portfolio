'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from '@/components/brand-icons'

const findMe = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+92 3496283206',
    href: 'https://wa.me/923496283206',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sufyan4508-dev',
    href: 'https://github.com/sufyan4508/',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Abu Sufyan/abusufyan-dev',
    href: 'https://www.linkedin.com/in/sufyan08/',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: 'Abu Sufyan',
    href: 'https://www.facebook.com/areshzabi45/',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: 'sufyan_4508',
    href: 'https://www.instagram.com/sufyan_4508/',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-2 text-muted-foreground">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
                e.currentTarget.reset()
                setTimeout(() => setSent(false), 4000)
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-blue)]"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-blue)]"
                />
              </div>
              <input
                required
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-blue)]"
              />
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                aria-label="Your Message"
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-[color:var(--accent-blue)]"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg gradient-bg px-6 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
                >
                  {sent ? 'Message Sent!' : 'Send Message'}
                  <Send className="size-4" />
                </button>
                <a
                  href="https://wa.me/923496283206"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  <WhatsAppIcon className="size-5" />
                  Chat On WhatsApp
                </a>
              </div>
            </form>

            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <a
                href="mailto:sufisaab098@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--accent-blue)]"
              >
                <Mail className="size-4 text-[color:var(--accent-blue)]" />
                sufisaab098@gmail.com
              </a>
              <a
                href="tel:+923496283206"
                className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--accent-blue)]"
              >
                <Phone className="size-4 text-[color:var(--accent-blue)]" />
                +92 3496283206
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Faisalabad%2C%20Pakistan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[color:var(--accent-blue)]"
              >
                <MapPin className="size-4 text-[color:var(--accent-blue)]" />
                Faisalabad, Pakistan
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Find me on</h3>
            <ul className="mt-4 space-y-4">
              {findMe.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-3 text-sm transition-colors hover:text-[color:var(--accent-blue)]"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background/60">
                      <item.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block font-medium">{item.label}</span>
                      <span className="block text-xs text-muted-foreground">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
