# 🎨 Mia's Portfolio - Creative UI/UX Designer

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0.3-646cff?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06b6d4?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, interactive portfolio website with stunning claymorphism design and dark/light mode**

[Live Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage)

</div>

---

## 📸 Preview

<div align="center">
  <img src="https://via.placeholder.com/800x400/1a1525/a78bfa?text=Portfolio+Preview" alt="Portfolio Preview" />
  <p><em>Dark mode with claymorphism design</em></p>
</div>

## ✨ Features

### 🎨 Visual & Interactions
- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
- **✨ Custom Cursor** - Glowing purple cursor that follows mouse movement (desktop)
- **🎬 Preloader Animation** - Beautiful loading screen with progress bar
- **🌊 Smooth Transitions** - Fade-in animations for all sections
- **🎭 Parallax Effect** - Floating 3D clay shapes in hero section

### 📝 Content Sections
- **🏠 Home** - Hero banner with typing animation
- **👤 About** - Stats, skills, tools, and workflow process
- **💼 Projects** - Filterable project gallery with modal details
- **🏆 Certificates** - Professional certifications showcase
- **📰 Blog** - Latest articles and insights
- **⭐ Testimonials** - Client reviews with ratings
- **📧 Contact** - Functional contact form with validation

### 🛠️ Interactive Features
- **🔍 Project Filter** - Filter projects by category (UI/UX, Web, Mobile, E-Commerce)
- **📋 Project Modal** - Detailed view with tools, client info, and role
- **📬 Contact Form** - Working form with success feedback
- **🎵 Music Player** - Mini player with visualizer in sidebar
- **📊 Scroll Progress Bar** - Visual indicator of scroll position
- **⬆️ Back to Top Button** - Quick navigation to top
- **👥 Visitor Counter** - Track total visitors (localStorage)

### 📱 Responsive Design
- **Mobile-first approach** - Optimized for all screen sizes
- **Hamburger menu** - Smooth mobile navigation
- **Adaptive layouts** - Grid systems that adjust to viewport

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Icon library |
| **CSS Animations** | Custom animations & effects |

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mia-portfolio.git
cd mia-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
```
http://localhost:5173
```

## 🏗️ Build

Create production build:
```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
mia-portfolio/
├── public/              # Static assets
├── src/
│   ├── App.tsx         # Main application component
│   ├── data.ts         # Data & configuration
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.js      # Vite configuration
└── README.md           # Documentation
```

## 🎨 Customization

### Change Colors
Edit the color variables in `src/App.tsx`:
```typescript
const getClayCSS = (isDark: boolean) => `
  :root {
    --bg-main: ${isDark ? '#1a1525' : '#ebe6f5'};
    --accent: #a78bfa;
    // ... more variables
  }
`;
```

### Update Content
Edit `src/data.ts` to customize:
- Projects
- Skills
- Certificates
- Blog posts
- Testimonials
- Experience

### Add Your Own Images
Replace image URLs in `src/data.ts` with your own:
```typescript
image: "https://your-image-url.com/image.jpg"
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/mia-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mia Chen**
- Website: [miachen.dev](#)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Mia Chen](#)
- Email: mia.chen@email.com

## 🙏 Acknowledgments

- Design inspiration from claymorphism trends
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/) & [React](https://reactjs.org/)

## 📞 Contact

For questions or collaborations:
- 📧 Email: mia.chen@email.com
- 💼 LinkedIn: [Connect with me](#)
- 🐦 Twitter: [@miachen](#)

---

<div align="center">

**⭐ If you like this project, consider giving it a star!**

Made with ❤️ by Mia Chen

</div>
