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
  Facebook,
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

/* TikTok brand icon */
function TikTok({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  )
}

/* WhatsApp brand icon */
function WhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

/* ============================================================
   LOGOS OFICIALES DE PLATAFORMAS (SVG con colores de marca)
   ============================================================ */

// Logo oficial de YouTube (botón rojo + wordmark)
function YouTubeLogo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <svg viewBox="0 0 90 20" className={className} aria-hidden="true" role="img" aria-label="YouTube">
      <path fill="#FF0000" d="M27.972 2.929A3.515 3.515 0 0 0 25.5.454C23.34-.114 14.663-.114 14.663-.114S5.987-.114 3.825.454A3.515 3.515 0 0 0 1.353 2.93C.785 5.091.785 9.617.785 9.617s0 4.526.568 6.688a3.515 3.515 0 0 0 2.472 2.476c2.162.568 10.838.568 10.838.568s8.676 0 10.839-.568a3.515 3.515 0 0 0 2.472-2.476c.568-2.162.568-6.688.568-6.688s0-4.526-.568-6.688z" transform="translate(-0.785, 0.114)"/>
      <path fill="#FFFFFF" d="M11.433 14.714L18.746 9.617 11.433 4.52z"/>
      {showText && (
        <text x="34" y="15" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">YouTube</text>
      )}
    </svg>
  )
}

// Logo oficial de Spotify (círculo verde + wordmark)
function SpotifyLogo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <svg viewBox="0 0 100 20" className={className} aria-hidden="true" role="img" aria-label="Spotify">
      <circle cx="10" cy="10" r="10" fill="#1DB954"/>
      <path fill="#FFFFFF" d="M14.5 8.2c-2.7-1.4-5.6-1.6-8.3-1-.2 0-.3.3-.2.5 0 .2.2.3.4.3 2.5-.5 5.2-.4 7.6 1 .1 0 .2.1.3.1.1 0 .3-.1.3-.2.1-.2 0-.5-.1-.6zm-.3 1.9c-2.4-1.3-5.2-1.5-7.6-.9-.2 0-.3.2-.3.4 0 .2.2.3.4.3 2.2-.5 4.7-.4 6.9.8.1 0 .2.1.3.1.1 0 .2-.1.3-.2.1-.2 0-.4-.1-.5h.1zm-1.1 1.8c-2-1.1-4.3-1.3-6.3-.8-.2 0-.3.2-.2.4 0 .2.2.3.3.2 1.8-.4 3.9-.3 5.7.7.1 0 .2.1.2.1.1 0 .2-.1.2-.2.1-.2 0-.4-.1-.4z"/>
      {showText && (
        <text x="26" y="15" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Spotify</text>
      )}
    </svg>
  )
}

// Logo oficial de Instagram (gradiente + cámara)
function InstagramLogo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <svg viewBox="0 0 110 20" className={className} aria-hidden="true" role="img" aria-label="Instagram">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80"/>
          <stop offset="10%" stopColor="#FCAF45"/>
          <stop offset="30%" stopColor="#F77737"/>
          <stop offset="50%" stopColor="#F56040"/>
          <stop offset="70%" stopColor="#E1306C"/>
          <stop offset="90%" stopColor="#833AB4"/>
          <stop offset="100%" stopColor="#5851DB"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="20" height="20" rx="5" fill="url(#ig-gradient)"/>
      <rect x="5" y="5" width="10" height="10" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="2.5" fill="none" stroke="#FFFFFF" strokeWidth="1.2"/>
      <circle cx="14" cy="6" r="0.8" fill="#FFFFFF"/>
      {showText && (
        <text x="26" y="15" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">Instagram</text>
      )}
    </svg>
  )
}

// Logo oficial de Facebook (f + azul)
function FacebookLogo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <svg viewBox="0 0 100 20" className={className} aria-hidden="true" role="img" aria-label="Facebook">
      <circle cx="10" cy="10" r="10" fill="#1877F2"/>
      <path fill="#FFFFFF" d="M11.4 8.2h1.2V6.5h-1.2c-1.3 0-2.2.9-2.2 2.2v.9H8.1v1.7h1.1v4.3h1.7v-4.3h1.3l.2-1.7h-1.5v-.7c0-.5.2-.7.6-.7z"/>
      {showText && (
        <text x="26" y="15" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Facebook</text>
      )}
    </svg>
  )
}

