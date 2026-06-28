import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/80 p-10 text-center shadow-xl shadow-black/10">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Message sent</p>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Thank you for reaching out!</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I have received your message and will get back to you as soon as possible. Meanwhile, feel free to explore the site or connect with me.
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent-blue)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-blue-dark)]"
        >
          <ArrowLeft className="size-4" />
          Back to contact
        </Link>
      </div>
    </div>
  )
}
