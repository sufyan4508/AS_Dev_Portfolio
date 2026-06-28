import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>©  2025 Abu Sufyan. All Rights Reserved.</p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--accent-blue)]"
        >
          Back to Top <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  )
}
