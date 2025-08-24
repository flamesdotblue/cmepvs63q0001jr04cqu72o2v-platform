type Props = {
  label: string
  value: string
  accent?: 'yellow' | 'pink' | 'blue' | 'lime' | 'orange'
}

const accentMap = {
  yellow: 'bg-nbYellow',
  pink: 'bg-nbPink',
  blue: 'bg-nbBlue',
  lime: 'bg-nbLime',
  orange: 'bg-nbOrange'
}

export default function StatCard({ label, value, accent = 'blue' }: Props) {
  return (
    <div className="nb-card p-5 flex items-center justify-between gap-4">
      <div className={`w-3 h-10 border-3 border-black ${accentMap[accent]} rounded-md`} />
      <div className="flex-1">
        <div className="text-sm uppercase tracking-wider opacity-70 font-bold">{label}</div>
        <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
      </div>
    </div>
  )
}
