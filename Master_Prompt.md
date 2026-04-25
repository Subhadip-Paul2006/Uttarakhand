# 🏔️ MASTER PROMPT — Trekker Cinematic Landing Page (Next.js + GSAP)

---

## 🧠 PROJECT INTENT

Build a **cinematic, dark-themed trekking website landing page** that feels:

* Raw
* Real
* Slightly intense
* Emotionally immersive

This is NOT a generic travel site.

👉 It should feel like:

> A trekker talking directly to you — honest, raw, slightly roasting, but real.

---

## 🎨 DESIGN SYSTEM

### 🎨 Color Palette

| Role               | Color Name        | Hex       |
| ------------------ | ----------------- | --------- |
| 🌑 Background      | Deep Forest Night | `#0D1B2A` |
| 🌿 Hidden Gems     | Moss Green        | `#4A7C59` |
| 🔶 Most Visited    | Warm Saffron      | `#E07B39` |
| 🔵 Explorer Trails | Ice Blue          | `#5B8DB8` |
| 🤍 Text            | Cream White       | `#F5F0E8` |
| ✨ Accent           | Golden Sunrise    | `#F2C94C` |

---

## 🔤 TYPOGRAPHY

* Headings → **Montserrat (Bold / ExtraBold)**
* Body → **Lora (Readable, warm, journal-like)**

Tone:

* Minimal
* Spacious
* Strong hierarchy

---

## 🎬 CORE EXPERIENCE FLOW

Landing page should feel like:

1. Calm → Hero
2. Curious → Scroll
3. Confronting → Mid sections
4. Reflective → Ending

---

# 🧩 SECTION STRUCTURE + ANIMATION

---

## 🏔️ 1. HERO SECTION (CINEMATIC)

### 🎥 Visual

* Fullscreen trekking image (single, not slider)
* Subtle zoom (scale 1 → 1.08)
* Dark gradient overlay

### ✨ Animations

#### 1. TextPressure Heading (MAIN)

Use provided `<TextPressure />` component

Text:
👉 `"You Don’t Visit Mountains"`

Props:

* weight: true
* width: true
* italic: subtle
* alpha: optional
* textColor: `#F5F0E8`

---

#### 2. Typed Text (Secondary line)

```text
"You face them."
```

* Typewriter effect
* Cursor blinking

---

#### 3. Floating Particles (IMPORTANT)

* Snow / dust particles (subtle, slow)
* Use:

  * Three.js OR
  * Canvas particles OR
  * tsParticles

👉 Behavior:

* Slow drift
* Slight randomness
* Depth illusion

---

#### 4. Cursor (Signature Interaction)

Custom cursor:

* Default → small dot
* Hover → rotating target circle
* Smooth easing

👉 Use:

* transform + rotation
* mix-blend-mode (optional)

---

## 🧭 2. SCROLL TRANSITION

* Hero fades out
* Background darkens slightly
* Text dissolves

Use:
👉 GSAP ScrollTrigger

---

## 🌿 3. SECTION — "Choose Your Path"

Cards:

* Hidden Gems
* Most Visited
* Explorer Trails

### Animation:

* Stagger reveal
* Hover glow + scale

---

## 🧗 4. MID CINEMATIC SECTION (IMPORTANT)

### 🎬 Pinned Scroll Section

👉 THIS IS YOUR MAIN EXPERIENCE BLOCK

Use:
👉 GSAP ScrollTrigger + pin

---

### Animation Flow:

While scrolling:

Text appears one by one:

```
No comfort.
No shortcuts.
No guarantee.
```

Then:

```
Still want to go?
```

---

### Background:

* Slight parallax mountain image
* Dark overlay

---

## 🕉️ 5. SPIRITUAL LOOP ANIMATION (UNIQUE)

### Feature:

Curved rotating mantra:

👉 "Om Mani Padme Hum"

---

### Implementation:

* Circular SVG text path
* Rotate slowly (infinite loop)

```css
animation: rotate 20s linear infinite;
```

---

### Style:

* Color: `#F2C94C`
* Slight glow
* Low opacity

👉 Should feel:
Subtle, not distracting

---

## 🗺️ 6. MAP PREVIEW SECTION

* Leaflet.js map
* Dark styled map
* Markers = colored by category

On hover:

* Small popup
* Temperature (API ready)

---

## 🧠 7. TEXT EXPERIENCE SECTION

Use:

### ✨ Scroll Float Animation

* Text rises slowly
* Opacity fade

---

### ✨ Bengali + Raw Tone (Content Direction)

Example tone:

> *কমফোর্ট খুঁজতে এলে ভুল জায়গায় এসেছিস।*

---

## 💸 8. BUDGET SECTION

Animation:

* Count-up numbers
* Icon pop

---

## 🤨 9. ROAST SECTION

Pinned or semi-pinned

Text reveals:

👉 Direct
👉 Slightly roasting
👉 Real

---

## 🌑 10. FINAL SECTION (CLOSING)

* Background fades darker
* Minimal text

Final line:

👉 Slow fade-in

---

# 🎯 ANIMATION RULES (STRICT)

* No fast animations
* No overuse
* Focus on storytelling
* 60 FPS smooth

---

# ⚙️ TECH STACK

* Next.js (App Router)
* TailwindCSS
* TypeScript
* GSAP + ScrollTrigger
* Three.js (optional particles)
* Leaflet.js (map)

---

# 🧠 UX PRINCIPLES

* Scroll = story
* Animation = meaning
* Text = impact

---

# 💬 FINAL DESIGN PHILOSOPHY

This site should NOT feel like:
❌ Travel blog
❌ Instagram UI

It should feel like:

👉 A trek
👉 A mindset shift
👉 A conversation

---

> *পাহাড় দেখানোর জন্য না — বোঝানোর জন্য বানানো।*
