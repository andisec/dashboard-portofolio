import React, { useState } from 'react';
import { 
  LayoutDashboard, Code2, Palette, Camera,
  Search, Bell, Home, 
  Award, Activity, Target, Settings,
  ArrowUpRight, ExternalLink, Menu,
  Github, Linkedin, Mail, Heart,
  Briefcase, GraduationCap, Star, Sparkles
} from 'lucide-react';

// ==========================================
// CSS STYLES FOR CLAYMORPHISM & SOFT UI
// ==========================================
const CLAY_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  :root {
    --bg-main: #ebe6f5;
    --shadow-drk: #c8bce0;
    --shadow-lgt: #ffffff;
    --text-main: #4a3b69;
    --text-muted: #8f7eaf;
  }

  * {
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    margin: 0;
    overflow: hidden; 
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* --- Core Clay Styles --- */
  .clay {
    background-color: var(--bg-main);
    border-radius: 32px;
    box-shadow: 
      12px 12px 24px var(--shadow-drk),
      -12px -12px 24px var(--shadow-lgt),
      inset 3px 3px 6px rgba(255, 255, 255, 0.8),
      inset -3px -3px 6px rgba(150, 130, 180, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  .clay-sm {
    background-color: var(--bg-main);
    border-radius: 20px;
    box-shadow: 
      6px 6px 12px var(--shadow-drk),
      -6px -6px 12px var(--shadow-lgt),
      inset 2px 2px 4px rgba(255, 255, 255, 0.8),
      inset -2px -2px 4px rgba(150, 130, 180, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  .clay-inset {
    background-color: var(--bg-main);
    border-radius: 9999px;
    box-shadow: 
      inset 6px 6px 12px var(--shadow-drk),
      inset -6px -6px 12px var(--shadow-lgt);
    border: 1px solid rgba(255, 255, 255, 0.2);
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
      inset 3px 3px 6px rgba(255, 255, 255, 0.9),
      inset -3px -3px 6px rgba(150, 130, 180, 0.15);
  }
  
  .clay-interactive:active {
    transform: translateY(2px) scale(0.98);
    box-shadow: 
      4px 4px 10px var(--shadow-drk),
      -4px -4px 10px var(--shadow-lgt),
      inset 4px 4px 8px rgba(150, 130, 180, 0.2),
      inset -4px -4px 8px rgba(255, 255, 255, 0.7);
  }

  /* --- Metric Cards --- */
  .clay-card {
    border-radius: 32px;
    box-shadow: 
      14px 14px 28px var(--shadow-drk),
      -14px -14px 28px var(--shadow-lgt);
    border: 3px solid rgba(255, 255, 255, 0.6);
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
      inset 6px 6px 15px rgba(255, 255, 255, 0.9),
      inset -6px -6px 15px rgba(150, 130, 180, 0.15);
  }

  /* Subtle Tints for Cards */
  .tint-purple { background: linear-gradient(135deg, #f6f0ff, #e8dafb); }
  .tint-pink   { background: linear-gradient(135deg, #fff0f5, #fbdce6); }
  .tint-yellow { background: linear-gradient(135deg, #fffdf0, #fcf1cb); }
  .tint-blue   { background: linear-gradient(135deg, #f0f8ff, #dceefb); }

  /* --- 3D Hero Floating Shapes --- */
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
    background: linear-gradient(135deg, #ffe28a, #ffbb00);
    box-shadow: 
      15px 15px 30px rgba(200, 150, 30, 0.25),
      -10px -10px 20px rgba(255, 255, 255, 0.6),
      inset 8px 8px 16px rgba(255, 255, 255, 0.9),
      inset -8px -8px 16px rgba(200, 140, 0, 0.4);
    animation: float1 6s ease-in-out infinite;
  }
  
  .clay-shape-chart {
    position: absolute;
    width: 60px;
    height: 90px;
    border-radius: 20px;
    background: linear-gradient(135deg, #d3c8ea, #a688fa);
    box-shadow: 
      15px 15px 30px rgba(166, 136, 250, 0.3),
      -10px -10px 20px rgba(255, 255, 255, 0.6),
      inset 6px 6px 12px rgba(255, 255, 255, 0.8),
      inset -6px -6px 12px rgba(100, 80, 150, 0.4);
    animation: float2 5s ease-in-out infinite;
  }

  .clay-shape-leaf {
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 0 40px 0 40px;
    background: linear-gradient(135deg, #a7f3d0, #10b981);
    box-shadow: 
      15px 15px 30px rgba(16, 185, 129, 0.25),
      -10px -10px 20px rgba(255, 255, 255, 0.6),
      inset 8px 8px 16px rgba(255, 255, 255, 0.8),
      inset -8px -8px 16px rgba(4, 90, 60, 0.4);
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
`;

// ==========================================
// DATA & CONFIG
// ==========================================
const NAV_LINKS = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: Heart, label: 'About' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

const STATS = [
  { 
    id: 1, title: "Years Experience", value: "5+", trend: "Since 2020", isUp: true, 
    tint: "tint-purple", icon: Award, trendColor: "#8c52ff",
    path: "M 0 35 C 20 35, 40 10, 60 20 C 80 30, 90 5, 100 5"
  },
  { 
    id: 2, title: "Projects Done", value: "80+", trend: "Completed", isUp: true, 
    tint: "tint-pink", icon: Code2, trendColor: "#ff528a",
    path: "M 0 25 C 25 35, 40 15, 60 25 C 80 35, 90 10, 100 0"
  },
  { 
    id: 3, title: "Happy Clients", value: "50+", trend: "Worldwide", isUp: true, 
    tint: "tint-yellow", icon: Star, trendColor: "#eab308",
    path: "M 0 40 C 30 40, 40 5, 60 15 C 80 25, 90 0, 100 0"
  },
  { 
    id: 4, title: "Awards Won", value: "12", trend: "Design Awards", isUp: true, 
    tint: "tint-blue", icon: Sparkles, trendColor: "#0ea5e9",
    path: "M 0 30 C 20 20, 40 25, 60 10 C 80 5, 90 15, 100 5"
  }
];

const SKILLS = [
  { name: "UI/UX Design", level: 95, color: "#8c52ff" },
  { name: "React / Next.js", level: 90, color: "#ff528a" },
  { name: "Figma & Prototyping", level: 92, color: "#eab308" },
  { name: "TypeScript", level: 85, color: "#0ea5e9" },
  { name: "Motion Design", level: 78, color: "#10b981" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Finova Banking App",
    category: "UI/UX Design",
    description: "A modern fintech mobile app with claymorphism design system",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#8c52ff"
  },
  {
    id: 2,
    title: "EcoTrack Dashboard",
    category: "Web Development",
    description: "Sustainability tracking platform with real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#10b981"
  },
  {
    id: 3,
    title: "Artisan Marketplace",
    category: "E-Commerce",
    description: "Handcrafted goods marketplace with immersive shopping experience",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#ff528a"
  },
  {
    id: 4,
    title: "MindFlow Meditation",
    category: "Mobile App",
    description: "Mindfulness and meditation app with calming micro-interactions",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    color: "#eab308"
  }
];

const EXPERIENCE = [
  { icon: Briefcase, title: 'Senior UI Designer @ Google', time: '2023 — Present', color: 'text-[#8c52ff]' },
  { icon: GraduationCap, title: 'Design Lead @ StartupXYZ', time: '2021 — 2023', color: 'text-emerald-500' },
  { icon: Award, title: 'Freelance Designer', time: '2020 — 2021', color: 'text-rose-500' },
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#ebe6f5] overflow-hidden selection:bg-[#c8bce0] selection:text-[#4a3b69]">
      <style dangerouslySetInnerHTML={{ __html: CLAY_CSS }} />

      {/* --- SIDEBAR (Desktop) --- */}
      <aside className="hidden lg:flex w-[320px] h-full p-6 flex-col z-20">
        <div className="clay w-full h-full flex flex-col p-6 relative">
          
          {/* User Profile Area */}
          <div className="flex flex-col items-center mb-10 mt-6 text-center">
            <div className="w-24 h-24 rounded-[32px] clay-sm flex items-center justify-center mb-5 p-2">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Mia Profile" 
                className="w-full h-full rounded-[24px] object-cover"
              />
            </div>
            <h2 className="text-2xl font-black text-[#4a3b69] tracking-tight">Mia Chen</h2>
            <p className="text-[15px] font-bold text-[#8f7eaf] mt-1">UI/UX Designer & Developer</p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Github className="w-4 h-4 text-[#4a3b69]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Linkedin className="w-4 h-4 text-[#4a3b69]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Mail className="w-4 h-4 text-[#4a3b69]" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col gap-5 flex-1 w-full px-2">
            {NAV_LINKS.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-[24px] font-extrabold text-[16px] transition-all duration-300 ${
                    isActive 
                      ? 'clay-inset text-[#4a3b69]' 
                      : 'text-[#8f7eaf] hover:text-[#4a3b69]'
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${isActive ? 'text-[#8c52ff]' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom Sidebar - Availability Status */}
          <div className="mt-auto pt-6 px-2">
            <div className="clay-sm w-full py-4 rounded-[24px] flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="font-extrabold text-[#4a3b69] text-sm">Available for Work</span>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col h-full relative overflow-y-auto overflow-x-hidden">
        
        {/* Header */}
        <header className="flex items-center justify-between p-6 lg:px-10 lg:pt-8 z-10 sticky top-0 bg-[#ebe6f5]/80 backdrop-blur-md">
          <div className="flex items-center gap-4 w-full max-w-lg">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden clay-sm clay-pill p-4 clay-interactive text-[#6a5b89]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search Bar */}
            <div className="clay-inset flex items-center px-6 py-4 flex-1">
              <Search className="w-5 h-5 text-[#8f7eaf]" />
              <input 
                type="text" 
                placeholder="Search my work..." 
                className="bg-transparent border-none outline-none flex-1 ml-4 text-[#4a3b69] placeholder-[#8f7eaf] font-bold text-[15px]"
              />
            </div>
          </div>

          <div className="flex items-center gap-5 ml-4">
            <button className="clay-sm clay-pill p-4 clay-interactive text-[#8f7eaf] hover:text-[#4a3b69]">
              <Bell className="w-6 h-6" />
            </button>
            <button className="lg:hidden clay-sm clay-pill p-2 clay-interactive">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                className="w-10 h-10 rounded-full object-cover" 
                alt="Mia" 
              />
            </button>
          </div>
        </header>

        {/* Portfolio Content Container */}
        <div className="px-6 lg:px-10 pb-16 pt-4 flex-1 max-w-7xl w-full mx-auto">
          
          {/* Hero Banner */}
          <div className="clay w-full p-8 lg:p-14 relative overflow-hidden flex flex-col justify-center min-h-[260px]">
             <div className="flex items-center gap-2 mb-3 z-10">
               <Sparkles className="w-5 h-5 text-[#8c52ff]" />
               <span className="text-[#8c52ff] font-extrabold text-sm">CREATIVE PORTFOLIO</span>
             </div>
             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4a3b69] z-10 mb-4 tracking-tight leading-tight">
               Crafting Digital <br className="lg:hidden"/>Experiences ✨
             </h1>
             <p className="text-[#8f7eaf] font-bold text-lg z-10 max-w-md leading-relaxed">
               I design & build beautiful interfaces that users love. Let's create something amazing together.
             </p>
             
             {/* CTA Button */}
             <button className="mt-6 z-10 clay-sm clay-interactive px-8 py-4 rounded-[20px] font-extrabold text-white bg-gradient-to-r from-[#b490ff] to-[#8c52ff] shadow-[0_8px_20px_rgba(140,82,255,0.3)] flex items-center gap-2 w-fit">
               View My Work
               <ArrowUpRight className="w-5 h-5" />
             </button>
             
             {/* 3D Soft CSS Shapes */}
             <div className="clay-shape-coin hidden sm:block right-[15%] top-[15%]"></div>
             <div className="clay-shape-chart hidden lg:block right-[5%] bottom-[15%]"></div>
             <div className="clay-shape-leaf hidden md:block right-[28%] bottom-[10%]"></div>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mt-10">
             {STATS.map((card) => (
               <div key={card.id} className={`clay-card ${card.tint} p-7 flex flex-col justify-between h-56 cursor-pointer group`}>
                 <div className="flex justify-between items-start relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center shadow-sm backdrop-blur-sm border border-white/60">
                     <card.icon className="w-6 h-6" style={{ color: card.trendColor }} />
                   </div>
                   <div className={`flex items-center gap-1 font-extrabold text-xs px-3 py-1 rounded-full bg-white/50 border border-white/60 text-[#4a3b69]`}>
                     {card.trend}
                   </div>
                 </div>
                 
                 <div className="relative z-10 mt-4">
                   <p className="text-[#8f7eaf] font-bold text-sm mb-1">{card.title}</p>
                   <h3 className="text-3xl font-black text-[#4a3b69]">{card.value}</h3>
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

          {/* Skills & Projects Section */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Skills Section */}
            <div className="clay p-8 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-[#4a3b69]">My Skills</h3>
                <Palette className="w-6 h-6 text-[#8c52ff]" />
              </div>
              <div className="flex-1 flex flex-col gap-5">
                {SKILLS.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-sm text-[#4a3b69]">{skill.name}</span>
                      <span className="font-bold text-xs text-[#8f7eaf]">{skill.level}%</span>
                    </div>
                    <div className="clay-inset h-4 rounded-full p-1 flex items-center">
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

            {/* Projects Section */}
            <div className="clay p-8 lg:col-span-2 min-h-[340px] flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-[#4a3b69]">Featured Projects</h3>
                <button className="clay-sm clay-interactive px-4 py-2 text-sm font-bold text-[#8f7eaf] flex items-center gap-2">
                  View All <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="project-card clay-sm clay-interactive overflow-hidden flex flex-col group cursor-pointer">
                    <div className="relative h-32 overflow-hidden rounded-t-[18px]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-img w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div 
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-extrabold backdrop-blur-sm"
                        style={{ backgroundColor: `${project.color}cc` }}
                      >
                        {project.category}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h4 className="font-extrabold text-[15px] text-[#4a3b69] group-hover:text-[#8c52ff] transition-colors">{project.title}</h4>
                      <p className="text-[12px] text-[#8f7eaf] font-bold mt-1 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Contact Section */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Experience Timeline */}
            <div className="clay p-8 flex flex-col">
              <h3 className="text-2xl font-black text-[#4a3b69] mb-8">Experience</h3>
              <div className="flex-1 flex flex-col gap-5">
                 {EXPERIENCE.map((exp, i) => (
                   <div key={i} className="flex items-center gap-5 p-4 rounded-[24px] clay-interactive hover:clay-sm group">
                     <div className="w-14 h-14 rounded-[20px] clay-inset flex items-center justify-center bg-white/30 border border-white/50">
                       <exp.icon className={`w-6 h-6 ${exp.color}`} />
                     </div>
                     <div>
                       <p className="font-extrabold text-[16px] text-[#4a3b69] group-hover:text-[#8c52ff] transition-colors">{exp.title}</p>
                       <p className="text-[13px] text-[#8f7eaf] font-bold mt-1">{exp.time}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="clay p-8 flex flex-col">
              <h3 className="text-2xl font-black text-[#4a3b69] mb-4">Let's Work Together</h3>
              <p className="text-[#8f7eaf] font-bold text-sm mb-6 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's create something beautiful.
              </p>
              
              <div className="flex flex-col gap-4 flex-1">
                <div className="clay-inset flex items-center px-5 py-4 rounded-2xl">
                  <Mail className="w-5 h-5 text-[#8c52ff] mr-3" />
                  <span className="text-[#4a3b69] font-bold text-sm">mia.chen@email.com</span>
                </div>
                <div className="clay-inset flex items-center px-5 py-4 rounded-2xl">
                  <Target className="w-5 h-5 text-[#ff528a] mr-3" />
                  <span className="text-[#4a3b69] font-bold text-sm">San Francisco, CA</span>
                </div>
              </div>

              <button className="mt-6 clay-sm clay-interactive px-6 py-4 rounded-[20px] font-extrabold text-white bg-gradient-to-r from-[#b490ff] to-[#8c52ff] shadow-[0_8px_20px_rgba(140,82,255,0.3)] flex items-center justify-center gap-2 w-full">
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Testimonial / Quote Section */}
          <div className="mt-10 clay p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="clay-shape-coin hidden sm:block" style={{ width: '50px', height: '50px', left: '10%', top: '20%' }}></div>
            <div className="clay-shape-leaf hidden sm:block" style={{ width: '45px', height: '45px', right: '10%', bottom: '20%' }}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full clay-inset mx-auto flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-rose-400" />
              </div>
              <p className="text-xl lg:text-2xl font-extrabold text-[#4a3b69] max-w-2xl mx-auto leading-relaxed italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-[#8f7eaf] font-bold mt-4">— Steve Jobs</p>
            </div>
          </div>
        </div>
      </main>



      {/* --- MOBILE MENU OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-center justify-center bg-[#ebe6f5]/95 backdrop-blur-lg">
          <div className="clay w-[85%] max-w-sm p-8 flex flex-col items-center gap-6">
            <button 
              className="absolute top-6 right-6 clay-sm clay-pill p-4 clay-interactive"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Menu className="w-5 h-5 text-[#4a3b69]" />
            </button>
            
            <div className="w-20 h-20 rounded-[28px] clay-sm flex items-center justify-center p-2 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Mia" 
                className="w-full h-full rounded-[22px] object-cover"
              />
            </div>
            <h2 className="text-xl font-black text-[#4a3b69]">Mia Chen</h2>
            
            <nav className="flex flex-col gap-4 w-full mt-4">
              {NAV_LINKS.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveNav(item.id); setIsMobileMenuOpen(false); }}
                    className={`flex items-center gap-4 px-6 py-4 rounded-[24px] font-extrabold text-[16px] transition-all duration-300 ${
                      isActive 
                        ? 'clay-inset text-[#4a3b69]' 
                        : 'text-[#8f7eaf]'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${isActive ? 'text-[#8c52ff]' : ''}`} />
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
