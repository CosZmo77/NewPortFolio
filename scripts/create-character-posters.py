"""Generate tiny first-frame posters from the existing optimized character sprites."""
from pathlib import Path
from PIL import Image

assets = Path(__file__).resolve().parents[1] / "public/assets/optimized"
for name in ("grub", "ghost", "hornet", "silksongflew"):
    with Image.open(assets / f"{name}.webp") as sprite:
        sprite.seek(0)
        output = assets / f"{name}-still.webp"
        sprite.convert("RGBA").save(output, "WEBP", lossless=True, method=6)
        print(f"{output.name}: {output.stat().st_size:,} bytes")
