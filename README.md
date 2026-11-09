# Fahad Naeem — Portfolio Website

Live site: **https://fahadnaeem1135.github.io**

The site is split into small files, so you can edit any part with a free AI chat (like the free version of Claude). You never have to deal with the whole website at once.

---

## 1. Which file do I edit?

| What you want to change | File to open |
|---|---|
| Top menu, logo, "Let's Talk" button, floating WhatsApp button | `sections/01-header.html` |
| Big title, intro text, your photo, hero buttons | `sections/02-hero.html` |
| Scrolling text strip under the hero | `sections/03-marquee.html` |
| About me text, stat boxes (6+ years, 50+ clients…) | `sections/04-about.html` |
| Services cards | `sections/05-services.html` |
| Skills cards and skill chips | `sections/06-skills.html` |
| Featured work / impact cards | `sections/07-work.html` |
| Client and brand cards | `sections/08-clients.html` |
| Industries | `sections/09-industries.html` |
| "How I work" process steps | `sections/10-process.html` |
| Work experience and education | `sections/11-experience.html` |
| Contact area and footer (email, phone, LinkedIn) | `sections/12-contact-footer.html` |
| Colours, sizes, animations, backgrounds | files in the `css/` folder |
| Mobile layout | `css/5-responsive.css` |
| Page title and Google/WhatsApp share preview | `index.html` (top part) |

**Your contact details appear in more than one file:**

- WhatsApp number `923228091396`: `01-header.html` (floating button) and `12-contact-footer.html`
- Email `fahadnaeem1136@gmail.com`: `02-hero.html` and `12-contact-footer.html`
- LinkedIn link: `12-contact-footer.html`

---

## 2. How to edit with free Claude (step by step)

1. On GitHub, open the file (for example `sections/08-clients.html`).
2. Click the **pencil icon (✏️ Edit)** at the top right of the file.
3. Click inside the code, press **Ctrl + A** (select all) and **Ctrl + C** (copy).
4. Open claude.ai, paste the message below, then paste your file under it:

```
This is one section file of my portfolio website (HTML with inline styles).
Please make this change: <WRITE YOUR CHANGE HERE>
Rules:
- Keep the same design, classes, inline styles, colours (#88ff2a lime on black) and structure.
- Do not remove anything I did not ask to remove.
- Give me back the COMPLETE updated file in one code block, nothing cut out.

<PASTE THE FILE HERE>
```

5. Copy Claude's code back to GitHub: click in the editor, press **Ctrl + A**, then **Ctrl + V**.
6. Click **Commit changes…**, then **Commit changes** again.
7. Wait 1–2 minutes, open your site and press **Ctrl + F5** to see the change.

**Tip for `08-clients.html` (the biggest file):** if Claude's answer gets cut off, ask only for the new or changed card. Use a message like "Give me only the HTML for one new client card, styled exactly like the existing cards." On GitHub, paste that card right after the last `</article>` in the list.

---

## 3. Ready-made requests you can copy

- **Add a client:** "Add a new client card for *Brand Name* (category: *Real Estate · Dubai*, Instagram link: *URL*, short description: *…*, logo file: `images/logos/brandname.png`, use the exact name of the file you uploaded). Copy the style of the existing cards." First upload the logo (a square picture) into the `images/logos` folder.
- **Add a job:** (in `11-experience.html`) "Add a new job at the top: *Company*, *Role*, *2026 – Present*, with these bullet points: …"
- **Change numbers:** (in `04-about.html`) "Change 50+ clients to 70+." Note: the count-up animation uses `--to: 50`, so ask Claude to change that number too.
- **Add a service:** (in `05-services.html`) "Add a 10th service card called *…* with this text: … Use a suitable icon like the others."
- **Change phone number:** do the same request in `01-header.html` and `12-contact-footer.html`.

---

## 4. Images and files

- Your photo is `fahad-portrait.webp` in the main folder. To replace it, upload a new photo with **exactly the same name**: **Add file → Upload files**, and GitHub replaces the old one. A portrait (taller than wide) photo works best.
- Client logos are in `images/logos/` (one square picture per client, named after its Instagram handle).
- To add a new image, upload it to the main folder and ask Claude to use `your-image-name.jpg` in the right place.
- `Fahad-Naeem-CV.pdf` is your CV.

---

## 5. If something breaks

- On GitHub, open the file, click **History**, open the last version that worked, click **… → View file**, copy everything, and paste it back with Edit → Commit.
- Don't rename or move files in `sections/`, `css/` or `js/`. `index.html` loads them by name.
- To hide a section, open `index.html` and delete its `<div data-section="sections/…"></div>` line. To change the order of sections, move those lines.
- Opening `index.html` straight from your computer shows a blank page. That's normal: the sections only load on the live site.

---

## 6. Folder overview

```
index.html            ← main page: loads the css files and the sections in order
sections/             ← one file per part of the page (edit these most)
css/
  1-base.css          ← basics, headings, buttons, menu
  2-hero-effects.css  ← header/hero animations, scrolling text, reveal effects
  3-components.css    ← cards, experience list, clients, footer, WhatsApp button
  4-backgrounds.css   ← background textures and moving effects
  5-responsive.css    ← mobile and tablet layout
js/load-sections.js   ← loads the section files (no need to edit)
fahad-portrait.webp   ← your photo
Fahad-Naeem-CV.pdf    ← your CV
```

Theme colours: lime `#88ff2a` (also written `rgba(136,255,42, …)`), black `#000000`, dark grey `#0d0d0d`, white `#ffffff`.
