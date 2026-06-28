import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

const cvPath = '/Abu-Sufyan-CV.pdf'

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-4 text-sm font-semibold transition-colors hover:bg-accent"
          >
            <ArrowLeft className="size-4" />
            Back Home
          </Link>

          <a
            href={cvPath}
            download="Abu-Sufyan-CV.pdf"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg gradient-bg px-5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
          >
            Download CV
            <Download className="size-4" />
          </a>
        </div>

        <section className="glass overflow-hidden rounded-2xl">
          <iframe
            title="Abu Sufyan CV"
            src={cvPath}
            className="h-[calc(100vh-120px)] w-full border-0"
          />
        </section>
      </div>
    </main>
  )
}
