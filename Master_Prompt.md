# 🏔️ MASTER PROMPT — Uttarakhand Cinematic Landing Page
### *Devbhoomi. Not a destination. A reckoning.*

---

## 🧠 PROJECT INTENT

Build a **cinematic, dark-themed Uttarakhand travel & trekking website landing page** that feels:

* Raw and honest
* Emotionally immersive
* Slightly intense — like the mountains themselves
* Personal — like a trekker wrote it, not a travel agency

This is **NOT** a generic tourism website.
This is **NOT** a hotel booking UI.

👉 It should feel like:

> A seasoned trekker sitting across from you at a dhaba at 3,800m —
> telling you exactly what the mountains are, and whether you're ready for them.

---

## 🎨 DESIGN SYSTEM

### 🎨 Color Palette

| Role | Color Name | Hex |
| --- | --- | --- |
| 🌑 Background | Deep Forest Night | `#0D1B2A` |
| 🌿 Section 1 — Hidden Gems | Moss Green | `#4A7C59` |
| 🔶 Section 2 — Most Visited | Warm Saffron | `#E07B39` |
| 🔵 Section 3 — Explorer Trails | Ice Blue | `#5B8DB8` |
| 🤍 Primary Text | Cream White | `#F5F0E8` |
| 🔅 Secondary Text | Muted Cream | `#C9C3B5` |
| ✨ Accent / Hover | Golden Sunrise | `#F2C94C` |
| 🔡 Badges / Labels | Light Grey | `#A0A0A0` |

---

### 🔤 TYPOGRAPHY

| Role | Font | Weight | Color |
| --- | --- | --- | --- |
| H1 — Hero Title | `Montserrat` | 800 ExtraBold | `#F2C94C` Golden |
| H2 — Section Titles | `Montserrat` | 700 Bold | `#F5F0E8` Cream |
| H3 — Place Names | `Montserrat` | 700 Bold | `#E8B84B` Soft Gold |
| H4 — Card Labels | `Montserrat` | 600 SemiBold | Section color |
| Body / Descriptions | `Lora` | 400 Regular | `#F5F0E8` Cream |
| Captions / Subtitles | `Lora` | 400 Italic | `#C9C3B5` Muted |
| Quotes | `Lora` | 400 Italic | `#F2C94C` Golden |
| Links | `Montserrat` | 500 | `#5B8DB8` Ice Blue |

**Tone:**
* Minimal. Spacious. Commanding.
* Never decorative for decoration's sake.
* Every word must earn its place on screen.

---

## 🎬 CORE EMOTIONAL FLOW

The landing page should take the user through **5 emotional stages** as they scroll:

```
😶 Calm         →   Hero arrives. Mountains. Silence.
👀 Curious      →   Who is this for? Three paths revealed.
😤 Confronted   →   Mid section. No comfort. No shortcuts.
🙏 Humbled      →   Spiritual section. Mantra. Stillness.
🎒 Decided      →   Final CTA. Go or don't. Your call.
```

---

# 🧩 SECTION STRUCTURE + ANIMATIONS

---

## 🏔️ 1. HERO SECTION — *"The First Step"*

### 🎥 Visual
* Fullscreen high-res Uttarakhand mountain photograph
* Single image — **no slider, no carousel**
* Deep dark gradient overlay: `rgba(13, 27, 42, 0.65)`
* Background slowly zooms: `scale(1.0) → scale(1.08)` over 12 seconds

### Navbar
* Transparent on hero
* Turns solid `#0D1B2A` on scroll (GSAP)
* Logo: `Montserrat 700` — `UTTARAKHAND` in `#F2C94C`
* Links: `Montserrat 500` — `#F5F0E8`
* Links underline on hover with `#F2C94C`

---

### ✨ Hero Animations

#### 1. Main Heading — TextPressure Component

Use the provided `<TextPressure />` component.

```
"You Don't Visit Mountains."
```

