import React, { useState, useEffect } from 'react';
import { 
  Code2, Palette, Camera,
  Home, 
  Award, Target,
  ArrowUpRight, ExternalLink, Menu, X,
  Github, Linkedin, Mail, Heart,
  Briefcase, GraduationCap, Star, Sparkles,
  FileText, Download, CheckCircle
} from 'lucide-react';

// ==========================================
// CSS STYLES FOR DARK CLAYMORPHISM
// ==========================================
const CLAY_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  :root {
    --bg-main: #1a1525;
    --bg-card: #231d30;
    --shadow-drk: #0f0b16;
    --shadow-lgt: #2d2540;
    --text-main: #e8e0f5;
    --text-muted: #8f7eaf;
    --accent: #a78bfa;
    --accent-dark: #7c3aed;
  }

  * {
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    margin: 0;
    overflow: hidden; 
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-main);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--shadow-lgt);
    border-radius: 10px;
  }

  /* --- Core Clay Styles (Dark) --- */
  .clay {
    background-color: var(--bg-card);
    border-radius: 32px;
    box-shadow: 
      12px 12px 24px var(--shadow-drk),
      -12px -12px 24px var(--shadow-lgt),
      inset 3px 3px 6px rgba(255, 255, 255, 0.05),
      inset -3px -3px 6px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.08);
  }

  .clay-sm {
    background-color: var(--bg-card);
    border-radius: 20px;
    box-shadow: 
      6px 6px 12px var(--shadow-drk),
      -6px -6px 12px var(--shadow-lgt),
      inset 2px 2px 4px rgba(255, 255, 255, 0.05),
      inset -2px -2px 4px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.08);
  }

  .clay-inset {
    background-color: var(--bg-main);
    border-radius: 9999px;
    box-shadow: 
      inset 6px 6px 12px var(--shadow-drk),
      inset -6px -6px 12px var(--shadow-lgt);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .clay-pill {
    border-radius: 9999px;
  }

  /* --- Interactions --- */
  .clay-interactive {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .clay-interactive:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      16px 16px 30px var(--shadow-drk),
      -16px -16px 30px var(--shadow-lgt),
      inset 3px 3px 6px rgba(255, 255, 255, 0.08),
      inset -3px -3px 6px rgba(0, 0, 0, 0.3);
  }
  
  .clay-interactive:active {
    transform: translateY(2px) scale(0.98);
    box-shadow: 
      4px 4px 10px var(--shadow-drk),
      -4px -4px 10px var(--shadow-lgt),
      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
      inset -4px -4px 8px rgba(255, 255, 255, 0.05);
  }

  /* --- Metric Cards --- */
  .clay-card {
    border-radius: 32px;
    box-shadow: 
      14px 14px 28px var(--shadow-drk),
      -14px -14px 28px var(--shadow-lgt);
    border: 3px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }
  
  .clay-card:hover {
    transform: translateY(-5px);
  }

  .clay-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 30px;
    pointer-events: none;
    box-shadow: 
      inset 6px 6px 15px rgba(255, 255, 255, 0.08),
      inset -6px -6px 15px rgba(0, 0, 0, 0.3);
  }

  /* Subtle Tints for Cards (Dark) */
  .tint-purple { background: linear-gradient(135deg, #2d2540, #3d2e5c); }
  .tint-pink   { background: linear-gradient(135deg, #3d2030, #4d2840); }
  .tint-yellow { background: linear-gradient(135deg, #3d3520, #4d4228); }
  .tint-blue   { background: linear-gradient(135deg, #203040, #284050); }

  /* --- 3D Hero Floating Shapes (Dark) --- */
  @keyframes float1 {
    0%, 100% { transform: perspective(400px) translateY(0) rotateY(-20deg) rotateX(20deg); }
    50% { transform: perspective(400px) translateY(-15px) rotateY(-10deg) rotateX(25deg); }
  }
  @keyframes float2 {
    0%, 100% { transform: perspective(400px) translateY(0) rotateY(25deg) rotateZ(10deg); }
    50% { transform: perspective(400px) translateY(-10px) rotateY(35deg) rotateZ(5deg); }
  }
  @keyframes float3 {
    0%, 100% { transform: perspective(400px) translateY(0) rotateZ(-15deg) rotateX(15deg); }
    50% { transform: perspective(400px) translateY(-20px) rotateZ(-5deg) rotateX(25deg); }
  }

  .clay-shape-coin {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c4a0ff, #7c3aed);
    box-shadow: 
      15px 15px 30px rgba(124, 58, 237, 0.4),
      -10px -10px 20px rgba(255, 255, 255, 0.1),
      inset 8px 8px 16px rgba(255, 255, 255, 0.2),
      inset -8px -8px 16px rgba(60, 20, 120, 0.6);
    animation: float1 6s ease-in-out infinite;
  }
  
  .clay-shape-chart {
    position: absolute;
    width: 60px;
    height: 90px;
    border-radius: 20px;
    background: linear-gradient(135deg, #6d5a8a, #a78bfa);
    box-shadow: 
      15px 15px 30px rgba(167, 139, 250, 0.3),
      -10px -10px 20px rgba(255, 255, 255, 0.1),
      inset 6px 6px 12px rgba(255, 255, 255, 0.15),
      inset -6px -6px 12px rgba(40, 20, 80, 0.5);
    animation: float2 5s ease-in-out infinite;
  }

  .clay-shape-leaf {
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 0 40px 0 40px;
    background: linear-gradient(135deg, #4ade80, #10b981);
    box-shadow: 
      15px 15px 30px rgba(16, 185, 129, 0.3),
      -10px -10px 20px rgba(255, 255, 255, 0.1),
      inset 8px 8px 16px rgba(255, 255, 255, 0.15),
      inset -8px -8px 16px rgba(4, 90, 60, 0.5);
    animation: float3 7s ease-in-out infinite;
  }

  /* Skill Bar Animation */
  @keyframes skillFill {
    from { width: 0%; }
    to { width: var(--skill-width); }
  }

  .skill-bar-fill {
    animation: skillFill 1.5s ease-out forwards;
  }

  /* Project Card Image */
  .project-img {
    transition: transform 0.5s ease;
  }
  .project-card:hover .project-img {
    transform: scale(1.05);
  }

  /* Smooth scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Certificate card hover */
  .cert-card {
    transition: all 0.3s ease;
  }
  .cert-card:hover {
    transform: translateY(-4px) scale(1.02);
  }
`;

// ==========================================
// DATA & CONFIG
// ==========================================
const NAV_LINKS = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: Heart, label: 'About' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'certificates', icon: Award, label: 'Certificates' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

const STATS = [
  { 
    id: 1, title: "Years Experience", value: "5+", trend: "Since 2020", isUp: true, 
    tint: "tint-purple", icon: Award, trendColor: "#a78bfa",
    path: "M 0 35 C 20 35, 40 10, 60 20 C 80 30, 90 5, 100 5"
  },
  { 
    id: 2, title: "Projects Done", value: "80+", trend: "Completed", isUp: true, 
    tint: "tint-pink", icon: Code2, trendColor: "#f472b6",
    path: "M 0 25 C 25 35, 40 15, 60 25 C 80 35, 90 10, 100 0"
  },
  { 
    id: 3, title: "Happy Clients", value: "50+", trend: "Worldwide", isUp: true, 
    tint: "tint-yellow", icon: Star, trendColor: "#fbbf24",
    path: "M 0 40 C 30 40, 40 5, 60 15 C 80 25, 90 0, 100 0"
  },
  { 
    id: 4, title: "Awards Won", value: "12", trend: "Design Awards", isUp: true, 
    tint: "tint-blue", icon: Sparkles, trendColor: "#60a5fa",
    path: "M 0 30 C 20 20, 40 25, 60 10 C 80 5, 90 15, 100 5"
  }
];

const SKILLS = [
  { name: "UI/UX Design", level: 95, color: "#a78bfa" },
  { name: "React / Next.js", level: 90, color: "#f472b6" },
  { name: "Figma & Prototyping", level: 92, color: "#fbbf24" },
  { name: "TypeScript", level: 85, color: "#60a5fa" },
  { name: "Motion Design", level: 78, color: "#4ade80" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Finova Banking App",
    category: "UI/UX Design",
    description: "A modern fintech mobile app with claymorphism design system",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#a78bfa"
  },
  {
    id: 2,
    title: "EcoTrack Dashboard",
    category: "Web Development",
    description: "Sustainability tracking platform with real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#4ade80"
  },
  {
    id: 3,
    title: "Artisan Marketplace",
    category: "E-Commerce",
    description: "Handcrafted goods marketplace with immersive shopping experience",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#f472b6"
  },
  {
    id: 4,
    title: "MindFlow Meditation",
    category: "Mobile App",
    description: "Mindfulness and meditation app with calming micro-interactions",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#fbbf24"
  }
];

const CERTIFICATES = [
  {
    id: 1,
    title: "Google UX Design",
    issuer: "Google",
    date: "2023",
    credential: "GX-2023-8472",
    icon: Award,
    color: "#a78bfa"
  },
  {
    id: 2,
    title: "React Developer",
    issuer: "Meta",
    date: "2023",
    credential: "META-RD-2023",
    icon: Code2,
    color: "#60a5fa"
  },
  {
    id: 3,
    title: "UI/UX Masterclass",
    issuer: "Coursera",
    date: "2022",
    credential: "COUR-UX-2022",
    icon: Palette,
    color: "#f472b6"
  },
  {
    id: 4,
    title: "TypeScript Advanced",
    issuer: "Microsoft",
    date: "2022",
    credential: "MS-TS-2022",
    icon: FileText,
    color: "#4ade80"
  },
  {
    id: 5,
    title: "Motion Design",
    issuer: "Adobe",
    date: "2021",
    credential: "AD-MD-2021",
    icon: Camera,
    color: "#fbbf24"
  },
  {
    id: 6,
    title: "Frontend Expert",
    issuer: "freeCodeCamp",
    date: "2021",
    credential: "FCC-FE-2021",
    icon: Star,
    color: "#f472b6"
  }
];

const EXPERIENCE = [
  { icon: Briefcase, title: 'Senior UI Designer @ Google', time: '2023 — Present', color: 'text-[#a78bfa]' },
  { icon: GraduationCap, title: 'Design Lead @ StartupXYZ', time: '2021 — 2023', color: 'text-emerald-400' },
  { icon: Award, title: 'Freelance Designer', time: '2020 — 2021', color: 'text-rose-400' },
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  // Update active nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => ({
        id: link.id,
        element: document.getElementById(link.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveNav(section.id);
          break;
        }
      }
    };

    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#1a1525] overflow-hidden selection:bg-[#7c3aed] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: CLAY_CSS }} />

      {/* --- SIDEBAR (Desktop) --- */}
      <aside className="hidden lg:flex w-[280px] h-full p-4 flex-col z-20">
        <div className="clay w-full h-full flex flex-col p-5 relative">
          
          {/* User Profile Area */}
          <div className="flex flex-col items-center mb-8 mt-4 text-center">
            <div className="w-20 h-20 rounded-[28px] clay-sm flex items-center justify-center mb-4 p-1.5">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Mia Profile" 
                className="w-full h-full rounded-[22px] object-cover"
              />
            </div>
            <h2 className="text-xl font-black text-[#e8e0f5] tracking-tight">Mia Chen</h2>
            <p className="text-sm font-bold text-[#8f7eaf] mt-1">UI/UX Designer & Developer</p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2.5 mt-3">
              <a href="#" className="w-9 h-9 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Github className="w-4 h-4 text-[#e8e0f5]" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Linkedin className="w-4 h-4 text-[#e8e0f5]" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Mail className="w-4 h-4 text-[#e8e0f5]" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 flex-1 w-full px-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-[20px] font-extrabold text-sm transition-all duration-300 ${
                    isActive 
                      ? 'clay-inset text-[#e8e0f5]' 
                      : 'text-[#8f7eaf] hover:text-[#e8e0f5]'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-[#a78bfa]' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom Sidebar - Availability Status */}
          <div className="mt-auto pt-4 px-1">
            <div className="clay-sm w-full py-3 rounded-[18px] flex items-center justify-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="font-extrabold text-[#e8e0f5] text-xs">Available for Work</span>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col h-full relative overflow-y-auto overflow-x-hidden">
        
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 z-10 sticky top-0 bg-[#1a1525]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden clay-sm clay-pill p-3 clay-interactive text-[#e8e0f5]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo / Title */}
            <h1 className="text-lg sm:text-xl font-black text-[#e8e0f5] tracking-tight">
              Mia<span className="text-[#a78bfa]">.</span>Portfolio
            </h1>
          </div>

          {/* Mobile Profile */}
          <button className="lg:hidden clay-sm clay-pill p-1.5 clay-interactive">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
              className="w-9 h-9 rounded-full object-cover" 
              alt="Mia" 
            />
          </button>
        </header>

        {/* Portfolio Content Container */}
        <div className="px-3 sm:px-4 lg:px-6 pb-12 pt-2 flex-1 max-w-6xl w-full mx-auto space-y-6 sm:space-y-8">
          
          {/* Hero Banner */}
          <section id="home" className="clay w-full p-5 sm:p-6 lg:p-10 relative overflow-hidden flex flex-col justify-center min-h-[200px] sm:min-h-[240px]">
             <div className="flex items-center gap-2 mb-2 z-10">
               <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#a78bfa]" />
               <span className="text-[#a78bfa] font-extrabold text-xs sm:text-sm">CREATIVE PORTFOLIO</span>
             </div>
             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#e8e0f5] z-10 mb-3 tracking-tight leading-tight">
               Crafting Digital <br className="sm:hidden"/>Experiences ✨
             </h1>
             <p className="text-[#8f7eaf] font-bold text-sm sm:text-base z-10 max-w-md leading-relaxed">
               I design & build beautiful interfaces that users love. Let's create something amazing together.
             </p>
             
             {/* CTA Button */}
             <button className="mt-4 z-10 clay-sm clay-interactive px-5 sm:px-6 py-3 rounded-[16px] font-extrabold text-white bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] shadow-[0_8px_20px_rgba(124,58,237,0.4)] flex items-center gap-2 w-fit text-xs sm:text-sm">
               View My Work
               <ArrowUpRight className="w-4 h-4" />
             </button>
             
             {/* 3D Soft CSS Shapes */}
             <div className="clay-shape-coin hidden sm:block right-[15%] top-[15%]"></div>
             <div className="clay-shape-chart hidden lg:block right-[5%] bottom-[15%]"></div>
             <div className="clay-shape-leaf hidden md:block right-[28%] bottom-[10%]"></div>
          </section>

          {/* About Section */}
          <section id="about" className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#a78bfa]" />
              <h2 className="text-xl sm:text-2xl font-black text-[#e8e0f5]">About Me</h2>
            </div>
            <p className="text-[#8f7eaf] font-bold text-xs sm:text-sm leading-relaxed max-w-2xl">
              Passionate UI/UX designer & developer crafting beautiful digital experiences. Here's a snapshot of my journey so far.
            </p>
            
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {STATS.map((card) => (
                <div key={card.id} className={`clay-card ${card.tint} p-4 sm:p-5 flex flex-col justify-between h-36 sm:h-44 cursor-pointer group`}>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center shadow-sm backdrop-blur-sm border border-white/10">
                      <card.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: card.trendColor }} />
                    </div>
                    <div className={`flex items-center gap-1 font-extrabold text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[#e8e0f5]`}>
                      {card.trend}
                    </div>
                  </div>
                  
                  <div className="relative z-10 mt-3">
                    <p className="text-[#8f7eaf] font-bold text-[10px] sm:text-xs mb-1">{card.title}</p>
                    <h3 className="text-xl sm:text-2xl font-black text-[#e8e0f5]">{card.value}</h3>
                  </div>

                  {/* Mock SVG Trendline */}
                  <div className="absolute bottom-0 left-0 w-full h-24 opacity-60 pointer-events-none">
                    <svg viewBox="0 0 100 50" fill="none" className="w-full h-full" preserveAspectRatio="none">
                      <path 
                        d={card.path} 
                        stroke={`url(#gradient-${card.id})`} 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <defs>
                        <linearGradient id={`gradient-${card.id}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor={card.trendColor} stopOpacity="0.1" />
                          <stop offset="100%" stopColor={card.trendColor} stopOpacity="1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="clay p-5 sm:p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg sm:text-xl font-black text-[#e8e0f5]">My Skills</h3>
                <Palette className="w-5 h-5 text-[#a78bfa]" />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {SKILLS.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-xs sm:text-sm text-[#e8e0f5]">{skill.name}</span>
                      <span className="font-bold text-[10px] sm:text-xs text-[#8f7eaf]">{skill.level}%</span>
                    </div>
                    <div className="clay-inset h-3 rounded-full p-0.5 flex items-center">
                      <div 
                        className="h-full rounded-full skill-bar-fill transition-all duration-1000"
                        style={{ 
                          '--skill-width': `${skill.level}%`,
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#a78bfa]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#e8e0f5]">My Projects</h2>
              </div>
              <button className="clay-sm clay-interactive px-3 py-1.5 text-xs font-bold text-[#8f7eaf] flex items-center gap-1.5">
                View All <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-[#8f7eaf] font-bold text-xs sm:text-sm leading-relaxed max-w-2xl">
              A collection of my recent work showcasing UI/UX design, web development, and creative problem-solving.
            </p>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((project) => (
                <div key={project.id} className="project-card clay-sm clay-interactive overflow-hidden flex flex-col group cursor-pointer">
                  <div className="relative h-28 sm:h-32 overflow-hidden rounded-t-[16px]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-img w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div 
                      className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-white text-[10px] font-extrabold backdrop-blur-sm"
                      style={{ backgroundColor: `${project.color}cc` }}
                    >
                      {project.category}
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#e8e0f5] group-hover:text-[#a78bfa] transition-colors">{project.title}</h4>
                    <p className="text-[10px] sm:text-[11px] text-[#8f7eaf] font-bold mt-1 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section id="certificates">
            <div className="clay p-5 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#e8e0f5]">Certificates & Awards</h3>
                  <p className="text-[#8f7eaf] font-bold text-xs sm:text-sm mt-1">Professional certifications I've earned</p>
                </div>
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#a78bfa]" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {CERTIFICATES.map((cert) => (
                  <div key={cert.id} className="cert-card clay-sm p-4 flex flex-col gap-3 group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cert.color}20`, border: `2px solid ${cert.color}40` }}>
                        <cert.icon className="w-5 h-5" style={{ color: cert.color }} />
                      </div>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-extrabold text-sm text-[#e8e0f5] group-hover:text-[#a78bfa] transition-colors">{cert.title}</h4>
                      <p className="text-xs text-[#8f7eaf] font-bold mt-1">{cert.issuer}</p>
                      <p className="text-[10px] text-[#8f7eaf] font-bold mt-0.5">Issued: {cert.date}</p>
                      <p className="text-[9px] text-[#8f7eaf] font-mono mt-1.5 opacity-70">ID: {cert.credential}</p>
                    </div>

                    <button className="clay-sm clay-interactive px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-extrabold text-[#e8e0f5] flex items-center justify-center gap-1.5 mt-auto">
                      <Download className="w-3 h-3" />
                      View Certificate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience & Contact Section */}
          <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Experience Timeline */}
            <div className="clay p-5 sm:p-6 flex flex-col">
              <h3 className="text-lg sm:text-xl font-black text-[#e8e0f5] mb-5">Experience</h3>
              <div className="flex-1 flex flex-col gap-3">
                 {EXPERIENCE.map((exp, i) => (
                   <div key={i} className="flex items-center gap-4 p-3 rounded-[20px] clay-interactive hover:clay-sm group">
                     <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] clay-inset flex items-center justify-center bg-white/5 border border-white/10 flex-shrink-0">
                       <exp.icon className={`w-5 h-5 ${exp.color}`} />
                     </div>
                     <div>
                       <p className="font-extrabold text-sm sm:text-[15px] text-[#e8e0f5] group-hover:text-[#a78bfa] transition-colors">{exp.title}</p>
                       <p className="text-[11px] sm:text-xs text-[#8f7eaf] font-bold mt-0.5">{exp.time}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="clay p-5 sm:p-6 flex flex-col">
              <h3 className="text-lg sm:text-xl font-black text-[#e8e0f5] mb-3">Let's Work Together</h3>
              <p className="text-[#8f7eaf] font-bold text-xs sm:text-sm mb-4 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's create something beautiful.
              </p>
              
              <div className="flex flex-col gap-3 flex-1">
                <div className="clay-inset flex items-center px-4 py-3 rounded-xl">
                  <Mail className="w-4 h-4 text-[#a78bfa] mr-2.5" />
                  <span className="text-[#e8e0f5] font-bold text-xs sm:text-sm">mia.chen@email.com</span>
                </div>
                <div className="clay-inset flex items-center px-4 py-3 rounded-xl">
                  <Target className="w-4 h-4 text-[#f472b6] mr-2.5" />
                  <span className="text-[#e8e0f5] font-bold text-xs sm:text-sm">San Francisco, CA</span>
                </div>
              </div>

              <button className="mt-4 clay-sm clay-interactive px-5 py-3 rounded-[16px] font-extrabold text-white bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] shadow-[0_8px_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 w-full text-sm">
                <Mail className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </section>

          {/* Testimonial / Quote Section */}
          <div className="clay p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden">
            <div className="clay-shape-coin hidden sm:block" style={{ width: '40px', height: '40px', left: '10%', top: '20%' }}></div>
            <div className="clay-shape-leaf hidden sm:block" style={{ width: '35px', height: '35px', right: '10%', bottom: '20%' }}></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full clay-inset mx-auto flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-extrabold text-[#e8e0f5] max-w-2xl mx-auto leading-relaxed italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-[#8f7eaf] font-bold mt-3 text-sm">— Steve Jobs</p>
            </div>
          </div>
        </div>
      </main>

      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-center justify-center bg-[#1a1525]/95 backdrop-blur-lg">
          <div className="clay w-[85%] max-w-sm p-6 flex flex-col items-center gap-4">
            <button 
              className="absolute top-4 right-4 clay-sm clay-pill p-3 clay-interactive"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-5 h-5 text-[#e8e0f5]" />
            </button>
            
            <div className="w-16 h-16 rounded-[24px] clay-sm flex items-center justify-center p-1.5 mb-1">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Mia" 
                className="w-full h-full rounded-[20px] object-cover"
              />
            </div>
            <h2 className="text-lg font-black text-[#e8e0f5]">Mia Chen</h2>
            
            <nav className="flex flex-col gap-3 w-full mt-2">
              {NAV_LINKS.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-5 py-3 rounded-[18px] font-extrabold text-sm transition-all duration-300 ${
                      isActive 
                        ? 'clay-inset text-[#e8e0f5]' 
                        : 'text-[#8f7eaf]'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-[#a78bfa]' : ''}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
