export function Eyebrow({ children, centered = false }: { children: string; centered?: boolean }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  )
}
