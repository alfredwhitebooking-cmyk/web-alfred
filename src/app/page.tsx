'use client'

import { useState, useEffect, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from 'framer-motion'
import {
  Play,
  MapPin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  Disc3,
  Mic2,
  Sparkles,
  Send,
  Camera,
  Video,
  Quote,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

/* Spotify brand icon (lucide-react no lo incluye) */
function Spotify({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

/* ============================================================
   DATOS DEL ARTISTA — Alfred White
   Fuente: web search (Shazam, Songstats, Fiverr, Spotify/DJ Asto)
   ============================================================ */
const ARTIST = {
  name: 'ALFRED WHITE',
  tagline: 'Cantante · Productor · Cantautor',
  genre: 'Reggaeton · Trap · Urbano Latino',
  location: 'Montañas de Colombia · Latinoamérica',
  bioShort:
    'Desde las montañas de Colombia, hace reggaeton, trap y de todo lo que caiga. La música no tiene límites.',
  bioLong:
    'Con más de 14 años de trayectoria, Alfred White es una voz emergente del urbano latino colombiano. Cantante, compositor y productor, su filosofía es clara: la música no tiene límites. Desde sus inicios en las montañas de Colombia ha explorado el reggaeton, el trap y cualquier ritmo que cruce su camino, construyendo un catálogo versátil y una comunidad fiel de oyentes.',
  email: 'booking@alfredwhite.music',
  phone: '+57 300 000 0000',
  social: {
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
    spotify: 'https://open.spotify.com/',
    shazam: 'https://www.shazam.com/',
    songstats: 'https://songstats.com/',
    fiverr: 'https://www.fiverr.com/',
  },
}

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'historia', label: 'Historia' },
  { id: 'fotos', label: 'Fotos' },
  { id: 'videos', label: 'Videos' },
  { id: 'musica', label: 'Música' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'shows', label: 'Shows' },
  { id: 'contacto', label: 'Contacto' },
]

const TIMELINE = [
  {
    year: '2010',
    title: 'Primeros pasos',
    text: 'Alfred White comienza su camino en la música desde las montañas de Colombia. Aprende a producir sus primeras pistas y experimenta con reggaeton y trap, los géneros que marcarán su identidad sonora.',
  },
  {
    year: '2015',
    title: 'Consolidación como productor',
    text: 'Tras cinco años de trabajo constante, se consolida como productor musical. Empieza a colaborar con artistas locales y a pulir su sonido personal dentro de la escena urbana latina.',
  },
  {
    year: '2020',
    title: 'Salto a plataformas',
    text: 'Su música llega a Shazam, Songstats y Spotify. Aparece en playlists asociadas a colectivos como DJ Asto, alcanzando cientos de oyentes mensuales y abriéndose paso en el mercado digital.',
  },
  {
    year: '2023',
    title: 'Productor en Fiverr',
    text: 'Se certificationa como Level 1 Seller en Fiverr, ofreciendo servicios de producción de reggaeton, trap, dembow y afrobeat a clientes de todo el mundo desde $95 USD por encargo.',
  },
  {
    year: '2024',
    title: '+14 años de carrera',
    text: 'Cumple más de 14 años haciendo música. Su filosofía "la música no tiene límites" lo lleva a explorar nuevos sonidos, colaboraciones internacionales y a preparar nuevo material discográfico.',
  },
]

const PHOTOS = [
  { id: 1, caption: 'Sesión retrato', ratio: 'tall' },
  { id: 2, caption: 'En el estudio', ratio: 'wide' },
  { id: 3, caption: 'Montañas de Colombia', ratio: 'square' },
  { id: 4, caption: 'Live session', ratio: 'tall' },
  { id: 5, caption: 'Behind the scenes', ratio: 'square' },
  { id: 6, caption: 'Sesión urbana', ratio: 'wide' },
  { id: 7, caption: 'Cover art', ratio: 'tall' },
  { id: 8, caption: 'Ensayos', ratio: 'square' },
]

const VIDEOS = [
  {
    id: 1,
    title: 'Video oficial',
    year: '2024',
    duration: '3:24',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Live Session Colombia',
    year: '2024',
    duration: '4:18',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Acústico Montañas',
    year: '2023',
    duration: '3:02',
    youtubeId: 'dQw4w9WgXcQ',
  },
]

const DISCOGRAPHY = [
  { title: 'Sencillos 2024', year: 2024, type: 'Singles', tracks: 4, color: 'from-fuchsia-500/30 to-amber-500/20' },
  { title: 'Desde las Montañas', year: 2022, type: 'EP', tracks: 6, color: 'from-amber-500/30 to-rose-500/20' },
  { title: 'Trap Sessions', year: 2021, type: 'Mixtape', tracks: 8, color: 'from-violet-500/30 to-cyan-500/20' },
  { title: 'Lo que caiga', year: 2020, type: 'EP', tracks: 5, color: 'from-rose-500/30 to-amber-500/20' },
]

const SHOWS = [
  { date: '15 NOV 2026', venue: 'Teatro Mayor Julio Mario Santo Domingo', city: 'Bogotá, CO', status: 'Tickets' },
  { date: '22 NOV 2026', venue: 'Plaza de Toros La Macarena', city: 'Medellín, CO', status: 'Tickets' },
  { date: '28 NOV 2026', venue: 'Centro de Eventos Valle del Pacífico', city: 'Cali, CO', status: 'Agotado' },
  { date: '05 DIC 2026', venue: 'Sala Romero', city: 'Quito, EC', status: 'Tickets' },
  { date: '12 DIC 2026', venue: 'Teatro Gran Rex', city: 'Buenos Aires, AR', status: 'Tickets' },
]

const SERVICES = [
  {
    title: 'Producción de Reggaeton',
    desc: 'Beats de reggaeton colombiano con mezcla y masterización profesional. Estilo moderno con esencia urbana.',
    price: 'Desde $95 USD',
  },
  {
    title: 'Producción de Trap',
    desc: 'Instrumentales de trap latino con 808s pesados, melodías envolventes y estructura lista para cantar.',
    price: 'Desde $95 USD',
  },
  {
    title: 'Composición y Letras',
    desc: 'Escritura de canciones en español para reggaeton, trap, R&B o rap. Hook pegadizo garantizado.',
    price: 'Desde $120 USD',
  },
]

/* ============================================================
   Componentes auxiliares
   ============================================================ */

function Equalizer({ bars = 5, className = '' }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-end gap-[3px] h-4 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="eq-bar"
          style={{
            height: '100%',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  )
}

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mb-12 md:mb-16 max-w-2xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <Equalizer bars={4} className="h-3" />
        <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">
          {kicker}
        </span>
      </div>
      <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-gold-gradient">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full blur-3xl animate-float-slow"
        style={{ background: 'radial-gradient(circle, oklch(0.55 0.25 340 / 35%), transparent 70%)' }}
      />
      <div
        className="absolute top-[40%] right-[8%] w-[500px] h-[500px] rounded-full blur-3xl animate-float-medium"
        style={{ background: 'radial-gradient(circle, oklch(0.55 0.22 70 / 30%), transparent 70%)' }}
      />
      <div
        className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, oklch(0.45 0.28 290 / 30%), transparent 70%)' }}
      />
    </div>
  )
}

