# হাদিভাই — শহীদ শরীফ ওসমান বিন হাদি স্মৃতি সংগ্রহশালা

A memorial website dedicated to শহীদ শরীফ ওসমান বিন হাদি — his life, work, and legacy. This repository contains a responsive, accessible React + Vite site with Tailwind CSS and thoughtful media content (photos, videos, quotes, documents) to preserve and share memories.

---

## 🚀 Features

- Responsive, accessible UI built with React + Vite and Tailwind CSS
- Rich media support: videos, photo galleries, documents, quotes, timelines
- Reusable component library and utility hooks
- Client-side routing with React Router
- Lightweight and performant (Vite)

---

## 🧩 Tech stack

- Framework: React (v18)
- Bundler: Vite
- Styling: Tailwind CSS
- Icons: Lucide
- Motion: Framer Motion
- TypeScript

---

## 🛠️ Local setup

Prerequisites:

- Node.js (>= 16) and npm or yarn / pnpm

Install and run locally:

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

Build for production:

```bash
npm run build
npm run preview # serve local production build
```

Lint:

```bash
npm run lint
```

---

## 📁 Project structure (high level)

- `public/` — static assets (images, videos, favicons)
- `src/` — application source
  - `components/` — UI components and page sections
  - `pages/` — route views
  - `hooks/` — shared hooks
  - `lib/` — utilities

---

## 🎨 Media & assets notes

- The site includes a video file (`public/ওসমান হাদীর বিদ্রোহী  কবিতা আবৃত্তি.mp4`) and `main.jpeg` in `public/`.
- For better compatibility across platforms and CDNs, consider renaming files to ASCII-only names (e.g., `osman-hadi-rebellion-poem.mp4`). Update references in components accordingly.
- For favicons and branding, prefer a small `.ico` or multiple sized PNGs for cross-browser support.

---

## ♿ Accessibility & best practices

- Ensure meaningful `alt` text for images and `aria-label` for interactive icons.
- Videos should include captions where possible for accessibility.
- Test with keyboard navigation and common screen readers.

---

## 🤝 Contributing

Contributions, corrections, and suggestions are welcome. If you'd like to contribute:

1. Fork the repo
2. Create a new branch (e.g., `fix/typo` or `feature/gallery`)
3. Make changes and add tests where appropriate
4. Open a pull request with a clear description

Please follow the established code style and run `npm run lint` before submitting.

---

## 📣 Credits

- **Developed by:** Remon Sharker Rifat — https://web.facebook.com/w.rem2000


---

## 🔒 License

This repository does not include a license file yet. If you want to open-source it, consider adding an **MIT** license or a license of your choice.

---

## 📬 Contact

For questions or help, reach out:

- Remon Sharker Rifat — https://web.facebook.com/w.rem2000

---

_Thank you for preserving and sharing this important memory._
