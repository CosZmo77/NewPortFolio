# Optimized local portfolio assets

Run `python scripts/optimize-assets.py` to regenerate. Originals remain untouched.

Use `home.webp` for desktop hero, `home-portrait.webp` for a tall mobile hero via a media source (center crop), and `home-mobile.webp` for wide mobile images. All other `-mobile` variants preserve the source aspect ratio. Use lazy loading below the fold and explicit image dimensions. Project screenshots retain quality 90 at 1440px; use the 720px variants in smaller cards. Character PNG replacements preserve native dimensions and use lossless WebP. GIF animation replacements are sized to at most 240px wide (suitable for icons displayed up to 120px at 2x), at quality 82 with original frame timings. The small silksong animation stays lossless at native size. Logos preserve their original full transparent canvas and aspect ratio at 640px wide.

| Original | Output | Dimensions | Original bytes | Output bytes | Saved |
| --- | --- | --- | ---: | ---: | ---: |
| `/assets/Images/Backgrounds/Home.png` | `/assets/optimized/home.webp` | 2400×1095 | 11,383,639 | 145,848 | 98.7% |
| `/assets/Images/Backgrounds/Home.png` | `/assets/optimized/home-mobile.webp` | 960×438 | 11,383,639 | 46,428 | 99.6% |
| `/assets/Images/Backgrounds/Home.png` | `/assets/optimized/home-portrait.webp` | 960×1440 | 11,383,639 | 78,510 | 99.3% |
| `/assets/Images/Backgrounds/HK -  (1).png` | `/assets/optimized/bg-01.webp` | 1920×1080 | 1,400,342 | 66,660 | 95.2% |
| `/assets/Images/Backgrounds/HK -  (1).png` | `/assets/optimized/bg-01-mobile.webp` | 960×540 | 1,400,342 | 24,912 | 98.2% |
| `/assets/Images/Backgrounds/HK -  (2).png` | `/assets/optimized/bg-02.webp` | 1920×1080 | 1,146,781 | 48,188 | 95.8% |
| `/assets/Images/Backgrounds/HK -  (2).png` | `/assets/optimized/bg-02-mobile.webp` | 960×540 | 1,146,781 | 18,450 | 98.4% |
| `/assets/Images/Backgrounds/HK -  (3).png` | `/assets/optimized/bg-03.webp` | 1920×1080 | 1,177,764 | 48,170 | 95.9% |
| `/assets/Images/Backgrounds/HK -  (3).png` | `/assets/optimized/bg-03-mobile.webp` | 960×540 | 1,177,764 | 18,068 | 98.5% |
| `/assets/Images/Backgrounds/HK -  (4).png` | `/assets/optimized/bg-04.webp` | 1920×1080 | 1,610,772 | 90,804 | 94.4% |
| `/assets/Images/Backgrounds/HK -  (4).png` | `/assets/optimized/bg-04-mobile.webp` | 960×540 | 1,610,772 | 32,576 | 98.0% |
| `/assets/Images/Backgrounds/HK -  (5).png` | `/assets/optimized/bg-05.webp` | 1920×1080 | 1,459,210 | 57,960 | 96.0% |
| `/assets/Images/Backgrounds/HK -  (5).png` | `/assets/optimized/bg-05-mobile.webp` | 960×540 | 1,459,210 | 21,772 | 98.5% |
| `/assets/Images/Backgrounds/HK -  (6).png` | `/assets/optimized/bg-06.webp` | 1920×1080 | 1,819,754 | 44,498 | 97.6% |
| `/assets/Images/Backgrounds/HK -  (6).png` | `/assets/optimized/bg-06-mobile.webp` | 960×540 | 1,819,754 | 17,124 | 99.1% |
| `/assets/Images/Backgrounds/HK -  (7).png` | `/assets/optimized/bg-07.webp` | 1920×1080 | 1,174,707 | 36,364 | 96.9% |
| `/assets/Images/Backgrounds/HK -  (7).png` | `/assets/optimized/bg-07-mobile.webp` | 960×540 | 1,174,707 | 14,010 | 98.8% |
| `/assets/Images/Backgrounds/HK -  (8).png` | `/assets/optimized/bg-08.webp` | 1856×1080 | 1,217,772 | 67,220 | 94.5% |
| `/assets/Images/Backgrounds/HK -  (8).png` | `/assets/optimized/bg-08-mobile.webp` | 960×559 | 1,217,772 | 26,254 | 97.8% |
| `/assets/Images/Backgrounds/HK -  (9).png` | `/assets/optimized/bg-09.webp` | 1920×1080 | 1,017,526 | 37,026 | 96.4% |
| `/assets/Images/Backgrounds/HK -  (9).png` | `/assets/optimized/bg-09-mobile.webp` | 960×540 | 1,017,526 | 13,598 | 98.7% |
| `/assets/Images/Backgrounds/HK -  (10).png` | `/assets/optimized/bg-10.webp` | 1920×1080 | 1,220,163 | 52,694 | 95.7% |
| `/assets/Images/Backgrounds/HK -  (10).png` | `/assets/optimized/bg-10-mobile.webp` | 960×540 | 1,220,163 | 20,716 | 98.3% |
| `/assets/Images/Backgrounds/HK -  (11).png` | `/assets/optimized/bg-11.webp` | 1920×1080 | 564,337 | 24,000 | 95.7% |
| `/assets/Images/Backgrounds/HK -  (11).png` | `/assets/optimized/bg-11-mobile.webp` | 960×540 | 564,337 | 8,876 | 98.4% |
| `/assets/Images/Backgrounds/HK -  (12).png` | `/assets/optimized/bg-12.webp` | 1920×1080 | 575,953 | 23,614 | 95.9% |
| `/assets/Images/Backgrounds/HK -  (12).png` | `/assets/optimized/bg-12-mobile.webp` | 960×540 | 575,953 | 8,318 | 98.6% |
| `/assets/Images/Backgrounds/HK -  (13).png` | `/assets/optimized/bg-13.webp` | 1920×1080 | 927,718 | 40,866 | 95.6% |
| `/assets/Images/Backgrounds/HK -  (13).png` | `/assets/optimized/bg-13-mobile.webp` | 960×540 | 927,718 | 15,130 | 98.4% |
| `/assets/Images/Backgrounds/HK -  (14).png` | `/assets/optimized/bg-14.webp` | 1920×1080 | 1,463,081 | 93,424 | 93.6% |
| `/assets/Images/Backgrounds/HK -  (14).png` | `/assets/optimized/bg-14-mobile.webp` | 960×540 | 1,463,081 | 33,866 | 97.7% |
| `/assets/Images/Backgrounds/HK -  (15).png` | `/assets/optimized/bg-15.webp` | 1920×1080 | 743,752 | 31,290 | 95.8% |
| `/assets/Images/Backgrounds/HK -  (15).png` | `/assets/optimized/bg-15-mobile.webp` | 960×540 | 743,752 | 11,508 | 98.5% |
| `/assets/Images/Backgrounds/HK -  (16).png` | `/assets/optimized/bg-16.webp` | 1920×1080 | 1,602,715 | 74,236 | 95.4% |
| `/assets/Images/Backgrounds/HK -  (16).png` | `/assets/optimized/bg-16-mobile.webp` | 960×540 | 1,602,715 | 27,432 | 98.3% |
| `/assets/Images/Backgrounds/HK -  (17).jpg` | `/assets/optimized/bg-17.webp` | 1920×1080 | 1,123,160 | 84,180 | 92.5% |
| `/assets/Images/Backgrounds/HK -  (17).jpg` | `/assets/optimized/bg-17-mobile.webp` | 960×540 | 1,123,160 | 29,574 | 97.4% |
| `/assets/Images/Cohorts.png` | `/assets/optimized/cohorts.webp` | 1440×802 | 825,271 | 52,654 | 93.6% |
| `/assets/Images/Cohorts.png` | `/assets/optimized/cohorts-mobile.webp` | 720×401 | 825,271 | 19,674 | 97.6% |
| `/assets/Images/Inkworldwide.png` | `/assets/optimized/inkworldwide.webp` | 1440×788 | 1,212,481 | 114,614 | 90.5% |
| `/assets/Images/Inkworldwide.png` | `/assets/optimized/inkworldwide-mobile.webp` | 720×394 | 1,212,481 | 32,362 | 97.3% |
| `/assets/Images/ShifaFoundation.png` | `/assets/optimized/shifa-foundation.webp` | 1440×778 | 276,717 | 57,610 | 79.2% |
| `/assets/Images/ShifaFoundation.png` | `/assets/optimized/shifa-foundation-mobile.webp` | 720×389 | 276,717 | 21,652 | 92.2% |
| `/assets/Images/Medicalshala.png` | `/assets/optimized/medicalshala.webp` | 1440×931 | 308,519 | 64,990 | 78.9% |
| `/assets/Images/Medicalshala.png` | `/assets/optimized/medicalshala-mobile.webp` | 720×465 | 308,519 | 23,640 | 92.3% |
| `/assets/Images/SwiftCare.png` | `/assets/optimized/swiftcare.webp` | 1440×802 | 481,421 | 65,286 | 86.4% |
| `/assets/Images/SwiftCare.png` | `/assets/optimized/swiftcare-mobile.webp` | 720×401 | 481,421 | 23,816 | 95.1% |
| `/assets/Images/JobPortal.png` | `/assets/optimized/job-portal.webp` | 1440×701 | 494,608 | 49,484 | 90.0% |
| `/assets/Images/JobPortal.png` | `/assets/optimized/job-portal-mobile.webp` | 720×351 | 494,608 | 19,558 | 96.0% |
| `/assets/Images/Self.jpeg` | `/assets/optimized/portrait.webp` | 800×1067 | 183,860 | 153,092 | 16.7% |
| `/assets/Images/Self.jpeg` | `/assets/optimized/portrait-mobile.webp` | 480×640 | 183,860 | 81,002 | 55.9% |
| `/assets/Images/LogoWhite.png` | `/assets/optimized/logo-white.webp` | 640×360 | 482,879 | 14,006 | 97.1% |
| `/assets/Images/LogoBlack.png` | `/assets/optimized/logo-black.webp` | 640×360 | 443,927 | 13,880 | 96.9% |
| `/assets/Images/front.png` | `/assets/optimized/front.webp` | 1000×301 | 150,679 | 23,828 | 84.2% |
| `/assets/Images/Characters/Character (1).png` | `/assets/optimized/character-01.webp` | 123×220 | 27,983 | 16,394 | 41.4% |
| `/assets/Images/Characters/Character (2).png` | `/assets/optimized/character-02.webp` | 129×263 | 26,926 | 16,610 | 38.3% |
| `/assets/Images/Characters/Character (3).png` | `/assets/optimized/character-03.webp` | 118×157 | 16,334 | 10,374 | 36.5% |
| `/assets/Images/Characters/Character (4).png` | `/assets/optimized/character-04.webp` | 140×131 | 15,126 | 10,298 | 31.9% |
| `/assets/Images/Characters/Character (5).png` | `/assets/optimized/character-05.webp` | 153×205 | 19,611 | 11,706 | 40.3% |
| `/assets/Images/Characters/Character (6).png` | `/assets/optimized/character-06.webp` | 133×150 | 14,960 | 8,444 | 43.6% |
| `/assets/Images/Characters/Character (7).png` | `/assets/optimized/character-07.webp` | 353×358 | 36,994 | 20,626 | 44.2% |
| `/assets/Images/Characters/Character (8).png` | `/assets/optimized/character-08.webp` | 204×212 | 32,753 | 19,018 | 41.9% |
| `/assets/Images/Characters/Character (9).png` | `/assets/optimized/character-09.webp` | 133×197 | 16,633 | 10,278 | 38.2% |
| `/assets/Images/Characters/Character (10).png` | `/assets/optimized/character-10.webp` | 134×134 | 15,777 | 9,984 | 36.7% |
| `/assets/Images/Characters/Character (11).png` | `/assets/optimized/character-11.webp` | 120×109 | 15,344 | 10,452 | 31.9% |
| `/assets/Images/Characters/Character (12).png` | `/assets/optimized/character-12.webp` | 451×313 | 114,490 | 65,382 | 42.9% |
| `/assets/Images/Characters/Character (13).png` | `/assets/optimized/character-13.webp` | 87×180 | 14,465 | 8,202 | 43.3% |
| `/assets/Images/Characters/bellring.gif` | `/assets/optimized/bellring.webp` | 240×252 | 50,062 | 11,772 | 76.5% |
| `/assets/Images/Characters/ghost.gif` | `/assets/optimized/ghost.webp` | 240×172 | 607,955 | 152,624 | 74.9% |
| `/assets/Images/Characters/grub.gif` | `/assets/optimized/grub.webp` | 240×240 | 355,898 | 145,866 | 59.0% |
| `/assets/Images/Characters/hornet.gif` | `/assets/optimized/hornet.webp` | 240×240 | 298,701 | 111,438 | 62.7% |
| `/assets/Images/Characters/silksongflew.gif` | `/assets/optimized/silksongflew.webp` | 200×200 | 30,765 | 23,800 | 22.6% |