Props:
* `weight: true`
* `width: true`
* `italic: subtle`
* `textColor: "#F2C94C"`
* `strokeColor: "#E8B84B"`

> This is the **loudest element** on the page. Give it room to breathe.
> Full width. Massive font. Nothing competing with it.

---

#### 2. Secondary Line — Typewriter Effect

```
"You face them."
```

* Typed.js or custom typewriter
* Cursor blinking in `#F2C94C`
* Font: `Lora 400 Italic`
* Color: `#F5F0E8`
* Delay: starts 1.2s after heading appears

---

#### 3. Hero Subtext — Fade In (Staggered)

```
"Uttarakhand — Devbhoomi. Land of the Gods.
 Three paths. One truth. Choose yours."
```

* Font: `Lora 400` — `#C9C3B5`
* Fades in after typewriter finishes
* Slight slide-up: `translateY(20px) → translateY(0)`

---

#### 4. CTA Button

```
[ Explore Uttarakhand ↓ ]
```

* Background: `transparent`
* Border: `1px solid #F2C94C`
* Text: `Montserrat 600` — `#F2C94C`
* Hover: fills with `#F2C94C`, text turns `#0D1B2A`
* Smooth `0.3s ease` transition

---

#### 5. Floating Particles — Snow / Dust

Simulate snow or mountain dust particles drifting across the hero.

Options:
* `tsParticles` (easiest)
* `Three.js points`
* Native Canvas particles

Behavior:
* Slow upward / diagonal drift
* Random sizes: `1px → 3px`
* Opacity: `0.2 → 0.6` (randomized per particle)
* Color: `#F5F0E8` with occasional `#F2C94C`
* No clustering — spread naturally

> Must feel like real mountain air — not a screensaver.

---

#### 6. Custom Cursor

* Default state → small dot `6px`, color `#F2C94C`
* Hover over links/buttons → expands to `40px` ring, rotates slowly
* Smooth easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
* Optional: `mix-blend-mode: difference` for dark/light contrast

---

## 🧭 2. SCROLL TRANSITION

As the user leaves the hero:

* Hero image fades out with opacity
* Background darkens slightly: `#0D1B2A → #090F16`
* Particles fade out
* Text dissolves cleanly

Use: **GSAP ScrollTrigger**

---

## 🌿 3. SECTION — *"Three Paths Into Uttarakhand"*

Heading:
```
"Three Paths. One State. Completely Different Worlds."
```

Font: `Montserrat 700` — `#F5F0E8`

Sub-heading:
```
"Which one are you?"
```

Font: `Lora 400 Italic` — `#C9C3B5`

---

### Cards (3 total)

Each card represents one section of the website:

---

#### 🌿 Card 1 — Hidden Gems
* Accent color: `#4A7C59` Moss Green
* Icon: 🌿 or custom leaf SVG
* Title: `"Hidden Gems"`
* Font: `Montserrat 700` — `#F5F0E8`
* Description:

```
"The places locals call home and tourists haven't found yet.
 No crowds. No noise. Just real Uttarakhand."
```

* CTA: `"Discover →"` in `#4A7C59`
* Hover: soft green glow `box-shadow: 0 0 24px #4A7C5966`

---

#### 🔶 Card 2 — Most Visited
* Accent color: `#E07B39` Warm Saffron
* Icon: 🛕 or temple SVG
* Title: `"Most Visited"`
* Description:

```
"The places that made Uttarakhand famous.
 Pilgrims. Families. Honeymooners. Everyone comes here."
```

* CTA: `"Explore →"` in `#E07B39`
* Hover: saffron glow

---

#### 🔵 Card 3 — Explorer Trails
* Accent color: `#5B8DB8` Ice Blue
* Icon: 🧗 or boot SVG
* Title: `"Explorer Trails"`
* Description:

```
"Not for everyone. Altitude. Cold. Heavy backpacks.
 If you know, you know."
```