// Logo oficial de TikTok (nota musical + wordmark)
function TikTokLogo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <svg viewBox="0 0 100 20" className={className} aria-hidden="true" role="img" aria-label="TikTok">
      <path fill="#25F4EE" d="M14.5 6.6c-.2-.1-.4-.1-.5-.2-.1-.4-.1-.7-.2-1C13.4 4.2 12.4 3.5 11 3.5c-.4 0-.7 0-1 .1v.3c.3.2.6.4.9.7.6.7.9 1.5.9 2.3 0 .3-.1.6-.1.9-.1.2-.1.5-.2.7-.2.2-.4.3-.6.5-.2.1-.4.2-.6.2-.2 0-.5 0-.7-.1-.2-.1-.4-.2-.6-.3.2.2.5.4.8.5.4.1.7.1 1.1.1.4 0 .7-.1 1-.2.3-.1.5-.3.8-.5.2-.2.3-.5.5-.7.2-.4.3-.8.3-1.2z" opacity="0.7"/>
      <path fill="#FE2C55" d="M14.5 6.6c-.2-.1-.4-.1-.5-.2-.1-.4-.1-.7-.2-1C13.4 4.2 12.4 3.5 11 3.5c-.4 0-.7 0-1 .1v.3c.3.2.6.4.9.7.6.7.9 1.5.9 2.3 0 .3-.1.6-.1.9-.1.2-.1.5-.2.7-.2.2-.4.3-.6.5-.2.1-.4.2-.6.2-.2 0-.5 0-.7-.1-.2-.1-.4-.2-.6-.3.2.2.5.4.8.5.4.1.7.1 1.1.1.4 0 .7-.1 1-.2.3-.1.5-.3.8-.5.2-.2.3-.5.5-.7.2-.4.3-.8.3-1.2z" opacity="0.7" transform="translate(-0.5, -0.5)"/>
      <path fill="#FFFFFF" d="M14.5 6.6c-.2-.1-.4-.1-.5-.2-.1-.4-.1-.7-.2-1C13.4 4.2 12.4 3.5 11 3.5c-.4 0-.7 0-1 .1v.3c.3.2.6.4.9.7.6.7.9 1.5.9 2.3 0 .3-.1.6-.1.9-.1.2-.1.5-.2.7-.2.2-.4.3-.6.5-.2.1-.4.2-.6.2-.2 0-.5 0-.7-.1-.2-.1-.4-.2-.6-.3.2.2.5.4.8.5.4.1.7.1 1.1.1.4 0 .7-.1 1-.2.3-.1.5-.3.8-.5.2-.2.3-.5.5-.7.2-.4.3-.8.3-1.2z"/>
      {showText && (
        <text x="20" y="15" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">TikTok</text>
      )}
    </svg>
  )
}

// Logo de Shazam (azul)
function ShazamLogo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <svg viewBox="0 0 100 20" className={className} aria-hidden="true" role="img" aria-label="Shazam">
      <circle cx="10" cy="10" r="10" fill="#0066FF"/>
      <path fill="#FFFFFF" d="M7 13.5c1.5-.3 2.5-1 3.2-1.8.3.4.6.7 1 .9-.8 1-2 1.7-3.5 2-.2 0-.4 0-.5-.2-.1-.2 0-.5.2-.5-.2-.2-.4-.3-.4-.4zm.5-2.7c1-.2 1.7-.7 2.2-1.3.3.3.6.5 1 .7-.7.9-1.7 1.5-2.8 1.7-.2 0-.4-.1-.5-.3 0-.2.1-.4.3-.5-.1 0-.2-.2-.2-.3zm1-2.5c.7-.2 1.2-.5 1.6-1 .3.2.5.4.8.5-.6.7-1.4 1.2-2.3 1.4-.2 0-.4-.1-.5-.3 0-.2.1-.4.3-.4-.1-.1-.1-.2.1-.2zm.7-2.3c.5-.2.8-.5 1.1-.9.2.2.4.3.6.4-.4.5-.9.9-1.5 1.1-.2 0-.4 0-.5-.2 0-.2.1-.4.3-.4z"/>
      {showText && (
        <text x="26" y="15" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Shazam</text>
      )}
    </svg>
  )
}

/* ============================================================
   DATOS DEL ARTISTA — Alfred White
   Fuentes verificadas:
   - Spotify: https://open.spotify.com/artist/51GuS1Zdn16Rr5h8JL0v3x (309 oyentes/mes)
   - YouTube: https://www.youtube.com/@alfredwhiteco (canal oficial)
   - Instagram: https://www.instagram.com/alfredwhite (oficial)
   - Bio oficial del canal: "Hago música porque es lo que me gusta, soy un paisa
     de pura sepa ya mas de 10 años haciendo esta vuelta y lo seguiré haciendo
     hasta que me muera. tengo reggaetón y trap de todos los estilos..."
   - Canción top: "Bakanora" (25,878 plays en Spotify)
   - Colaborador frecuente: Juan Roldan (@juanroldanco)
   ============================================================ */
