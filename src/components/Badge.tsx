export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="nb-chip bg-nbBlue">{children}</span>
  )
}
