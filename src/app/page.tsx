import Image from 'next/image'
import StatCard from '@/components/StatCard'
import ScheduleCard from '@/components/ScheduleCard'
import Badge from '@/components/Badge'

export default function Page() {
  const stats = [
    { label: 'Batting Average', value: '.356', accent: 'yellow' as const },
    { label: 'Home Runs', value: '42', accent: 'pink' as const },
    { label: 'RBIs', value: '108', accent: 'purple' as const },
    { label: 'OPS', value: '1.012', accent: 'teal' as const },
    { label: 'Stolen Bases', value: '31', accent: 'cyan' as const },
    { label: 'Slugging', value: '.592', accent: 'violet' as const },
    { label: 'OBP', value: '.420', accent: 'mint' as const },
    { label: 'War', value: '7.1', accent: 'orange' as const }
  ]

  const schedule = [
    { date: 'Sep 02', opponent: 'River City Dogs', venue: 'Whisker Dome', status: 'Home' as const },
    { date: 'Sep 10', opponent: 'Steel City Owls', venue: 'Night Park', status: 'Away' as const },
    { date: 'Sep 18', opponent: 'Sunset Foxes', venue: 'Whisker Dome', status: 'Home' as const }
  ]

  return (
    <main>
      {/* Hero */}
      <section className="container-nb pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="nb-card p-6 md:p-8 bg-nbYellow">
            <div className="flex items-center gap-3 mb-4">
              <Badge color="violet">MVP 2025</Badge>
              <Badge color="teal">All‑Star</Badge>
              <Badge color="red">Lefty Slugger</Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight">
              Kitty ‘Slugger’ Paws
            </h1>
            <p className="mt-4 text-lg max-w-prose">
              Power hitter, base‑stealer, and highlight‑reel magnet. Playing with claws‑out energy and
              neo‑brutal flair.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#highlights" className="nb-btn bg-nbPink">Watch highlights</a>
              <a href="#schedule" className="nb-btn bg-nbBlue">Next games</a>
            </div>
          </div>
          <div className="nb-card overflow-hidden relative min-h-[320px] bg-white">
            <Image
              src="https://picsum.photos/seed/kitty-hero/1600/1200"
              alt="Kitty swinging a bat in neo‑brutal collage style"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Strip */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="nb-card p-4 bg-nbLime">
            <div className="text-xs uppercase opacity-80 font-bold">Position</div>
            <div className="text-2xl font-extrabold">CF / LF</div>
          </div>
          <div className="nb-card p-4 bg-nbBlue">
            <div className="text-xs uppercase opacity-80 font-bold">Bats / Throws</div>
            <div className="text-2xl font-extrabold">L / L</div>
          </div>
          <div className="nb-card p-4 bg-nbPurple">
            <div className="text-xs uppercase opacity-80 font-bold">Speed</div>
            <div className="text-2xl font-extrabold">9.6/10</div>
          </div>
          <div className="nb-card p-4 bg-nbTeal">
            <div className="text-xs uppercase opacity-80 font-bold">Arm</div>
            <div className="text-2xl font-extrabold">Elite</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-nb py-10 md:py-14">
        <h2 className="section-title mb-6">Season stats</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} accent={s.accent} />
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="container-nb py-10 md:py-14">
        <h2 className="section-title mb-6">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="nb-card overflow-hidden relative h-64 bg-nbMint">
            <Image
              src="https://picsum.photos/seed/glove-clip/1200/800"
              alt="Baseball glove and ball close‑up"
              fill
              className="object-cover"
            />
          </div>
          <div className="nb-card overflow-hidden relative h-64 bg-nbCyan">
            <Image
              src="https://picsum.photos/seed/lights-dusk/1200/800"
              alt="Stadium lights at dusk"
              fill
              className="object-cover"
            />
          </div>
          <div className="nb-card overflow-hidden relative h-64 bg-nbViolet">
            <Image
              src="https://picsum.photos/seed/infield-dirt/1200/800"
              alt="Base path and infield dirt"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-6 nb-card p-4 bg-white">
          <div className="aspect-video w-full overflow-hidden rounded-lg border-3 border-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/l5Yy7h4KQMM?rel=0"
              title="Kitty highlight reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="container-nb py-10 md:py-16">
        <h2 className="section-title mb-6">Upcoming games</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {schedule.map((g) => (
            <ScheduleCard key={g.date + g.opponent} game={g} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container-nb pb-14">
        <div className="nb-card p-5 flex flex-col md:flex-row items-center justify-between gap-4 bg-nbRed">
          <div className="text-center md:text-left">
            <div className="text-2xl font-extrabold">Book Kitty for an appearance</div>
            <div className="opacity-80">Media, signings, or charity games — let’s make it legendary.</div>
          </div>
          <a href="mailto:kitty@pawsball.com" className="nb-btn bg-white">kitty@pawsball.com</a>
        </div>
        <div className="mt-6 text-sm opacity-70 text-center">
          © {new Date().getFullYear()} Kitty “Slugger” Paws — Crafted in neo‑brutal style.
        </div>
      </footer>
    </main>
  )
}