const ARTIST = {
  name: 'ALFRED WHITE',
  tagline: 'Cantante · Productor · Cantautor Paisa',
  genre: 'Reggaeton · Trap · Urbano Latino',
  location: 'Antioquia, Colombia · Latinoamérica',
  bioShort:
    'Paisa de pura sepa. Reggaetón y trap de todos los estilos. Haciendo música desde hace más de 10 años porque es lo que le gusta, y lo seguirá haciendo hasta que se muera.',
  bioLong:
    'Alfred White es un artista paisa de pura sepa, nacido en las montañas de Antioquia, Colombia. Con más de 10 años de trayectoria, hace reggaetón y trap de todos los estilos, sin limitarse a un solo sonido. Su filosofía es clara: "Hago música porque es lo que me gusta, y lo seguiré haciendo hasta que me muera". Su canción "Bakanora" ha superado las 25,000 reproducciones en Spotify, y colabora frecuentemente con artistas como Juan Roldan y Hamil, llevando el sonido colombiano a toda Latinoamérica.',
  email: 'alfredwhitebooking@gmail.com',
  phone: '+52 1 644 381 7647',
  phoneRaw: '5216443817647', // Formato para WhatsApp (sin + ni espacios)
  social: {
    instagram: 'https://www.instagram.com/alfredwhiteco',
    facebook: 'https://www.facebook.com/alfredo.cartagena.37',
    youtube: 'https://www.youtube.com/@alfredwhiteco',
    youtubeChannel: 'https://www.youtube.com/channel/UCkh8bPyHjV6Ax7yPM_eCMug',
    spotify: 'https://open.spotify.com/artist/51GuS1Zdn16Rr5h8JL0v3x',
    shazam: 'https://www.shazam.com/',
    songstats: 'https://songstats.com/',
    fiverr: 'https://www.fiverr.com/',
    tiktok: 'https://www.tiktok.com/@alfredwhiteelparcero',
    appleMusic: 'https://music.apple.com/',
    deezer: 'https://www.deezer.com/',
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
    year: '+10 años',
    title: 'Inicios paisas',
    text: 'Alfred White empieza a hacer música en las montañas de Antioquia. Paisa de pura sepa, descubre en el reggaetón y el trap su forma de expresión y comienza a producir sus primeras pistas.',
  },
  {
    year: '2018-2020',
    title: 'Primeros lanzamientos',
    text: 'Saca sus primeros videos oficiales en YouTube: "-0", "Bakanora", "Lokura" y "Tentacion". Su estilo versátil mezcla reggaetón y trap de todos los estilos, ganando seguidores en Colombia.',
  },
  {
    year: '2022',
    title: 'Consolidación digital',
    text: 'Su música llega a Spotify con 309 oyentes mensuales. "Bakanora" se convierte en su canción más escuchada con más de 25,000 reproducciones. Aparece en Shazam y Songstats.',
  },
  {
    year: '2023',
    title: 'Colaboraciones',
    text: 'Colabora con Juan Roldan en "Tentacion - Alfred White X Juan Roldan" (video oficial) y con Hamil. También trabaja con DjLeo23 en "Sábado en la Noche" y Cheff-X.',
  },
  {
    year: '2024',
    title: 'Catálogo amplio',
    text: 'Lanza "Bakanora (Remix) 2024 Remastered", nuevos visualizers para "WII", "De Repente" y más sencillos como "Soy Nada", "Segundo Intento", "Para Qué Huir" y "Voy A Olvidar".',
  },
]

const PHOTOS = [
  { id: 1, caption: '-0 (Video Oficial)', ratio: 'tall', src: '/photos/yt_aDrrZB0hOfA.jpg' },
  { id: 2, caption: 'Bakanora', ratio: 'wide', src: '/photos/yt_wkoGx0YyZBQ.jpg' },
  { id: 3, caption: 'Tentacion X Juan Roldan', ratio: 'square', src: '/photos/yt_0B00IbU6F08.jpg' },
  { id: 4, caption: 'Soy Nada', ratio: 'tall', src: '/photos/yt_kC7GvnraUpE.jpg' },
  { id: 5, caption: 'Lokura X Gabyl', ratio: 'square', src: '/photos/yt_I5WYssqLI54.jpg' },
  { id: 6, caption: 'Segundo Intento', ratio: 'wide', src: '/photos/yt_D78OU0V-pAI.jpg' },
  { id: 7, caption: 'Trampa', ratio: 'tall', src: '/photos/yt_vO1w6dhGJ8o.jpg' },
  { id: 8, caption: 'Para Qué Huir', ratio: 'square', src: '/photos/yt_PQvgxLGSFGo.jpg' },
]

