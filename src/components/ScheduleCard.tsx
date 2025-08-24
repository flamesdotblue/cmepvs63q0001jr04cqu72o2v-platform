type Game = {
  date: string
  opponent: string
  venue: string
  status?: 'Home' | 'Away'
}

export default function ScheduleCard({ game }: { game: Game }) {
  const isHome = game.status === 'Home'
  return (
    <div className={`nb-card p-4 flex items-center justify-between ${isHome ? 'bg-nbLime/20' : 'bg-nbPink/20'}`}> 
      <div className="flex items-center gap-3">
        <span className={`nb-chip ${isHome ? 'bg-nbLime' : 'bg-nbPink'}`}>{game.status}</span>
        <div>
          <div className="font-extrabold text-lg">vs {game.opponent}</div>
          <div className="text-sm opacity-70">{game.venue}</div>
        </div>
      </div>
      <div className="font-bold">{game.date}</div>
    </div>
  )
}
