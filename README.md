# 🌙 Karwa Chauth Surprise for Amrita ❤️

A luxurious, emotionally romantic, personalized digital Karwa Chauth surprise website crafted especially for **Amrita** by **Ankit**.

---

## ✨ Features & Sections

1. **Magical Opening Curtain:**
   - Romantic full-screen night sky with a glowing full moon and starry dust.
   - Touching welcome text: *"Tonight is not just about the moon in the sky… it's about the moon who makes my world brighter."*
   - Interactive *"Open Your Surprise ✨"* button with a smooth cinematic reveal transition and floating rose petals.

2. **Top Navigation with Romantic Audio Engine:**
   - Built-in soothing ambient harp & piano raga melody generated live with Web Audio API (works with zero external audio dependencies).
   - Can easily be swapped with your favorite romantic MP3 song by dropping it into `public/music/romantic-bgm.mp3`.
   - Floating rose petals toggle button (enable/disable on demand).

3. **Hero Section — My Moon, My Amrita:**
   - Majestic animated full moon with glowing lunar aura and twinkling stars.
   - Flanking traditional diyas with animated flickering golden flames.
   - Emotional headings and quick action buttons.

4. **Personalized Love Letter:**
   - Royal parchment style with golden filigree borders and heart wax seal.
   - Smooth typewriter animation with a *"Reveal Instantly"* button and automatic support for reduced-motion.
   - Full heartfelt Karwa Chauth letter in Hindi-English exactly as provided.
   - Signed: *"Forever with love, Tumhara Ankit ❤️"*

5. **Our Love Story — Milestones Timeline:**
   - 4 customizable milestones:
     1. The beginning of our story.
     2. The moment you became special to me.
     3. Our most beautiful memory together.
     4. All the beautiful moments still waiting for us.
   - Milestone tags, romantic highlight quotes, and glowing golden node icons.

6. **Our Memories — Photo Gallery & Lightbox:**
   - 6 customizable photo slots in a responsive card grid.
   - Hover zoom effects and favorite heart buttons.
   - Fullscreen Lightbox modal with zoom, next/prev navigation, and captions.
   - Ready for drop-in real photos.

7. **Karwa Chauth Moon Ritual Experience:**
   - Large glowing full moon with lunar craters.
   - Traditional decorated channi (sieve) with metallic filigree and red-gold accents.
   - Interactive: Amrita can tap to view the moon through the decorated channi!
   - *"Make a Wish Under the Moon 🌙"* button triggering shooting stars and Ankit's loving wish reveal.

8. **8 Reasons Why You Are Special:**
   - 8 interactive 3D flip cards revealing why Amrita is irreplaceable.
   - Progress counter: *"Reasons Discovered: X / 8"*.

9. **Romantic Countdown:**
   - Live countdown ticker (Days, Hours, Minutes, Seconds).
   - Automatically handles past festival dates gracefully by displaying: *"Every day with you is worth celebrating. ❤️"*.

10. **A Special Promise Section:**
    - 5 sacred promises of respect, support, honest communication, and eternal kindness.
    - Concluding quote: *"Real love is not just a beautiful promise. It is the little things we do for each other every day."*

11. **Final Surprise — Ankit's Secret Note:**
    - Interactive 3D envelope with a gold wax seal.
    - Unfolds on click with floating hearts and Ankit's final emotional message.
    - Climax line: *"You are my favorite person, my sweetest thought, and one of the most beautiful parts of my life."*

---

## 🛠️ How to Run Locally

### Prerequisites:
- [Node.js](https://nodejs.org/) (v18 or higher)

### Steps:
1. Open terminal inside the project directory:
   ```bash
   cd C:\Users\ankit\.gemini\antigravity\scratch\karwa-chauth-amrita
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser to view the website.

4. To build for production:
   ```bash
   npm run build
   ```

---

## 🎨 How to Customize All Content

Everything is configured in **ONE single file**: [`src/config.js`](./src/config.js).

### 1. Changing Names & Text
Open [`src/config.js`](./src/config.js) and update:
- `boyfriendName`
- `girlfriendName`
- `mainTagline`
- Love letter paragraphs, promises, or final surprise message.

### 2. Adding Real Photos
- Save your couple photos inside the `public/photos/` folder (e.g. `pic1.jpg`, `pic2.jpg`).
- In `src/config.js`, under `gallery.photos`, change the `url`:
  ```javascript
  {
    id: 1,
    url: "/photos/pic1.jpg",
    title: "Our Date in Delhi ❤️",
    caption: "The evening we laughed so much our cheeks hurt.",
    tag: "Pure Joy"
  }
  ```

### 3. Adding Your Own Background Song (MP3)
- Drop your favorite romantic song into `public/music/` and name it `romantic-bgm.mp3`.
- The website will automatically use it! If no file is provided, the built-in ambient synthesizer plays automatically.

### 4. Customizing the Countdown Date
In `src/config.js`, set `countdown.targetDate` to your desired Karwa Chauth date/time in ISO format:
```javascript
targetDate: "2026-10-29T20:30:00+05:30",
```

---

## 🚀 How to Deploy Online (Free)

### Option 1: Vercel (Easiest & Fastest)
1. Push this folder to a GitHub repository or drag-and-drop on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**.
3. Click **Deploy**. Your surprise link will be live in under 1 minute!

### Option 2: Netlify
1. Run `npm run build` locally to generate the `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder into the Netlify drop zone.
4. Your website is instantly live!

---

Crafted with infinite love for Amrita. ❤️🌙
