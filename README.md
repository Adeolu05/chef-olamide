# Chef Olamide

Portfolio website for Olamide Oyewole, Chef de Partie in London. Live at **[chefolamide.com](https://www.chefolamide.com)**.

## Sections

- **Hero**: headline, key numbers and a Download CV button
- **About**: summary, kitchen strengths and certificates
- **Experience**: current and past roles
- **Specialties**: core kitchen skills
- **Gallery**: chef photos and dishes, with a full-screen photo viewer
- **Testimonials** and **Contact**

## Tech

React 19, TypeScript, Tailwind CSS, Framer Motion and Vite. Deployed on Vercel; every push to `main` goes live automatically.

## Run locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000. `npm run build` creates a production build in `dist/`.

## Editing content

| What | Where |
| --- | --- |
| Roles and dates | `src/sections/Experience.tsx` |
| About text and certificates | `src/sections/About.tsx` |
| Hero text and highlight numbers | `src/sections/Hero.tsx` |
| Specialties | `src/sections/Specialties.tsx` |
| Testimonials | `src/constants.tsx` |
| Gallery photos | `public/images/gallery/` and `src/sections/Gallery.tsx` |
| Chef photos | `public/images/chef/` and `public/images/about/` |
| CV download | `public/Olamide-Oyewole-CV.pdf` |
| Page title, description and share image | `index.html`, `public/og-image.jpg` |

Photos are served as WebP. Keep new ones under about 300 KB.
