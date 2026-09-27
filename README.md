# Hashir A — Portfolio

My personal portfolio website, built from scratch with React, TypeScript and Tailwind CSS.

**🔗 Live site:** 

---

## About this project

I built this portfolio to showcase my work as a full-stack developer and to deepen my frontend skills. Every component was written by hand. No page builders or UI kits were used.

## Features

- **Fully responsive**: tuned layouts for phone, tablet and desktop, with custom breakpoints at 810px and 1200px
- **Scroll-reveal animations**: sections slide up and fade in as they enter the screen, built with `IntersectionObserver`
- **Page-load animations**: the header and hero animate in on first load
- **Progressive bottom blur**: an 8-layer `backdrop-filter` effect that gradually blurs content at the bottom of the screen
- **Accessible**: semantic HTML (`header`, `main`, `section`, `article`, `footer`, `dl`), a logical heading order, alt text, `aria-label`s on icon links, visible keyboard focus, and support for the "reduce motion" setting
- **Data-driven sections**: skills, projects, work history and social links are rendered from typed arrays with `.map()`

## Built with

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI components |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling and design tokens |
| [Vite](https://vite.dev) | Development server and production build |
| [React Icons](https://react-icons.github.io/react-icons) | Social media icons |
| [Geist](https://vercel.com/font) | Typography |

## Project structure

```
src/
├── components/
│   ├── Header.tsx        # Top bar with name and contact button
│   ├── Hero.tsx          # Name, photo, intro and social links
│   ├── About.tsx
│   ├── Skills.tsx        # Grouped skill tags
│   ├── Projects.tsx
│   ├── WorkHistory.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SocialLinks.tsx   # Shared by Hero and Footer
│   ├── Reveal.tsx        # Reusable scroll-reveal wrapper
│   └── BottomBlur.tsx    # Progressive blur overlay
├── assets/               # Images
├── App.tsx               # Page layout
├── main.tsx              # App entry point
└── index.css             # Tailwind import, design tokens and animations
```

## Running locally

You'll need [Node.js](https://nodejs.org) 20 or newer.

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev

# Create a production build in /dist
npm run build

# Preview the production build locally
npm run preview

# Check the code for problems
npm run lint
```

## Contact

- **Email:** [abouthashir@gmail.com](mailto:abouthashir@gmail.com)
- **LinkedIn:** [linkedin.com/in/about-hashir](https://www.linkedin.com/in/about-hashir)
- **GitHub:** [github.com/abouthashir](https://github.com/abouthashir)