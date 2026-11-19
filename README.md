# Lynk Website

Marketing website for Lynk — a mobile app that lets people in Rwanda invest in
the Rwanda Stock Exchange from their phone, on their own or with their ikimina.

## Structure
- `index.html` — the page
- `css/styles.css` — responsive styles (phone/tablet adjustments)
- `js/script.js` — the quiz, FAQ, and waitlist form
- `images/` — hero, circle, kigali, market photos

## Run locally
Open `index.html` in a browser, or run a local server:
```
python3 -m http.server
```
then visit http://localhost:8000

## Deploy (GitHub Pages)
Push to GitHub, then Settings → Pages → Deploy from branch → main → / (root).

## To do
- Connect the waitlist form to a backend (e.g. Formspree) so sign-ups are saved.
