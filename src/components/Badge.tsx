type Props = {
  children: React.ReactNode
  color?: 'yellow' | 'pink' | 'blue' | 'lime' | 'orange' | 'purple' | 'teal' | 'red' | 'mint' | 'cyan' | 'violet'
}

const colorMap: Record<NonNullable<Props['color']>, string> = {
  yellow: 'bg-nbYellow',
  pink: 'bg-nbPink',
  blue: 'bg-nbBlue',
  lime: 'bg-nbLime',
  orange: 'bg-nbOrange',
  purple: 'bg-nbPurple',
  teal: 'bg-nbTeal',
  red: 'bg-nbRed',
  mint: 'bg-nbMint',
  cyan: 'bg-nbCyan',
  violet: 'bg-nbViolet'
}

export default function Badge({ children, color = 'blue' }: Props) {
  return (
    <span className={`nb-chip ${colorMap[color]}`}>{children}</span>
  )
}