const VIDEOS = [
  { id: 1, title: '-0 (Video Oficial)', year: '2022', duration: '3:24', youtubeId: 'aDrrZB0hOfA' },
  { id: 2, title: 'Bakanora', year: '2022', duration: '3:18', youtubeId: 'wkoGx0YyZBQ' },
  { id: 3, title: 'Tentacion X Juan Roldan', year: '2023', duration: '3:36', youtubeId: '0B00IbU6F08' },
  { id: 4, title: 'Soy Nada', year: '2024', duration: '2:58', youtubeId: 'kC7GvnraUpE' },
  { id: 5, title: 'Lokura X Gabyl', year: '2024', duration: '3:02', youtubeId: 'I5WYssqLI54' },
  { id: 6, title: 'Segundo Intento', year: '2024', duration: '2:45', youtubeId: 'D78OU0V-pAI' },
  { id: 7, title: 'Tentacion (Solo)', year: '2023', duration: '3:30', youtubeId: 'Dyw3nOKoWkg' },
  { id: 8, title: 'Lokura (Solo)', year: '2022', duration: '3:00', youtubeId: 'ZWRPcu2P_Ts' },
  { id: 9, title: 'Bakanora (Remix 2024)', year: '2024', duration: '3:25', youtubeId: 'OslbqrkxATI' },
  { id: 10, title: 'Trampa', year: '2023', duration: '2:50', youtubeId: 'vO1w6dhGJ8o' },
  { id: 11, title: 'Para Qué Huir', year: '2024', duration: '3:05', youtubeId: 'PQvgxLGSFGo' },
  { id: 12, title: 'WII (Visualizer)', year: '2024', duration: '2:40', youtubeId: 'CiPyR-Nzflw' },
  { id: 13, title: 'De Repente (Visualizer)', year: '2024', duration: '2:55', youtubeId: 't-K94IfG1s4' },
  { id: 14, title: '-0 (Videolyric)', year: '2022', duration: '3:20', youtubeId: 'dm_FcQLz_Vw' },
  { id: 15, title: 'Viajero del Tiempo', year: '2023', duration: '3:15', youtubeId: '77Oafggr4o0' },
  { id: 16, title: 'Me siento bien', year: '2024', duration: '2:48', youtubeId: 'w8LO_ABN9S4' },
  { id: 17, title: '27052022', year: '2022', duration: '3:10', youtubeId: 'dd-sXwxTCTo' },
  { id: 18, title: 'Cover Sensual', year: '2024', duration: '2:30', youtubeId: 'AvhQFvkqGC8' },
]

