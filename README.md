# Neo-Brutal Portfolio 2025

A vibrant, fully responsive neo-brutalist style portfolio website built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Neo-Brutalist Design** - Bold colors, heavy borders, and playful aesthetics
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Modern** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Custom animations and hover effects
- 🎯 **Section Navigation** - Smooth scrolling to different sections
- 📝 **Contact Form** - Interactive contact section (demo)

## 🎨 Design Inspiration

This portfolio is influenced by a neo-brutalist Figma design featuring:
- Bold, bright colors (neon pink `#f5b6f6`, neon green `#e8ffa8`, cyan)
- Heavy 4px black borders on all elements
- Custom Google Fonts (JetBrains Mono, Jua, K2D)
- Playful box shadows and rotated elements
- Card-based layouts with hover effects

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Google Fonts** - Custom typography (JetBrains Mono, Jua, K2D)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173/`

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── Navbar.tsx      # Responsive navigation with mobile menu
  │   ├── Hero.tsx        # Hero section with photo and intro
  │   ├── Skills.tsx      # Skills grid and about section
  │   ├── Projects.tsx    # Project cards showcase
  │   ├── Contact.tsx     # Contact form and social links
  │   └── Footer.tsx      # Footer component
  ├── assets/             # Static assets
  ├── App.tsx             # Main app component
  ├── main.tsx            # Application entry point
  └── index.css           # Global styles and animations
```

## 🎨 Customization

To customize this portfolio for your own use:

### Personal Information
1. Update name and title in `src/components/Hero.tsx`
2. Replace the photo URL in the Hero component
3. Modify the About Me section in `src/components/Skills.tsx`

### Content
4. Edit skills array in `src/components/Skills.tsx`
5. Update projects array in `src/components/Projects.tsx`
6. Change social links in `src/components/Contact.tsx`
7. Update footer in `src/components/Footer.tsx`

### Styling
8. Adjust colors in `tailwind.config.js` (neon-pink, neon-green, etc.)
9. Modify fonts if desired
10. Customize animations in `src/index.css`

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎯 Sections

- **Home** - Hero section with introduction
- **Skills** - Skill cards and about information
- **Projects** - Project showcase with cards
- **Contact** - Contact form and social links

## 📄 License

MIT - Feel free to use this template for your own portfolio!
