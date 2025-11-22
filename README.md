# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible UI components
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **TypeScript** - Type-safe development
- 🎭 **Lucide Icons** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts     # Utility functions
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles with Tailwind
```

## Customization

### Update Personal Information

Edit `src/App.tsx` to customize:
- Your name and bio in the hero section
- Project details in the `projects` array
- Skills in the `skills` array
- Social media links in the header

### Styling

The project uses Tailwind CSS with shadcn/ui's design system. Customize colors and theme in:
- `src/index.css` - CSS variables for light/dark themes
- `tailwind.config.js` - Tailwind configuration

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## License

MIT