// Discografía completa de Spotify con track IDs y carátulas reales
const SPOTIFY_TRACKS = [
  { title: 'Tentacion', trackId: '7fgItMw2q8YtxudX7bnmOi', cover: '/photos/covers/7fgItMw2q8YtxudX7bnmOi.jpg' },
  { title: 'Bakanora', trackId: '7LUfZPi0ypwoQleC1SSK0L', cover: '/photos/covers/7LUfZPi0ypwoQleC1SSK0L.jpg' },
  { title: 'Lokura', trackId: '2QZq81vHGvv9uKBAp07dGr', cover: '/photos/covers/2QZq81vHGvv9uKBAp07dGr.jpg' },
  { title: 'Soy Nada', trackId: '1ejTe3Z2K03rYw7yg06GJJ', cover: '/photos/covers/1ejTe3Z2K03rYw7yg06GJJ.jpg' },
  { title: 'Voy A Olvidar', trackId: '2TeZIVTjabmKGgtIDti0dT', cover: '/photos/covers/2TeZIVTjabmKGgtIDti0dT.jpg' },
  { title: 'Manicomio', trackId: '1OuqGRD2z7DkRoFUNFwsnW', cover: '/photos/covers/1OuqGRD2z7DkRoFUNFwsnW.jpg' },
  { title: 'Solo una Noche', trackId: '2PaWZbJoJiyMGRQZD4uY14', cover: '/photos/covers/2PaWZbJoJiyMGRQZD4uY14.jpg' },
  { title: 'Solo Tu', trackId: '00QaokeOftbGTiAYKCO7JF', cover: '/photos/covers/00QaokeOftbGTiAYKCO7JF.jpg' },
  { title: 'En Visto', trackId: '4VK07d82GZPykv8V5bAA5n', cover: '/photos/covers/4VK07d82GZPykv8V5bAA5n.jpg' },
  { title: 'Playa', trackId: '5cz8oQWCRmqjb6pWnIDmSV', cover: '/photos/covers/5cz8oQWCRmqjb6pWnIDmSV.jpg' },
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
    desc: 'Beats de reggaeton colombiano con mezcla y masterización profesional. Estilo moderno con esencia urbana paisa.',
    price: 'Desde $95 USD',
  },
  {
    title: 'Producción de Trap',
    desc: 'Instrumentales de trap latino con 808s pesados, melodías envolventes y estructura lista para cantar.',
    price: 'Desde $95 USD',
  },
  {
    title: 'Composición y Letras',
    desc: 'Escritura de canciones en español para reggaetón, trap, R&B o rap. Hook pegadizo garantizado.',
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

// Video de fondo de YouTube para el Hero (loop + mute + autoplay)
// Usamos "-0 (Video Oficial)" como video de fondo
const HERO_BG_VIDEO_ID = 'aDrrZB0hOfA'

function YouTubeBackground({ videoId }: { videoId: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Video de YouTube en loop, mute, autoplay */}
      <div className="absolute inset-0 w-full h-full scale-[1.35]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&start=10&end=80`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full"
          style={{ pointerEvents: 'none' }}
          title="Background video"
          aria-hidden="true"
        />
      </div>
      {/* Overlay oscuro para legibilidad del texto - gradiente multicapa */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
    </div>
  )
}

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
      {/* Video de fondo de YouTube (loop + mute + oscurecido) */}
      <YouTubeBackground videoId={HERO_BG_VIDEO_ID} />
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
          className="font-display text-[clamp(4rem,16vw,16rem)] leading-[0.85] text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
        >
          {ARTIST.name}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 font-serif-display italic text-xl md:text-2xl text-foreground/90 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          {ARTIST.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-4 max-w-xl mx-auto text-sm md:text-base text-foreground/80 leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
        >
          {ARTIST.bioShort}
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          {/* Fila 1: Logos clickeables de YouTube y Spotify */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Logo YouTube clickable → video más reciente */}
            <a
              href={`https://www.youtube.com/watch?v=${HERO_BG_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver video más reciente en YouTube"
              className="group flex items-center gap-2 h-12 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:scale-105 transition-all"
            >
              <YouTubeLogo className="h-6 w-auto" showText={false} />
              <span className="text-xs font-medium text-foreground group-hover:text-[#FF0000] transition-colors hidden sm:inline">
                Ver en YouTube
              </span>
            </a>

            {/* Logo Spotify clickable → lanzamiento más reciente */}
            <a
              href={`https://open.spotify.com/track/2TeZIVTjabmKGgtIDti0dT`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escuchar lanzamiento más reciente en Spotify"
              className="group flex items-center gap-2 h-12 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:scale-105 transition-all"
            >
              <SpotifyLogo className="h-6 w-auto" showText={false} />
              <span className="text-xs font-medium text-foreground group-hover:text-[#1DB954] transition-colors hidden sm:inline">
                Escuchar en Spotify
              </span>
            </a>
          </div>

          {/* Fila 2: Botones de acción */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Botón Escuchar música → sección discografía */}
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background hover:opacity-90 px-7 font-medium"
              onClick={() =>
                document.getElementById('musica')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Play className="mr-2 h-4 w-4" /> Escuchar música
            </Button>

            {/* Botón Conoce su historia → sección historia */}
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 text-foreground hover:bg-white/5 px-7 backdrop-blur-md"
              onClick={() =>
                document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <Sparkles className="mr-2 h-4 w-4" /> Conoce su historia
            </Button>
          </div>
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
    'Reggaetón',
    'Trap',
    'Urbano Latino',
    'Paisa de pura sepa',
    'Cantautor',
    'Productor',
    '+10 años de carrera',
    'Antioquia · Colombia',
    'Bakanora 25K+ plays',
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
              {/* Foto real de Alfred White (perfil de Facebook + YouTube) */}
              <img
                src="/photos/yt_channel_avatar.jpg"
                alt="Alfred White - Foto oficial del artista"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
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
                "Hago música porque es lo que me gusta, soy un paisa de pura sepa ya más de 10 años haciendo esta vuelta y lo seguiré haciendo hasta que me muera. Tengo reggaetón y trap de todos los estilos."
                <span className="block mt-2 not-italic text-xs text-muted-foreground">
                  — Alfred White, bio oficial de su canal de YouTube
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
                { value: '+10', label: 'Años de carrera' },
                { value: '25K+', label: 'Plays Bakanora' },
                { value: '18+', label: 'Videos oficiales' },
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
              <div className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium mb-4">
                Plataformas oficiales
              </div>
              <div className="space-y-2.5">
                {[
                  { Logo: SpotifyLogo, name: 'Spotify', note: '309 oyentes/mes · Bakanora 25K+', url: ARTIST.social.spotify },
                  { Logo: YouTubeLogo, name: 'YouTube', note: 'Canal @alfredwhiteco · 18+ videos', url: ARTIST.social.youtube },
                  { Logo: InstagramLogo, name: 'Instagram', note: '@alfredwhiteco', url: ARTIST.social.instagram },
                  { Logo: FacebookLogo, name: 'Facebook', note: 'Alfred White (alfredo.cartagena.37)', url: ARTIST.social.facebook },
                  { Logo: TikTokLogo, name: 'TikTok', note: '@alfredwhiteelparcero', url: ARTIST.social.tiktok },
                  { Logo: ShazamLogo, name: 'Shazam', note: 'Reconocimiento de canciones', url: ARTIST.social.shazam },
                ].map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${p.name} oficial de Alfred White`}
                    className="group flex items-center gap-3 hover:bg-white/5 -mx-2 px-2 py-2 rounded-lg transition-all hover:translate-x-1"
                  >
                    {/* Logo oficial de la plataforma */}
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center">
                      <p.Logo className="h-8 w-auto" showText={false} />
                    </div>
                    {/* Info de la plataforma */}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                        {p.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">{p.note}</div>
                    </div>
                  </a>
                ))}
              </div>
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
              )} glow-border bg-card`}
            >
              {/* Imagen real */}
              <img
                src={photo.src}
                alt={`Alfred White - ${photo.caption}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay gradient para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

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
          ✦ Imágenes reales extraídas de los videos oficiales de Alfred White en YouTube
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
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS.find((p) => p.id === selected)?.src}
                alt={`Alfred White - ${PHOTOS.find((p) => p.id === selected)?.caption}`}
                className="w-full h-auto object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <p className="text-xs uppercase tracking-widest text-primary/80 mb-1">
                  Alfred White
                </p>
                <p className="font-serif-display text-xl text-foreground">
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
  const [showAll, setShowAll] = useState(false)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Mostrar primero 6, luego el resto con "ver más"
  const visibleVideos = showAll ? VIDEOS : VIDEOS.slice(0, 6)

  const handleVideoHover = (videoId: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredVideo(videoId)
    }, 500) // 500ms de delay antes de reproducir el preview
  }

  const handleVideoLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setHoveredVideo(null)
  }

  return (
    <section id="videos" className="relative py-24 md:py-32 noise-overlay">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Videos · YouTube"
          title="Música en movimiento"
          description={`18 videos oficiales del canal YouTube de Alfred White. Pasa el cursor sobre cualquier video para ver un preview en silencio, o haz clic para reproducirlo con sonido.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visibleVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glow-border cursor-pointer bg-card"
              onClick={() => setActive(video.id)}
              onMouseEnter={() => handleVideoHover(video.id)}
              onMouseLeave={handleVideoLeave}
            >
              {/* Aspecto 16:9 con miniatura real de YouTube */}
              <div className="relative aspect-video overflow-hidden">
                {/* Miniatura estática (visible siempre, oculta al hover) */}
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={`${video.title} - Alfred White`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredVideo === video.id ? 'opacity-0' : 'opacity-100'
                  }`}
                  loading="lazy"
                />

                {/* Video de YouTube en preview al hover (mute, autoplay, loop) */}
                {hoveredVideo === video.id && (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&start=5`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen={false}
                    className="absolute inset-0 w-full h-full scale-[1.05] pointer-events-none"
                    title={`Preview de ${video.title}`}
                    aria-hidden="true"
                  />
                )}

                {/* Overlay oscuro para legibilidad (menos opaco cuando hay preview) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30 transition-opacity duration-300 ${
                    hoveredVideo === video.id ? 'opacity-50' : 'opacity-100'
                  }`}
                />

                {/* Botón play (oculto durante el preview) */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredVideo === video.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-background/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-5 w-5 md:h-6 md:w-6 text-foreground fill-foreground ml-1" />
                    <div className="absolute inset-0 rounded-full ring-2 ring-amber-400/40 animate-pulse-glow" />
                  </div>
                </div>

                {/* Indicador de preview activo */}
                {hoveredVideo === video.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-2 left-2 glass rounded-lg px-2 py-1 flex items-center gap-1.5"
                  >
                    <Equalizer bars={4} className="h-3 flex-shrink-0" />
                    <span className="text-[10px] uppercase tracking-wider text-primary font-medium">
                      Preview · Click para audio
                    </span>
                  </motion.div>
                )}

                {/* Duración */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-sm text-[10px] font-mono">
                  {video.duration}
                </div>

                {/* Año */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md glass text-[10px] uppercase tracking-widest text-primary/90">
                  {video.year}
                </div>

                {/* Video icon */}
                <div className="absolute top-2 right-2">
                  <Video className="h-3.5 w-3.5 text-foreground/60 drop-shadow-lg" />
                </div>
              </div>

              {/* Footer */}
              <div className="relative bg-card/80 backdrop-blur-sm p-3 flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif-display text-sm md:text-base text-foreground truncate">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Video oficial</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver más / Ver menos */}
        {VIDEOS.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center"
          >
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-foreground hover:bg-white/5 px-8"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>Ver menos</>
              ) : (
                <>
                  Ver todos los videos ({VIDEOS.length})
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            ✦ {VIDEOS.length} videos oficiales del canal{' '}
            <a
              href={ARTIST.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              @alfredwhiteco ↗
            </a>{' '}
            · Click para reproducir con autoplay
          </p>
        </motion.div>
      </div>

      {/* Modal reproductor con autoplay */}
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
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${
                  VIDEOS.find((v) => v.id === active)?.youtubeId
                }?autoplay=1&mute=0&rel=0&modestbranding=1`}
                title="Reproductor de Alfred White"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
   SECCIÓN: Discografía completa de Spotify con preview
   ============================================================ */
function Discography() {
  const [previewing, setPreviewing] = useState<string | null>(null)
  const [activeTrack, setActiveTrack] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (trackId: string) => {
    // Pequeño delay para evitar activaciones accidentales
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    hoverTimeoutRef.current = setTimeout(() => {
      setPreviewing(trackId)
    }, 400)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setPreviewing(null)
  }

  const openInSpotify = (trackId: string) => {
    window.open(`https://open.spotify.com/track/${trackId}`, '_blank')
  }

  return (
    <section id="musica" className="relative py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          kicker="Discografía · Spotify"
          title="Toda su música"
          description="10 tracks disponibles en Spotify. Pasa el cursor sobre cualquier carátula para escuchar un preview, o haz clic para abrir el reproductor completo."
        />

        {/* Grid de tracks con carátulas reales */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
          {SPOTIFY_TRACKS.map((track, i) => (
            <motion.div
              key={track.trackId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => handleMouseEnter(track.trackId)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveTrack(track.trackId)}
              className="group relative rounded-2xl overflow-hidden glow-border cursor-pointer bg-card"
            >
              {/* Carátula real de Spotify */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={track.cover}
                  alt={`Carátula de ${track.title} - Alfred White`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay oscuro al hover */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Botón de play al hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative h-14 w-14 rounded-full bg-[#1DB954] flex items-center justify-center shadow-2xl">
                    <Play className="h-6 w-6 text-black fill-black ml-1" />
                    <div className="absolute inset-0 rounded-full ring-4 ring-[#1DB954]/30 animate-pulse-glow" />
                  </div>
                </div>

                {/* Indicador de preview activo */}
                {previewing === track.trackId && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-2 left-2 right-2 glass rounded-lg px-2 py-1 flex items-center gap-1.5"
                  >
                    <Equalizer bars={4} className="h-3 flex-shrink-0" />
                    <span className="text-[10px] uppercase tracking-wider text-[#1DB954] font-medium">
                      Preview
                    </span>
                  </motion.div>
                )}

                {/* Número de track */}
                <div className="absolute top-2 right-2 h-7 w-7 rounded-full glass flex items-center justify-center text-[11px] font-mono text-foreground/80">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Info del track */}
              <div className="p-3 bg-card/80 backdrop-blur-sm">
                <h3 className="font-serif-display text-sm md:text-base text-foreground truncate">
                  {track.title}
                </h3>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-[#1DB954]/80 flex items-center gap-1">
                    <Spotify className="h-3 w-3" /> Spotify
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openInSpotify(track.trackId)
                    }}
                    className="text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Abrir en Spotify"
                  >
                    Abrir ↗
                  </button>
                </div>
              </div>

              {/* Reproductor de Spotify visible al hover (preview real) */}
              <AnimatePresence>
                {previewing === track.trackId && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <iframe
                      src={`https://open.spotify.com/embed/track/${track.trackId}?utm_source=generator&theme=0`}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      className="w-full h-[80px] block"
                      title={`Reproductor de ${track.title}`}
                      loading="lazy"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA inferior a Spotify */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 glass rounded-3xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#1DB954]/20 flex items-center justify-center">
              <Spotify className="h-6 w-6 text-[#1DB954]" />
            </div>
            <div>
              <p className="font-serif-display text-lg text-foreground">
                Escucha la discografía completa
              </p>
              <p className="text-sm text-muted-foreground">
                10 tracks · 309 oyentes mensuales · Bakanora 25K+ plays
              </p>
            </div>
          </div>
          <Button
            className="rounded-full bg-[#1DB954] text-black hover:bg-[#1DB954]/90 px-6 font-medium"
            onClick={() => window.open(ARTIST.social.spotify, '_blank')}
          >
            <Spotify className="mr-2 h-4 w-4" /> Abrir Spotify
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Modal reproductor completo de Spotify */}
      <AnimatePresence>
        {activeTrack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveTrack(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full glass hover:bg-white/10"
              onClick={() => setActiveTrack(null)}
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md rounded-3xl overflow-hidden glow-border bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con carátula */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={SPOTIFY_TRACKS.find((t) => t.trackId === activeTrack)?.cover}
                  alt="Carátula"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-xs uppercase tracking-widest text-[#1DB954] mb-1">
                    Reproduciendo en Spotify
                  </p>
                  <h3 className="font-serif-display text-2xl text-foreground">
                    {SPOTIFY_TRACKS.find((t) => t.trackId === activeTrack)?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">Alfred White</p>
                </div>
              </div>
              {/* Reproductor embed de Spotify */}
              <iframe
                src={`https://open.spotify.com/embed/track/${activeTrack}?utm_source=generator&theme=0`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="w-full h-[152px]"
                title="Reproductor de Spotify"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
                Level 1 Seller en Fiverr · +10 años de experiencia · Respuesta en 24h
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

              {/* Bloque de teléfono con dos botones: Llamar + WhatsApp */}
              <div className="p-4 rounded-2xl glass">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-400/30 to-fuchsia-500/30 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Teléfono / WhatsApp
                    </p>
                    <p className="text-sm md:text-base text-foreground">
                      {ARTIST.phone}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  {/* Botón Llamar */}
                  <a
                    href={`tel:${ARTIST.phone.replace(/\s/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Llamar
                  </a>
                  {/* Botón WhatsApp */}
                  <a
                    href={`https://wa.me/${ARTIST.phoneRaw}?text=${encodeURIComponent(
                      'Hola Alfred White, me gustaría información sobre booking para un evento.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#25D366] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#1da851] transition-colors"
                  >
                    <WhatsApp className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Síguenos en redes oficiales
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Instagram, href: ARTIST.social.instagram, label: 'Instagram @alfredwhiteco' },
                  { icon: Youtube, href: ARTIST.social.youtube, label: 'YouTube @alfredwhiteco' },
                  { icon: Spotify, href: ARTIST.social.spotify, label: 'Spotify Alfred White' },
                  { icon: TikTok, href: ARTIST.social.tiktok, label: 'TikTok @alfredwhiteelparcero' },
                  { icon: Facebook, href: ARTIST.social.facebook, label: 'Facebook Alfred White' },
                  { icon: WhatsApp, href: `https://wa.me/${ARTIST.phoneRaw}`, label: 'WhatsApp' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
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
              { icon: TikTok, href: ARTIST.social.tiktok, label: 'TikTok' },
              { icon: Facebook, href: ARTIST.social.facebook, label: 'Facebook' },
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
            © {new Date().getFullYear()} {ARTIST.name}. Paisa de pura sepa. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-2">
            <Mic2 className="h-3 w-3" />
            Reggaetón y trap de todos los estilos · Antioquia, Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   BOTÓN FLOTANTE DE WHATSAPP
   ============================================================ */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${ARTIST.phoneRaw}?text=${encodeURIComponent(
            'Hola Alfred White, me gustaría información sobre booking para un evento.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40"
        >
          {/* Anillo pulsante */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          {/* Icono de WhatsApp */}
          <WhatsApp className="relative h-7 w-7 md:h-8 md:w-8 text-white" />
          {/* Tooltip en hover (desktop) */}
          <span className="hidden md:block absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-lg glass text-xs text-foreground opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            Escríbenos por WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
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
      <FloatingWhatsApp />
    </div>
  )
}