* CTA: `"Trek In →"` in `#5B8DB8`
* Hover: ice blue glow

---

### Card Animations
* Staggered reveal on scroll: `0.15s` delay between cards
* Entrance: `translateY(40px) + opacity 0 → 1`
* Hover: `scale(1.03)` + glow
* Use: GSAP ScrollTrigger or AOS.js

---

## 🧗 4. MID CINEMATIC SECTION — *"The Truth"*

> This is the **emotional core** of the page. Do not rush it.

### Layout
* Fullscreen pinned section
* Background: dark mountain image with `rgba(13, 27, 42, 0.80)` overlay
* Slight parallax on background image

Use: **GSAP ScrollTrigger `pin: true`**

---

### Text Reveal — One Line at a Time

As user scrolls through the pinned section, lines appear one by one:

```
No comfort.
```
```
No shortcuts.
```
```
No guarantee.
```

Then a pause. Then:

```
"Still want to go?"
```

---

### Animation per line:
* `opacity: 0 → 1`
* `translateY(30px) → translateY(0)`
* `letter-spacing` slightly compresses on entrance
* Font: `Montserrat 800` — `#F5F0E8`
* Final question: `Montserrat 800` — `#F2C94C` (golden)

---

## 🕉️ 5. SPIRITUAL SECTION — *"Devbhoomi"*

> Uttarakhand is not just geography. It is sacred ground.
> This section acknowledges that.

### Rotating Mantra

Curved SVG text path, rotating infinitely:

```
ॐ Om Mani Padme Hum ॐ Om Mani Padme Hum
```

```css
animation: rotate 20s linear infinite;
```

* Color: `#F2C94C`
* Slight glow: `text-shadow: 0 0 12px #F2C94C66`
* Opacity: `0.55` — subtle, never distracting

---

### Center Element
* A still mountain silhouette SVG or minimal icon
* Color: `#F5F0E8` at `opacity: 0.15`

---

### Accompanying Quote — Fade In on Scroll

```
"পাহাড় তোমাকে ভাঙবে।
 তারপর নতুন করে গড়বে।"

"The mountain will break you.
 Then rebuild you."
```

* Bengali line: `Lora 400 Italic` — `#F2C94C`
* English translation: `Lora 400` — `#C9C3B5`
* Fade in slowly — `2s ease`

---

## 🗺️ 6. MAP SECTION — *"Where These Places Actually Are"*

* **Leaflet.js** interactive map
* Dark tile theme (use `CartoDB Dark Matter` tiles)
* Map centered on Uttarakhand

### Markers — Color Coded by Category

| Category | Marker Color |
| --- | --- |
| Hidden Gems | `#4A7C59` Moss Green |
| Most Visited | `#E07B39` Warm Saffron |
| Explorer Trails | `#5B8DB8` Ice Blue |

### On Marker Hover:
* Popup with: Place name + category badge + short one-line description
* Popup background: `#0D1B2A` — text `#F5F0E8`
* Optional: weather API temperature tag

---

## 💸 7. BUDGET SECTION — *"What It Actually Costs"*

Heading:
```
"No Surprises. Just Numbers."
```

### Animated Count-Up

| Category | Budget Range |
| --- | --- |
| Hidden Gems | ₹10,000 – ₹28,000 |
| Most Visited | ₹12,000 – ₹45,000 |
| Explorer Trails | ₹14,000 – ₹1,00,000+ |

* Numbers count up when section enters viewport
* Font: `Montserrat 800` — `#F2C94C`
* Label: `Lora 400` — `#C9C3B5`
* Per person, mid-range estimate

---

## 🤨 8. ROAST SECTION — *"Are You Actually Ready?"*

> Honest. Slightly roasting. Not cruel — just real.
> The mountains don't care about your Instagram.

### Layout
* Semi-pinned or full scroll
* Background: `#090F16` near black

### Text Reveals (one by one, scroll-triggered):

