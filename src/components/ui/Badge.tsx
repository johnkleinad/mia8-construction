interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 border border-gold text-gold-deco font-josefin font-semibold text-xs tracking-[0.2em] uppercase ${className}`}
    >
      {children}
    </span>
  )
}
