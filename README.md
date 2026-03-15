# WCWIF Conference Website

Static single-page site for the WCWIF conference, using [Santa Clara University visual identity](https://www.scu.edu/umc/brand/university-logos/) (SCU red #B30738, black). With:

- **Agenda 2026** — This year’s programme (edit in `index.html` or use the PDF link)
- **Past Agendas** — 2025 and older years (add more year blocks in the “Past Agendas” section)
- **Venue** — Conference location, address, map, directions
- **Suggested Accommodation** — Hotels and booking links

## Editing content

1. **Agenda 2026**  
   Open `index.html`, find the section `id="agenda-2026"`, and edit the schedule there. Do not add links to the agenda PDF or to individual papers (presenters may not wish to share papers publicly).

2. **Past agendas**  
   The 2025 agenda is linked as a PDF (`../2025/Agenda WCWIF 2025.pdf`). Add more `past-year-card` blocks for other years and link their PDFs the same way.

3. **Venue**  
   In the “Conference Venue” section, replace “Venue name”, address, “Open in Google Maps” link, and “Getting there” text. For the map, replace the `map-placeholder` div with an iframe from Google Maps (Embed) or another map provider.

4. **Accommodation**  
   Replace the three placeholder hotel cards with real names, descriptions, and booking links. Add or remove cards as needed.

## Running locally

Open `index.html` in a browser, or use a simple local server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000/website/
```

Or drag `index.html` into the browser (some features like smooth scroll and PDF paths work best when served from a server if the PDF is in a parent folder).

## Hosting

Upload the `website` folder (and keep the same paths to `../2026/` and `../2025/` if the PDFs stay in the repo) to any static host (GitHub Pages, Netlify, etc.). If you move the PDFs, update the `href` values in `index.html`.

**Logo:** The header uses text (“Santa Clara University” + “WCWIF”) in SCU colors. To use the official SCU logo image, download it from [University Logos](https://www.scu.edu/umc/brand/university-logos/#content-1248250) per their guidelines, save it as `website/images/scu-logo.svg` (or .png), and add `<img src="images/scu-logo.svg" alt="Santa Clara University" class="scu-logo">` inside the `.logo-wrap` link in `index.html`.