```
"You've been planning this trip for 3 years."
```
```
"You have 14 unread Trek blogs saved."
```
```
"You bought trekking poles you've never used."
```

Then:

```
"The mountain doesn't care.
 It's still there. Waiting.
 The only question is — are you?"
```

* Main text: `Montserrat 700` — `#F5F0E8`
* Punchline: `Montserrat 800` — `#F2C94C`
* Optional Bengali roast line:

```
"কমফোর্ট খুঁজতে এলে ভুল জায়গায় এসেছিস।"
"If you came looking for comfort, wrong place."
```

---

## 🌑 9. CLOSING SECTION — *"The Call"*

> Minimal. Quiet. The page takes a breath.

* Background fades fully to `#060D14` — almost black
* No images. No particles. Just text.

### Final Text — Slow Fade In

```
"Uttarakhand doesn't need your bucket list.
 It needs your presence."
```

Font: `Lora 400 Italic` — `#F5F0E8`
Fade duration: `2.5s ease`

---

### Final CTA

```
[ Begin Your Journey ]
```

* Large, centered button
* Border: `1px solid #F2C94C`
* Text: `Montserrat 700` — `#F2C94C`
* Hover: full `#F2C94C` fill, text `#0D1B2A`

---

### Closing Mantra Line

```
"पाहाड़ देखने नहीं — महसूस करने जाना।"
"Don't go to see the mountains. Go to feel them."
```

Font: `Lora 400 Italic` — `#C9C3B5` at `opacity: 0.6`

---

### Footer

* Minimal — single line
* `Montserrat 400` — `#A0A0A0`

```
© 2026 Uttarakhand — Devbhoomi. Built by a trekker, for trekkers.
```

---

# 🎯 ANIMATION RULES — NON-NEGOTIABLE

| Rule | Detail |
| --- | --- |
| ❌ No fast flashes | Minimum `0.6s` for any transition |
| ❌ No bounce effects | No `elastic` or `bounce` easing — mountains don't bounce |
| ✅ Slow is intentional | Pace = atmosphere |
| ✅ Scroll = story | Every scroll action must reveal something meaningful |
| ✅ 60 FPS minimum | Optimize all animations — no jank |
| ✅ Mobile smooth | Touch scroll must feel as cinematic as mouse scroll |

**Easing standard across the project:**
```css
cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

---

# ⚙️ TECH STACK

| Tool | Purpose |
| --- | --- |
| `Next.js` (App Router) | Framework |
| `TypeScript` | Type safety |
| `TailwindCSS` | Styling |
| `GSAP + ScrollTrigger` | All scroll animations |
| `Typed.js` | Typewriter effect |
| `tsParticles` | Snow / dust particles |
| `Leaflet.js` | Interactive map |
| `Three.js` | Optional — advanced particles |
| `Google Fonts` | Montserrat + Lora |

---

# 🧠 UX PRINCIPLES

```
Scroll  =  Story unfolding
Animation  =  Emotional punctuation
Text  =  The trekker speaking to you
Silence  =  As important as sound
```

---

# 💬 FINAL DESIGN PHILOSOPHY

This site should **NOT** feel like:
* ❌ A travel agency brochure
* ❌ An Instagram UI clone
* ❌ A generic hill station website
* ❌ Something made by someone who googled "Uttarakhand"

It should feel like:
* ✅ A trek — step by step, breath by breath
* ✅ A mindset shift — you arrive one person, you leave another
* ✅ A conversation — honest, raw, slightly uncomfortable, completely real

---

> *"पाहाड़ दिखाने के लिए नहीं — समझाने के लिए बनाया।"*
>
> *"Not built to show the mountains. Built to make you understand them."*

---

*Prompt Version: 2.0 — Uttarakhand Edition*
*Design System: Himalayan Earth Palette + Mountain Brand Typography*
*Sections: 9 | Animations: 12+ | Emotion: Immeasurable*
