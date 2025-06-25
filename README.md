# Ausaf ul Islam - Portfolio Website

A modern, glass-themed portfolio website showcasing Ausaf ul Islam's skills, experience, and projects.

## Features

- ✨ Modern glass-themed UI design with blur effects
- 📱 Fully responsive across all device sizes
- 🎨 Animated components and transitions using Framer Motion
- 📝 Comprehensive sections: Hero, About, Skills, Certifications, Projects, Contact
- 💅 Built with Next.js 15 and Tailwind CSS
- 🔍 SEO optimized with proper metadata
- ⚡ Fast loading and optimized performance

## Technologies Used

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **UI Components**: Shadcn UI
- **Type Safety**: TypeScript
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [Bun](https://bun.sh/) (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ausaf-portfolio.git
   cd ausaf-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
glassy-portfolio/
├── src/
│   ├── app/                  # Next.js app directory
│   ├── components/           # React components
│   │   ├── ui/               # UI components (shadcn)
│   │   ├── About.tsx         # About section
│   │   ├── Hero.tsx          # Hero section
│   │   ├── ...               # Other section components
│   ├── lib/                  # Utility functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── package.json              # Project dependencies
```

## Deployment

This project can be deployed on Vercel. See the [DEPLOY.md](./DEPLOY.md) file for deployment instructions.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace project details in the `Projects.tsx` file
3. Update skills and certifications in their respective component files
4. Replace the contact information in the `Contact.tsx` file
5. Customize colors and styling in the `globals.css` file

## SEO

The project includes proper SEO setup with:

- Meta title and description
- OpenGraph tags
- Robots.txt
- Sitemap.xml

## License

MIT

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

Developed with ❤️ by [Same.new](https://same.new)
