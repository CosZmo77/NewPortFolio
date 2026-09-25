"""Build local WebP derivatives without changing the original portfolio artwork.

Run with Python + Pillow: python scripts/optimize-assets.py
"""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageOps, ImageSequence


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/assets/Images"
OUTPUT = ROOT / "public/assets/optimized"
OUTPUT.mkdir(parents=True, exist_ok=True)
records: list[dict] = []


def web_path(path: Path) -> str:
    return "/" + path.relative_to(ROOT / "public").as_posix()


def convert(
    relative: str,
    filename: str,
    width: int | None = None,
    quality: int = 85,
    lossless: bool = False,
    crop: tuple[int, int] | None = None,
) -> dict:
    source = SOURCE / relative
    output = OUTPUT / filename
    with Image.open(source) as original:
        original_size = original.size
        image = ImageOps.exif_transpose(original)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        if crop:
            image = ImageOps.fit(image, crop, Image.Resampling.LANCZOS)
        elif width and image.width > width:
            image = image.resize(
                (width, round(image.height * width / image.width)), Image.Resampling.LANCZOS
            )
        image.save(output, "WEBP", quality=quality, lossless=lossless, method=6)
        record = {
            "source": web_path(source),
            "output": web_path(output),
            "sourceWidth": original_size[0],
            "sourceHeight": original_size[1],
            "width": image.width,
            "height": image.height,
            "sourceBytes": source.stat().st_size,
            "bytes": output.stat().st_size,
            "lossless": lossless,
            "quality": None if lossless else quality,
            "crop": "center" if crop else None,
        }
        records.append(record)
        return record


def convert_animation(filename: str) -> None:
    source = SOURCE / "Characters" / filename
    output = OUTPUT / (Path(filename).stem + ".webp")
    with Image.open(source) as original:
        frames = []
        durations = []
        for frame in ImageSequence.Iterator(original):
            image = frame.convert("RGBA")
            if image.width > 240:
                image = image.resize((240, round(image.height * 240 / image.width)), Image.Resampling.LANCZOS)
            frames.append(image)
            durations.append(frame.info.get("duration", 100))
        frames[0].save(
            output,
            "WEBP",
            save_all=True,
            append_images=frames[1:],
            duration=durations,
            loop=original.info.get("loop", 0),
            lossless=original.width <= 240,
            quality=80 if original.width <= 240 else 82,
            method=4,
        )
        records.append({
            "source": web_path(source),
            "output": web_path(output),
            "sourceWidth": original.width,
            "sourceHeight": original.height,
            "width": frames[0].width,
            "height": frames[0].height,
            "sourceBytes": source.stat().st_size,
            "bytes": output.stat().st_size,
            "lossless": original.width <= 240,
            "quality": None if original.width <= 240 else 82,
            "animated": True,
            "frames": len(frames),
            "durationMs": sum(durations),
            "recommended": output.stat().st_size < source.stat().st_size,
        })


convert("Backgrounds/Home.png", "home.webp", width=2400, quality=85)
convert("Backgrounds/Home.png", "home-mobile.webp", width=960, quality=85)
# A sharp center crop for tall phone hero containers, matching object-position:center.
convert("Backgrounds/Home.png", "home-portrait.webp", quality=85, crop=(960, 1440))

for number in range(1, 18):
    extension = "jpg" if number == 17 else "png"
    source = f"Backgrounds/HK -  ({number}).{extension}"
    convert(source, f"bg-{number:02}.webp", quality=85)
    convert(source, f"bg-{number:02}-mobile.webp", width=960, quality=83)

projects = {
    "Cohorts.png": "cohorts",
    "Inkworldwide.png": "inkworldwide",
    "ShifaFoundation.png": "shifa-foundation",
    "Medicalshala.png": "medicalshala",
    "SwiftCare.png": "swiftcare",
    "JobPortal.png": "job-portal",
}
for source, stem in projects.items():
    convert(source, stem + ".webp", width=1440, quality=90)
    convert(source, stem + "-mobile.webp", width=720, quality=88)

convert("Self.jpeg", "portrait.webp", width=800, quality=82)
convert("Self.jpeg", "portrait-mobile.webp", width=480, quality=86)
convert("LogoWhite.png", "logo-white.webp", width=640, lossless=True)
convert("LogoBlack.png", "logo-black.webp", width=640, lossless=True)
convert("front.png", "front.webp", width=1000, lossless=True)
for number in range(1, 14):
    convert(f"Characters/Character ({number}).png", f"character-{number:02}.webp", lossless=True)
for filename in ("bellring.gif", "ghost.gif", "grub.gif", "hornet.gif", "silksongflew.gif"):
    convert_animation(filename)

manifest = {
    "description": "Original imagery retained. WebP derivatives generated with Pillow. Byte counts are exact.",
    "records": records,
}
(OUTPUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

lines = [
    "# Optimized local portfolio assets",
    "",
    "Run `python scripts/optimize-assets.py` to regenerate. Originals remain untouched.",
    "",
    "Use `home.webp` for desktop hero, `home-portrait.webp` for a tall mobile hero via a media source (center crop), and `home-mobile.webp` for wide mobile images. All other `-mobile` variants preserve the source aspect ratio. Use lazy loading below the fold and explicit image dimensions. Project screenshots retain quality 90 at 1440px; use the 720px variants in smaller cards. Character PNG replacements preserve native dimensions and use lossless WebP. GIF animation replacements are sized to at most 240px wide (suitable for icons displayed up to 120px at 2x), at quality 82 with original frame timings. The small silksong animation stays lossless at native size. Logos preserve their original full transparent canvas and aspect ratio at 640px wide.",
    "",
    "| Original | Output | Dimensions | Original bytes | Output bytes | Saved |",
    "| --- | --- | --- | ---: | ---: | ---: |",
]
for record in records:
    saved = (1 - record["bytes"] / record["sourceBytes"]) * 100
    lines.append(
        f'| `{record["source"]}` | `{record["output"]}` | {record["width"]}×{record["height"]} '
        f'| {record["sourceBytes"]:,} | {record["bytes"]:,} | {saved:.1f}% |'
    )
(OUTPUT / "README.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"Generated {len(records)} derivatives, {sum(record['bytes'] for record in records):,} bytes total.")
for record in records:
    print(f"{record['output']}: {record['sourceBytes']:,} -> {record['bytes']:,} bytes ({record['width']}x{record['height']})")
