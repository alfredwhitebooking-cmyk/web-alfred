"""
Genera un código QR de alta calidad que apunta a la ruta /musica del brochure
de Alfred White, la cual redirige automáticamente a su perfil de Spotify.

El QR se guarda como PNG en /home/z/my-project/download/
"""
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# URL destino (la ruta /musica del brochure que redirige a Spotify)
# Usamos la URL de producción con el bot id
BOT_ID = "preview-chat-bbca752d-2028-48f3-ae00-1dccb340ea8a"
DESTINY_URL = f"https://{BOT_ID}.space-z.ai/musica"

# También generamos un QR directo a Spotify como alternativa
SPOTIFY_URL = "https://open.spotify.com/artist/51GuS1Zdn16Rr5h8JL0v3x"


def generate_qr(url: str, filename: str, label: str) -> None:
    """Genera un QR de alta calidad con diseño personalizado."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,  # Alta corrección de errores (30%)
        box_size=12,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # Crear imagen con colores personalizados (verde Spotify + negro)
    img = qr.make_image(fill_color="black", back_color="white")

    # Convertir a PIL Image para redimensionar
    img_pil = img.get_image()
    # Redimensionar a alta calidad usando LANCZOS
    from PIL import Image
    img_pil = img_pil.resize((1200, 1200), Image.LANCZOS)

    # Guardar
    output_path = f"/home/z/my-project/download/{filename}"
    img_pil.save(output_path, format="PNG", quality=95)
    print(f"✓ QR generado: {output_path}")
    print(f"  URL: {url}")
    print(f"  Tamaño: 1200x1200 px")
    print()


def main() -> None:
    print("Generando códigos QR para Alfred White...\n")

    # QR 1: Apunta a la ruta /musica del brochure (redirige a Spotify)
    generate_qr(
        url=DESTINY_URL,
        filename="qr-alfred-white-musica.png",
        label="QR hacia /musica (redirige a Spotify)",
    )

    # QR 2: Apunta directo a Spotify (alternativa más directa)
    generate_qr(
        url=SPOTIFY_URL,
        filename="qr-alfred-white-spotify-directo.png",
        label="QR directo a Spotify",
    )

    print("=" * 60)
    print("RESUMEN DE ENLACES PARA EL QR:")
    print("=" * 60)
    print(f"\n📌 OPCIÓN 1 (RECOMENDADA - URL CORTA):")
    print(f"   {DESTINY_URL}")
    print(f"   → Redirige automáticamente a Spotify")
    print(f"   → Más fácil de escanear (URL corta)")
    print(f"   → QR guardado en: download/qr-alfred-white-musica.png")
    print(f"\n📌 OPCIÓN 2 (DIRECTA A SPOTIFY):")
    print(f"   {SPOTIFY_URL}")
    print(f"   → Va directo a Spotify sin pasar por el brochure")
    print(f"   → URL más larga pero más directa")
    print(f"   → QR guardado en: download/qr-alfred-white-spotify-directo.png")
    print()


if __name__ == "__main__":
    main()