function Particles() {
  const particles = Array.from({ length: 30 })
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const left = (i * 37) % 100
        const top = (i * 53) % 100
        const size = 1 + (i % 3)
        const delay = (i * 0.3) % 6
        const dur = 6 + (i % 5)
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background:
                i % 3 === 0
                  ? 'oklch(0.95 0.10 75)'
                  : i % 3 === 1
                  ? 'oklch(0.80 0.20 340)'
                  : 'oklch(0.95 0.05 60)',
              boxShadow: '0 0 6px currentColor',
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </div>
  )
}

/* ============================================================
   SECCIÓN: Navegación flotante
   ============================================================ */
function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
              scrolled ? 'glass shadow-2xl' : 'bg-transparent'
            }`}
          >
            <button
              onClick={() => go('inicio')}
              className="flex items-center gap-2 group"
              aria-label="Inicio"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300/80 to-fuchsia-500/70">
                <span className="font-display text-base text-background">L</span>
                <span className="absolute inset-0 rounded-full ring-1 ring-amber-200/40 animate-pulse-glow" />
              </span>
              <span className="font-display text-xl tracking-wider hidden sm:block">
                {ARTIST.name}
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-fuchsia-400/0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => go('contacto')}
                size="sm"
                className="hidden md:inline-flex rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background hover:opacity-90 font-medium"
              >
                Booking
              </Button>
              <button
                className="md:hidden p-2 rounded-full hover:bg-white/5"
                onClick={() => setOpen((v) => !v)}
                aria-label="Menú"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 inset-x-4 z-40 md:hidden glass rounded-2xl p-4"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className="py-3 px-3 text-left text-base text-foreground hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ============================================================
   SECCIÓN: Hero
   ============================================================ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center hero-gradient noise-overlay overflow-hidden"
    >
      <FloatingOrbs />
      <Particles />

      <motion.div
        style={{ y: yText, opacity, scale }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-24 pb-16"
      >
        {/* Etiqueta superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8"
        >
          <Equalizer bars={5} className="h-4" />
          <span className="text-xs uppercase tracking-[0.25em] text-primary/90">
            {ARTIST.genre}
          </span>
        </motion.div>

        {/* Nombre del artista */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-[clamp(4rem,16vw,16rem)] leading-[0.85] text-gold-gradient"
        >
          {ARTIST.name}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 font-serif-display italic text-xl md:text-2xl text-foreground/80"
        >
          {ARTIST.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-4 max-w-xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed"
        >
          {ARTIST.bioShort}
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background hover:opacity-90 px-7 font-medium"
            onClick={() =>
              document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Play className="mr-2 h-4 w-4" /> Ver videos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 text-foreground hover:bg-white/5 px-7"
            onClick={() =>
              document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Sparkles className="mr-2 h-4 w-4" /> Conoce su historia
          </Button>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-amber-400/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Marquee inferior del hero
   ============================================================ */
function Marquee() {
  const items = [
    'Reggaeton',
    'Trap',
    'Urbano Latino',
    'Productor',
    'Cantautor',
    'Desde Colombia',
    '+14 años de carrera',
    'La música no tiene límites',
    'Disponible en Shazam',
    'Spotify · YouTube',
  ]
  return (
    <div className="relative border-y border-white/5 bg-card/40 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span className="font-display text-2xl md:text-3xl text-foreground/60 tracking-wider">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   SECCIÓN: Historia / Biografía
   ============================================================ */
function History() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="historia" className="relative py-24 md:py-32 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Historia"
          title="Desde las montañas de Colombia"
          description="Más de 14 años haciendo música sin límites. Una trayectoria construida desde el estudio casero hasta las plataformas digitales globales."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Imagen placeholder grande */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glow-border group">
              {/* Placeholder reemplazable */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-violet-700/30 to-amber-500/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.15_75_/_30%),transparent_50%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <Camera className="h-10 w-10 text-foreground/50 mb-3" />
                <p className="text-sm text-foreground/60 font-medium">
                  Reemplaza por tu foto principal
                </p>
                <p className="text-xs text-foreground/40 mt-1">600 × 800 px · JPG / PNG</p>
              </div>
              {/* Frame decorativo */}
              <div className="absolute inset-3 border border-white/10 rounded-2xl pointer-events-none" />
              {/* Sello giratorio */}
              <div className="absolute top-5 right-5 h-16 w-16 rounded-full glass flex items-center justify-center animate-spin-slow">
                <span className="font-display text-[10px] tracking-widest text-primary/80">
                  ★ ALFRED ★
                </span>
              </div>
            </div>
            {/* Cita destacada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 glass rounded-2xl p-5 flex items-start gap-3"
            >
              <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="font-serif-display italic text-sm md:text-base text-foreground/80 leading-relaxed">
                "Desde las montañas de Colombia soy Alfred White. Hago reggaeton, trap y de todo lo que caiga. La música no tiene límites."
                <span className="block mt-2 not-italic text-xs text-muted-foreground">
                  — Alfred White, bio oficial (Songstats)
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div ref={ref} className="relative">
            {/* Línea vertical */}
            <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/60 via-fuchsia-500/40 to-transparent" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Punto en la línea */}
                  <div className="absolute left-0 md:left-2 top-1 flex items-center justify-center">
                    <div className="relative h-8 w-8 rounded-full glass flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-400 to-fuchsia-500" />
                      <div className="absolute inset-0 rounded-full ring-2 ring-amber-400/30 animate-pulse-glow" />
                    </div>
                  </div>

                  <div className="font-display text-3xl md:text-4xl text-gold-gradient">
                    {item.year}
                  </div>
                  <h3 className="mt-1 font-serif-display text-xl md:text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bloque de logros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              {[
                { value: '+14', label: 'Años de carrera' },
                { value: '3', label: 'Géneros' },
                { value: 'L1', label: 'Fiverr Seller' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-2xl md:text-3xl text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bio extendida */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-24 grid md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Equalizer bars={4} className="h-3" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">
                Biografía
              </span>
            </div>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
              {ARTIST.bioLong}
            </p>
            <p className="mt-4 text-base md:text-lg text-foreground/85 leading-relaxed">
              Su presencia en plataformas como <strong className="text-primary">Shazam</strong>,{' '}
              <strong className="text-primary">Songstats</strong>, <strong className="text-primary">Spotify</strong>{' '}
              y <strong className="text-primary">YouTube</strong> lo confirma como un artista en constante crecimiento.
              Como <strong className="text-primary">Level 1 Seller en Fiverr</strong>, también produce para artistas
              de todo el mundo, demostrando que su versatilidad va más allá de lo propio.
            </p>
          </div>
          <div className="glass rounded-3xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium mb-3">
                Plataformas
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'Shazam', note: 'Reconocimiento de canciones' },
                  { name: 'Songstats', note: 'Analytics de artista' },
                  { name: 'Spotify', note: 'Streaming oficial' },
                  { name: 'YouTube', note: 'Videos musicales' },
                  { name: 'Fiverr', note: 'Servicios de producción' },
                ].map((p) => (
                  <li key={p.name} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Galería de Fotos
   ============================================================ */
function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const ratioClass = (r: string) => {
    switch (r) {
      case 'tall':
        return 'row-span-2 aspect-[3/4]'
      case 'wide':
        return 'col-span-2 aspect-[16/10]'
      default:
        return 'aspect-square'
    }
  }

  return (
    <section id="fotos" className="relative py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Galería"
          title="Momentos en imágenes"
          description="Sesiones de fotos, backstage, vivo en escena. Haz clic en cualquier imagen para ampliarla."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(0,1fr)]">
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => setSelected(photo.id)}
              className={`group relative overflow-hidden rounded-2xl ${ratioClass(
                photo.ratio
              )} glow-border`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-violet-700/30 to-amber-500/20 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.85_0.15_75_/_20%),transparent_50%)]" />

              {/* Placeholder overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <Camera className="h-6 w-6 text-foreground/40 mb-2 transition-opacity group-hover:opacity-0" />
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 transition-opacity group-hover:opacity-0">
                  Foto {photo.id}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary/80 mb-1">
                    {String(photo.id).padStart(2, '0')}
                  </p>
                  <p className="font-serif-display text-base md:text-lg text-foreground">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Frame */}
              <div className="absolute inset-2 border border-white/10 rounded-xl pointer-events-none" />
            </motion.button>
          ))}
        </div>

        {/* Nota inferior */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          ✦ Reemplaza cada tarjeta con tu propia foto · Tamaño recomendado: 1200 × 1500 px
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full glass hover:bg-white/10"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl aspect-[3/4] rounded-3xl overflow-hidden glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-violet-700/40 to-amber-500/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <Camera className="h-12 w-12 text-foreground/40 mb-3" />
                <p className="text-sm text-foreground/60">
                  Aquí se mostraría la foto ampliada
                </p>
                <p className="text-xs text-foreground/40 mt-2">
                  {PHOTOS.find((p) => p.id === selected)?.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Videos Musicales
   ============================================================ */
function MusicVideos() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="videos" className="relative py-24 md:py-32 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Videos"
          title="Música en movimiento"
          description="Videos oficiales, live sessions y acústicos. Reemplaza cada tarjeta con tu video de YouTube o MP4."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-3xl overflow-hidden glow-border cursor-pointer"
              onClick={() => setActive(video.id)}
            >
              {/* Aspecto 16:9 */}
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-violet-800/30 to-amber-500/20 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,oklch(0.85_0.15_75_/_25%),transparent_60%)]" />

                {/* Botón play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-6 w-6 md:h-8 md:w-8 text-foreground fill-foreground ml-1" />
                    <div className="absolute inset-0 rounded-full ring-2 ring-amber-400/40 animate-pulse-glow" />
                  </div>
                </div>

                {/* Duración */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-[11px] font-mono">
                  {video.duration}
                </div>

                {/* Año */}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-md glass text-[11px] uppercase tracking-widest text-primary/90">
                  {video.year}
                </div>

                {/* Video icon */}
                <div className="absolute top-3 right-3">
                  <Video className="h-4 w-4 text-foreground/40" />
                </div>
              </div>

              {/* Footer */}
              <div className="relative bg-card/60 backdrop-blur-sm p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-display text-base md:text-lg text-foreground">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Video musical</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            ✦ Edita el array <code className="text-primary/80">VIDEOS</code> en el código para reemplazar con tus IDs de YouTube
          </p>
        </motion.div>
      </div>

      {/* Modal reproductor */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full glass hover:bg-white/10"
              onClick={() => setActive(null)}
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${
                  VIDEOS.find((v) => v.id === active)?.youtubeId
                }?autoplay=1`}
                title="Reproductor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Discografía
   ============================================================ */
