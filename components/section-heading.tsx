export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-[color:var(--accent-blue)]">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-3xl font-bold text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
