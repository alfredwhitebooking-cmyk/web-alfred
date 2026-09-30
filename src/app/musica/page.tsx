import { redirect } from 'next/navigation'

// Perfil oficial de Spotify de Alfred White
const SPOTIFY_ARTIST_URL = 'https://open.spotify.com/artist/51GuS1Zdn16Rr5h8JL0v3x'

export default function MusicaRedirect() {
  redirect(SPOTIFY_ARTIST_URL)
}