function Discography() {
  return (
    <section id="musica" className="relative py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Discografía"
          title="Su música en discos"
          description="Álbumes, EPs y live sessions. Toda la discografía disponible en streaming."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISCOGRAPHY.map((album, i) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden glow-border cursor-pointer"
            >
              {/* Portada */}
              <div className="relative aspect-square overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${album.color}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.15_75_/_20%),transparent_60%)]" />
                {/* Vinilo giratorio */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[70%] w-[70%] rounded-full bg-black/80 shadow-2xl transition-transform duration-700 group-hover:rotate-180 flex items-center justify-center">
                    <div className="absolute inset-4 rounded-full border border-white/10" />
                    <div className="absolute inset-8 rounded-full border border-white/5" />
                    <div className="absolute inset-12 rounded-full border border-white/5" />
                    <div className="h-[30%] w-[30%] rounded-full bg-gradient-to-br from-amber-400 to-fuchsia-500 flex items-center justify-center">
                      <Disc3 className="h-5 w-5 text-background" />
                    </div>
                  </div>
                </div>
                {/* Año */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md glass text-[11px] font-mono">
                  {album.year}
                </div>
              </div>
              {/* Info */}
              <div className="p-4 bg-card/60">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-primary/80 px-2 py-0.5 rounded-full bg-primary/10">
                    {album.type}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {album.tracks} tracks
                  </span>
                </div>
                <h3 className="font-serif-display text-lg text-foreground">
                  {album.title}
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-3 text-xs hover:bg-white/5"
                    onClick={() => window.open(ARTIST.social.spotify, '_blank')}
                  >
                    <Spotify className="h-3.5 w-3.5 mr-1.5" /> Escuchar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Próximos Shows
   ============================================================ */
function UpcomingShows() {
  return (
    <section id="shows" className="relative py-24 md:py-32 noise-overlay">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading
          kicker="Tour 2026"
          title="Próximos shows"
          description="No te pierdas la experiencia en vivo. Consigue tus entradas antes de que se agoten."
        />

        <div className="space-y-3">
          {SHOWS.map((show, i) => (
            <motion.div
              key={show.date + show.city}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 6 }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 p-4 md:p-6 rounded-2xl glass hover:bg-white/5 transition-colors cursor-pointer"
            >
              {/* Fecha */}
              <div className="text-center min-w-[80px]">
                <div className="font-display text-2xl md:text-3xl text-gold-gradient leading-none">
                  {show.date.split(' ')[0]}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {show.date.split(' ').slice(1).join(' ')}
                </div>
              </div>

              {/* Separador */}
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

              {/* Venue */}
              <div className="min-w-0">
                <h3 className="font-serif-display text-base md:text-xl text-foreground truncate">
                  {show.venue}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-xs md:text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary/60" />
                  {show.city}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <Equalizer
                  bars={3}
                  className={`h-3 ${show.status === 'Agotado' ? 'opacity-30' : ''}`}
                />
                {show.status === 'Agotado' ? (
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
                    Agotado
                  </span>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-white/20 text-foreground hover:bg-white/5 text-xs px-4"
                  >
                    {show.status}
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Servicios de Producción (Fiverr)
   ============================================================ */
function ProductionServices() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Producción · Fiverr"
          title="Servicios a medida"
          description="Alfred White es también Level 1 Seller en Fiverr. Contrata sus servicios de producción musical para tu próximo lanzamiento."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl glass p-6 md:p-7 glow-border"
            >
              {/* Icono decorativo */}
              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400/30 to-fuchsia-500/30 flex items-center justify-center mb-5">
                <Disc3 className="h-5 w-5 text-primary group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-amber-400/30 animate-pulse-glow" />
              </div>

              <h3 className="font-serif-display text-xl md:text-2xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gold-gradient font-display text-lg tracking-wider">
                  {service.price}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full border-white/20 text-foreground hover:bg-white/5 text-xs"
                  onClick={() => window.open(ARTIST.social.fiverr, '_blank')}
                >
                  Contratar
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 glass rounded-3xl p-6 md:p-7"
        >
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-400/40 to-fuchsia-500/40 flex items-center justify-center">
              <Mic2 className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="font-serif-display text-lg text-foreground">
                ¿Necesitas un beat personalizado?
              </p>
              <p className="text-sm text-muted-foreground">
                Level 1 Seller en Fiverr · +14 años de experiencia · Respuesta en 24h
              </p>
            </div>
          </div>
          <Button
            className="rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background hover:opacity-90 px-6"
            onClick={() => window.open(ARTIST.social.fiverr, '_blank')}
          >
            Ver perfil en Fiverr
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================================
   SECCIÓN: Booking / Contacto
   ============================================================ */
function Booking() {
  const [sending, setSending] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      toast.success('¡Mensaje enviado! Te contactaremos pronto.', {
        description: `Equipo de booking de ${ARTIST.name}`,
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1200)
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado izquierdo: info */}
          <div>
            <SectionHeading
              kicker="Booking"
              title="Lleva a Alfred a tu escenario"
              description="Contrataciones, prensa, colaboraciones y producciones a medida. Cuéntanos sobre tu proyecto y te responderemos a la brevedad."
            />

            <div className="space-y-4 mt-8">
              <a
                href={`mailto:${ARTIST.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-400/30 to-fuchsia-500/30 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                    {ARTIST.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${ARTIST.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-400/30 to-fuchsia-500/30 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Teléfono
                  </p>
                  <p className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                    {ARTIST.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Redes */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Síguenos
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: ARTIST.social.instagram, label: 'Instagram' },
                  { icon: Youtube, href: ARTIST.social.youtube, label: 'YouTube' },
                  { icon: Spotify, href: ARTIST.social.spotify, label: 'Spotify' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-12 w-12 rounded-xl glass hover:bg-gradient-to-br hover:from-amber-400/30 hover:to-fuchsia-500/30 flex items-center justify-center transition-all hover:scale-105"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lado derecho: formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl glass p-6 md:p-8 glow-border"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background text-[10px] uppercase tracking-widest font-medium">
              Formulario rápido
            </div>

            <form onSubmit={onSubmit} className="space-y-5 mt-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Tu nombre"
                    className="bg-background/50 border-white/10 focus-visible:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="bg-background/50 border-white/10 focus-visible:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type" className="text-xs uppercase tracking-widest">
                  Tipo de proyecto
                </Label>
                <Input
                  id="type"
                  placeholder="Concierto · Festival · Colaboración · Prensa"
                  className="bg-background/50 border-white/10 focus-visible:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Cuéntanos fechas, lugar, presupuesto y detalles del proyecto..."
                  className="bg-background/50 border-white/10 focus-visible:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background hover:opacity-90 font-medium h-12"
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full mr-2"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300/80 to-fuchsia-500/70">
              <span className="font-display text-xl text-background">L</span>
            </span>
            <div>
              <div className="font-display text-2xl tracking-wider text-gold-gradient">
                {ARTIST.name}
              </div>
              <div className="text-xs text-muted-foreground">{ARTIST.genre}</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {[
              { icon: Instagram, href: ARTIST.social.instagram, label: 'Instagram' },
              { icon: Youtube, href: ARTIST.social.youtube, label: 'YouTube' },
              { icon: Spotify, href: ARTIST.social.spotify, label: 'Spotify' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-10 w-10 rounded-xl glass hover:bg-white/5 flex items-center justify-center transition-all"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {ARTIST.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            <Mic2 className="h-3 w-3" />
            Brochure diseñado para artistas musicales
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   PÁGINA PRINCIPAL
   ============================================================ */
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <FloatingNav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <History />
        <PhotoGallery />
        <MusicVideos />
        <Discography />
        <ProductionServices />
        <UpcomingShows />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
