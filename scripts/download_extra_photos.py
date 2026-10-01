import os
import re
import urllib.request

out_dir = r'c:\Proyectos\pagina alfred white\public\photos'
os.makedirs(out_dir, exist_ok=True)

# List of photos from YouTube and Spotify covers
PHOTOS_LIST = [
    {"id": 1, "caption": "-0 (Video Oficial)", "ratio": "tall", "src": "/photos/yt_aDrrZB0hOfA.jpg"},
    {"id": 2, "caption": "Bakanora (Single)", "ratio": "wide", "src": "/photos/yt_wkoGx0YyZBQ.jpg"},
    {"id": 3, "caption": "Tentacion X Juan Roldan", "ratio": "square", "src": "/photos/yt_0B00IbU6F08.jpg"},
    {"id": 4, "caption": "Soy Nada", "ratio": "tall", "src": "/photos/yt_kC7GvnraUpE.jpg"},
    {"id": 5, "caption": "Lokura X Gabyl", "ratio": "square", "src": "/photos/yt_I5WYssqLI54.jpg"},
    {"id": 6, "caption": "Segundo Intento", "ratio": "wide", "src": "/photos/yt_D78OU0V-pAI.jpg"},
    {"id": 7, "caption": "Trampa", "ratio": "tall", "src": "/photos/yt_vO1w6dhGJ8o.jpg"},
    {"id": 8, "caption": "Para Qué Huir", "ratio": "square", "src": "/photos/yt_PQvgxLGSFGo.jpg"},
    {"id": 9, "caption": "WII (Visualizer)", "ratio": "wide", "src": "/photos/yt_CiPyR-Nzflw.jpg"},
    {"id": 10, "caption": "De Repente", "ratio": "tall", "src": "/photos/yt_t-K94IfG1s4.jpg"},
    {"id": 11, "caption": "Bakanora Remix 2024", "ratio": "wide", "src": "/photos/yt_OslbqrkxATI.jpg"},
    {"id": 12, "caption": "Tentacion (En Vivo / Solo)", "ratio": "square", "src": "/photos/yt_Dyw3nOKoWkg.jpg"},
    {"id": 13, "caption": "Lokura (En Estudio)", "ratio": "tall", "src": "/photos/yt_ZWRPcu2P_Ts.jpg"},
    {"id": 14, "caption": "Viajero del Tiempo", "ratio": "wide", "src": "/photos/yt_77Oafggr4o0.jpg"},
    {"id": 15, "caption": "Me Siento Bien", "ratio": "square", "src": "/photos/yt_w8LO_ABN9S4.jpg"},
    {"id": 16, "caption": "Cover Sensual (Performance)", "ratio": "tall", "src": "/photos/yt_AvhQFvkqGC8.jpg"},
    {"id": 17, "caption": "27052022 (Sesión Acústica)", "ratio": "wide", "src": "/photos/yt_dd-sXwxTCTo.jpg"},
    {"id": 18, "caption": "-0 (Videolyric Edición Especial)", "ratio": "square", "src": "/photos/yt_dm_FcQLz_Vw.jpg"},
]

print("Total photos generated:", len(PHOTOS_LIST))
