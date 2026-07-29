# Smokin Grill Plano

**Live site: [smokingrillplano.com](https://www.smokingrillplano.com)**

Website for Smokin Grill, a halal barbecue restaurant in Plano, Texas.
Built to load fast on a phone, since most visitors are people checking the
menu or looking up the address while they are already out.

## What it does

- **Menu** with photos, organized by section.
- **Our Story** page for the restaurant background.
- **Catering** page for larger orders and events.
- **Contact** page with a working form that emails the restaurant.
- **Halal badge** shown throughout, since it is the main thing customers
  ask about.
- **SEO and local search setup**, including restaurant structured data so
  Google can show hours and location, plus an auto-generated sitemap and
  robots.txt.

## Stack

- Astro 7, static output
- React 19 for the interactive pieces
- Tailwind CSS v4, shadcn/ui on Radix
- GSAP and Motion for animation
- Web3Forms for the contact form

The site builds to plain HTML, CSS, and JavaScript with no server, so it
can be hosted anywhere that serves static files.

## Running it locally

You need Node 22.12 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Other commands:

```bash
npm run build     # builds to ./dist
npm run preview   # preview the built site locally
npm run lint      # eslint
npm run format    # prettier
```

## Deploying

```bash
npm run build
```

That produces a `dist/` folder. Upload the **contents** of `dist/` to the
web root on the host, not the folder itself. Since the output is fully
static, there is nothing to install or run on the server.

The production domain is set in `astro.config.mjs` as `site`. That value
is what the sitemap and structured data use for absolute URLs, so it has
to match the real domain or search engines get the wrong links.

## Contact form

The form posts to Web3Forms. The access key sits in
`src/pages/contact.astro` as a hidden input. That is how Web3Forms is meant
to work for static sites, the key is public by design and only allows
submitting to the inbox it is tied to.

To change where the emails go, make a new key at
[web3forms.com](https://web3forms.com) and swap the value.

## Things that live outside this repo

If the laptop dies, this repo plus the following is everything:

- **The web host** and its file manager or FTP details
- **The domain registrar** for smokingrillplano.com
- **Web3Forms**, the inbox the contact form delivers to
- **Google Business Profile**, for hours, photos, and reviews in search

There is no database and no environment file, so nothing else is hidden
from this repo.
