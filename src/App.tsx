import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Palette, Camera, Home, Award, Target,
  ArrowUpRight, ExternalLink, Menu, X,
  Github, Linkedin, Mail, Heart,
  Briefcase, GraduationCap, Star, Sparkles,
  FileText, Download, CheckCircle, Search,
  Moon, Sun, ArrowUp, Play, Pause, SkipForward,
  Clock, User, ChevronRight, Rocket, Send
} from 'lucide-react';
import {
  NAV_LINKS, STATS, SKILLS, PROJECTS, PROJECT_CATEGORIES,
  CERTIFICATES, EXPERIENCE, PROCESS_STEPS, TOOLS,
  TESTIMONIALS, BLOG_POSTS, PARTNER_LOGOS, TYPING_TEXTS
} from './data';

// Icon mapping helper
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Home, Heart, Briefcase, Award, Mail, FileText,
  Code2, Star, Sparkles, Palette, Camera, Target,
  Search, Rocket, GraduationCap
};

const getIcon = (name: string) => ICON_MAP[name] || Home;

// ==========================================
// CSS STYLES
// ==========================================
const getClayCSS = (isDark: boolean) => `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  :root {
    --bg-main: ${isDark ? '#1a1525' : '#ebe6f5'};
    --bg-card: ${isDark ? '#231d30' : '#f5f0ff'};
    --shadow-drk: ${isDark ? '#0f0b16' : '#c8bce0'};
    --shadow-lgt: ${isDark ? '#2d2540' : '#ffffff'};
    --text-main: ${isDark ? '#e8e0f5' : '#4a3b69'};
    --text-muted: ${isDark ? '#8f7eaf' : '#8f7eaf'};
    --accent: #a78bfa;
    --accent-dark: #7c3aed;
  }

  * { font-family: 'Nunito', sans-serif; box-sizing: border-box; }
  
  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    margin: 0;
    overflow: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  ::-webkit-scrollbar { width: 6px; background: transparent; }
  ::-webkit-scrollbar-track { background: var(--bg-main); }
  ::-webkit-scrollbar-thumb { background: var(--shadow-lgt); border-radius: 10px; }

  .clay {
    background-color: var(--bg-card);
    border-radius: 24px;
    box-shadow: 10px 10px 20px var(--shadow-drk), -10px -10px 20px var(--shadow-lgt),
      inset 2px 2px 4px rgba(255,255,255,${isDark ? '0.05' : '0.8'}),
      inset -2px -2px 4px rgba(${isDark ? '0,0,0,0.3' : '150,130,180,0.15'});
    border: 2px solid rgba(255,255,255,${isDark ? '0.08' : '0.5'});
    transition: all 0.5s ease;
  }

  .clay-sm {
    background-color: var(--bg-card);
    border-radius: 16px;
    box-shadow: 5px 5px 10px var(--shadow-drk), -5px -5px 10px var(--shadow-lgt),
      inset 2px 2px 4px rgba(255,255,255,${isDark ? '0.05' : '0.8'}),
      inset -2px -2px 4px rgba(${isDark ? '0,0,0,0.3' : '150,130,180,0.15'});
    border: 2px solid rgba(255,255,255,${isDark ? '0.08' : '0.5'});
    transition: all 0.5s ease;
  }

  .clay-inset {
    background-color: var(--bg-main);
    border-radius: 9999px;
    box-shadow: inset 5px 5px 10px var(--shadow-drk), inset -5px -5px 10px var(--shadow-lgt);
    border: 1px solid rgba(255,255,255,${isDark ? '0.05' : '0.2'});
    transition: all 0.5s ease;
  }

  .clay-interactive {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  .clay-interactive:hover {
    transform: translateY(-2px) scale(1.02);
  }
  .clay-interactive:active {
    transform: translateY(2px) scale(0.98);
  }

  .clay-card {
    border-radius: 24px;
    box-shadow: 12px 12px 24px var(--shadow-drk), -12px -12px 24px var(--shadow-lgt);
    border: 2px solid rgba(255,255,255,${isDark ? '0.1' : '0.6'});
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }
  .clay-card:hover { transform: translateY(-4px); }

  .tint-purple { background: linear-gradient(135deg, ${isDark ? '#2d2540, #3d2e5c' : '#f6f0ff, #e8dafb'}); }
  .tint-pink { background: linear-gradient(135deg, ${isDark ? '#3d2030, #4d2840' : '#fff0f5, #fbdce6'}); }
  .tint-yellow { background: linear-gradient(135deg, ${isDark ? '#3d3520, #4d4228' : '#fffdf0, #fcf1cb'}); }
  .tint-blue { background: linear-gradient(135deg, ${isDark ? '#203040, #284050' : '#f0f8ff, #dceefb'}); }

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
    position: absolute; width: 60px; height: 60px; border-radius: 50%;
    background: linear-gradient(135deg, #c4a0ff, #7c3aed);
    box-shadow: 12px 12px 24px rgba(124,58,237,0.3), -8px -8px 16px rgba(255,255,255,0.1),
      inset 6px 6px 12px rgba(255,255,255,0.2), inset -6px -6px 12px rgba(60,20,120,0.5);
    animation: float1 6s ease-in-out infinite;
  }
  .clay-shape-chart {
    position: absolute; width: 45px; height: 70px; border-radius: 16px;
    background: linear-gradient(135deg, #6d5a8a, #a78bfa);
    box-shadow: 12px 12px 24px rgba(167,139,250,0.2), -8px -8px 16px rgba(255,255,255,0.1),
      inset 5px 5px 10px rgba(255,255,255,0.15), inset -5px -5px 10px rgba(40,20,80,0.4);
    animation: float2 5s ease-in-out infinite;
  }
  .clay-shape-leaf {
    position: absolute; width: 55px; height: 55px; border-radius: 0 30px 0 30px;
    background: linear-gradient(135deg, #4ade80, #10b981);
    box-shadow: 12px 12px 24px rgba(16,185,129,0.2), -8px -8px 16px rgba(255,255,255,0.1),
      inset 6px 6px 12px rgba(255,255,255,0.15), inset -6px -6px 12px rgba(4,90,60,0.4);
    animation: float3 7s ease-in-out infinite;
  }

  @keyframes skillFill { from { width: 0%; } to { width: var(--skill-width); } }
  .skill-bar-fill { animation: skillFill 1.5s ease-out forwards; }

  .project-img { transition: transform 0.5s ease; }
  .project-card:hover .project-img { transform: scale(1.05); }

  @keyframes typing { from { width: 0; } to { width: 100%; } }
  @keyframes blink { 50% { border-color: transparent; } }
  .typing-text {
    overflow: hidden; white-space: nowrap;
    border-right: 3px solid var(--accent);
    animation: typing 2s steps(20) forwards, blink 0.75s step-end infinite;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }

  @keyframes spin { to { transform: rotate(360deg); } }
  .loader-spin { animation: spin 1s linear infinite; }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(167,139,250,0.3); }
    50% { box-shadow: 0 0 40px rgba(167,139,250,0.6); }
  }
  .glow-pulse { animation: pulse-glow 2s ease-in-out infinite; }

  .custom-cursor {
    width: 20px; height: 20px; border-radius: 50%;
    background: radial-gradient(circle, rgba(167,139,250,0.8), rgba(124,58,237,0.3));
    position: fixed; pointer-events: none; z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: screen;
  }
  .custom-cursor-ring {
    width: 40px; height: 40px; border-radius: 50%;
    border: 2px solid rgba(167,139,250,0.5);
    position: fixed; pointer-events: none; z-index: 9998;
    transition: all 0.15s ease-out;
  }

  .scroll-progress {
    position: fixed; top: 0; left: 0; height: 3px; z-index: 100;
    background: linear-gradient(90deg, #a78bfa, #7c3aed, #f472b6);
    transition: width 0.1s ease;
  }

  .section-enter { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
  .section-visible { opacity: 1; transform: translateY(0); }

  .music-visualizer {
    display: flex; align-items: end; gap: 2px; height: 16px;
  }
  .music-bar {
    width: 3px; background: var(--accent); border-radius: 2px;
    animation: musicBar 0.8s ease-in-out infinite;
  }
  .music-bar:nth-child(1) { animation-delay: 0s; }
  .music-bar:nth-child(2) { animation-delay: 0.1s; }
  .music-bar:nth-child(3) { animation-delay: 0.2s; }
  .music-bar:nth-child(4) { animation-delay: 0.3s; }
  .music-bar:nth-child(5) { animation-delay: 0.4s; }
  @keyframes musicBar {
    0%, 100% { height: 4px; }
    50% { height: 16px; }
  }

  html { scroll-behavior: smooth; }
`;

// ==========================================
// PRELOADER
// ==========================================
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#1a1525]">
      <div className="clay-sm p-8 flex flex-col items-center gap-6 glow-pulse">
        <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-black text-[#e8e0f5]">Mia<span className="text-[#a78bfa]">.</span>Portfolio</h2>
        <div className="w-48 h-2 rounded-full bg-[#2d2540] overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-bold text-[#8f7eaf]">{progress}%</p>
      </div>
    </div>
  );
}

// ==========================================
// CUSTOM CURSOR
// ==========================================
function CustomCursor({ enabled }: { enabled: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - 20}px`;
        ringRef.current.style.top = `${e.clientY - 20}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
}

// ==========================================
// PROJECT MODAL
// ==========================================
function ProjectModal({ project, onClose, isDark }: { project: typeof PROJECTS[0] | null; onClose: () => void; isDark: boolean }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="clay w-full max-w-lg max-h-[85vh] overflow-y-auto p-5 sm:p-6 fade-in-up" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }}></div>
            <span className="text-xs font-bold text-[#8f7eaf]">{project.category}</span>
          </div>
          <button onClick={onClose} className="clay-sm p-2 clay-interactive">
            <X className="w-4 h-4 text-[#e8e0f5]" />
          </button>
        </div>

        <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden mb-4">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-[#e8e0f5] mb-2">{project.title}</h2>
        <p className="text-sm text-[#8f7eaf] font-bold leading-relaxed mb-4">{project.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="clay-sm p-3">
            <p className="text-[10px] text-[#8f7eaf] font-bold">Year</p>
            <p className="text-sm font-extrabold text-[#e8e0f5]">{project.year}</p>
          </div>
          <div className="clay-sm p-3">
            <p className="text-[10px] text-[#8f7eaf] font-bold">Client</p>
            <p className="text-sm font-extrabold text-[#e8e0f5]">{project.client}</p>
          </div>
          <div className="clay-sm p-3 col-span-2">
            <p className="text-[10px] text-[#8f7eaf] font-bold mb-1">My Role</p>
            <p className="text-sm font-extrabold text-[#e8e0f5]">{project.role}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-bold text-[#8f7eaf] mb-2">Tools Used</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-extrabold text-[#e8e0f5] clay-inset" style={{ borderRadius: '12px' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full clay-sm clay-interactive py-3 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-4" />
          View Live Project
        </button>
      </div>
    </div>
  );
}

// ==========================================
// MUSIC PLAYER
// ==========================================
function MusicPlayer({ isDark }: { isDark: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const tracks = ["Lofi Chill", "Focus Beats", "Ambient"];

  return (
    <div className="clay-sm px-3 py-2 flex items-center gap-2">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-7 h-7 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] flex items-center justify-center flex-shrink-0"
      >
        {isPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white ml-0.5" />}
      </button>
      {isPlaying && (
        <div className="music-visualizer">
          {[1,2,3,4,5].map(i => <div key={i} className="music-bar" />)}
        </div>
      )}
      <span className="text-[10px] font-bold text-[#8f7eaf] truncate max-w-[60px]">{tracks[currentTrack]}</span>
      <button 
        onClick={() => setCurrentTrack((currentTrack + 1) % tracks.length)}
        className="clay-interactive"
      >
        <SkipForward className="w-3 h-3 text-[#8f7eaf]" />
      </button>
    </div>
  );
}

// ==========================================
// MAIN APP
// ==========================================
export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [visitorCount, setVisitorCount] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Visitor counter
  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitorCount') || '0') + 1;
    localStorage.setItem('visitorCount', count.toString());
    setVisitorCount(count);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentFullText = TYPING_TEXTS[typingIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentFullText.length) {
      timeout = setTimeout(() => {
        setTypingText(currentFullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypingText(currentFullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTypingIndex((typingIndex + 1) % TYPING_TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, typingIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Scroll handler
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = main;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 300);

      // Update active nav
      const sections = NAV_LINKS.map(link => ({
        id: link.id,
        element: document.getElementById(link.id)
      }));
      const scrollPosition = scrollTop + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveNav(section.id);
          break;
        }
      }
    };

    main.addEventListener('scroll', handleScroll);
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element && mainRef.current) {
      mainRef.current.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const filteredProjects = projectFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectFilter);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`flex h-screen w-full overflow-hidden selection:bg-[#7c3aed] selection:text-white`} style={{ backgroundColor: isDark ? '#1a1525' : '#ebe6f5' }}>
      <style dangerouslySetInnerHTML={{ __html: getClayCSS(isDark) }} />
      <CustomCursor enabled={isDark} />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* --- SIDEBAR --- */}
      <aside className="hidden lg:flex w-[260px] h-full p-3 flex-col z-20">
        <div className="clay w-full h-full flex flex-col p-4 relative">
          {/* Profile */}
          <div className="flex flex-col items-center mb-6 mt-3 text-center">
            <div className="w-24 h-24 rounded-[28px] clay-sm flex items-center justify-center mb-3 p-1.5">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Mia" className="w-full h-full rounded-[24px] object-cover"
              />
            </div>
            <h2 className="text-lg font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Mia Chen</h2>
            <p className="text-xs font-bold mt-1" style={{ color: '#8f7eaf' }}>
              <span className="typing-text">{typingText}</span>
              <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            </p>
            <div className="flex items-center gap-2 mt-3">
              <a href="#" className="w-8 h-8 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Github className="w-3.5 h-3.5" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Linkedin className="w-3.5 h-3.5" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full clay-inset flex items-center justify-center clay-interactive">
                <Mail className="w-3.5 h-3.5" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2 flex-1 w-full px-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeNav === item.id;
              const Icon = getIcon(item.icon);
              return (
                <button key={item.id} onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-[16px] font-extrabold text-xs transition-all duration-300 ${
                    isActive ? 'clay-inset' : ''
                  }`}
                  style={{ color: isActive ? (isDark ? '#e8e0f5' : '#4a3b69') : '#8f7eaf' }}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#a78bfa]' : ''}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="mt-auto pt-3 space-y-2 px-1">
            <MusicPlayer isDark={isDark} />
            <div className="clay-sm w-full py-2.5 rounded-[14px] flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-extrabold text-[10px]" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Available for Work</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[10px] font-bold" style={{ color: '#8f7eaf' }}>
              <User className="w-3 h-3" />
              <span>{visitorCount} visitors</span>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN --- */}
      <main ref={mainRef} className="flex-1 flex flex-col h-full relative overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-3 sm:px-5 py-3 z-10 sticky top-0 backdrop-blur-md" style={{ backgroundColor: isDark ? 'rgba(26,21,37,0.8)' : 'rgba(235,230,245,0.8)' }}>
          <div className="flex items-center gap-2">
            <button className="lg:hidden clay-sm clay-pill p-2.5 clay-interactive" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-4 h-4" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }} />
            </button>
            <h1 className="text-base sm:text-lg font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>
              Mia<span className="text-[#a78bfa]">.</span>Portfolio
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="clay-sm clay-pill p-2.5 clay-interactive">
              {isDark ? <Sun className="w-4 h-4 text-[#fbbf24]" /> : <Moon className="w-4 h-4 text-[#7c3aed]" />}
            </button>
            <button className="lg:hidden clay-sm clay-pill p-1.5 clay-interactive">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" className="w-7 h-7 rounded-full object-cover" alt="Mia" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="px-3 sm:px-5 lg:px-6 pb-12 pt-2 flex-1 max-w-6xl w-full mx-auto space-y-6">
          
          {/* HOME */}
          <section id="home" className="clay w-full p-5 sm:p-8 relative overflow-hidden flex flex-col justify-center min-h-[180px] sm:min-h-[220px]">
            <div className="flex items-center gap-2 mb-2 z-10">
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
              <span className="text-[#a78bfa] font-extrabold text-xs">CREATIVE PORTFOLIO</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black z-10 mb-2 tracking-tight leading-tight" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>
              Crafting Digital<br/>Experiences ✨
            </h1>
            <p className="font-bold text-xs sm:text-sm z-10 max-w-md leading-relaxed" style={{ color: '#8f7eaf' }}>
              I design & build beautiful interfaces that users love. Let's create something amazing together.
            </p>
            <button onClick={() => scrollToSection('projects')} className="mt-4 z-10 clay-sm clay-interactive px-5 py-2.5 rounded-[14px] font-extrabold text-white bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] flex items-center gap-2 w-fit text-xs sm:text-sm">
              View My Work <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="clay-shape-coin hidden sm:block" style={{ right: '15%', top: '15%' }}></div>
            <div className="clay-shape-chart hidden lg:block" style={{ right: '5%', bottom: '15%' }}></div>
            <div className="clay-shape-leaf hidden md:block" style={{ right: '28%', bottom: '10%' }}></div>
          </section>

          {/* ABOUT */}
          <section id="about" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#a78bfa]" />
              <h2 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>About Me</h2>
            </div>
            <p className="font-bold text-xs leading-relaxed max-w-2xl" style={{ color: '#8f7eaf' }}>
              Passionate UI/UX designer & developer crafting beautiful digital experiences. Here's a snapshot of my journey.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {STATS.map((card) => {
                const Icon = getIcon(card.icon);
                return (
                  <div key={card.id} className={`clay-card ${card.tint} p-3 sm:p-4 flex flex-col justify-between h-32 sm:h-36 cursor-pointer group`}>
                    <div className="flex justify-between items-start relative z-10">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                        <Icon className="w-4 h-4" style={{ color: card.trendColor }} />
                      </div>
                      <span className="font-extrabold text-[9px] px-2 py-0.5 rounded-full bg-white/10 border border-white/10" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{card.trend}</span>
                    </div>
                    <div className="relative z-10 mt-2">
                      <p className="font-bold text-[10px] mb-0.5" style={{ color: '#8f7eaf' }}>{card.title}</p>
                      <h3 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{card.value}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-16 opacity-50 pointer-events-none">
                      <svg viewBox="0 0 100 50" fill="none" className="w-full h-full" preserveAspectRatio="none">
                        <path d={card.path} stroke={`url(#g-${card.id})`} strokeWidth="3" strokeLinecap="round" />
                        <defs><linearGradient id={`g-${card.id}`} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={card.trendColor} stopOpacity="0.1" /><stop offset="100%" stopColor={card.trendColor} stopOpacity="1" /></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="clay p-4 sm:p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base sm:text-lg font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>My Skills</h3>
                <Palette className="w-4 h-4 text-[#a78bfa]" />
              </div>
              <div className="flex flex-col gap-3">
                {SKILLS.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-xs" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{skill.name}</span>
                      <span className="font-bold text-[10px]" style={{ color: '#8f7eaf' }}>{skill.level}%</span>
                    </div>
                    <div className="clay-inset h-2.5 rounded-full p-0.5 flex items-center">
                      <div className="h-full rounded-full skill-bar-fill" style={{ '--skill-width': `${skill.level}%`, width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})` } as React.CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="clay p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-black mb-4" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Tools I Use</h3>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {TOOLS.map((tool, i) => (
                  <div key={i} className="clay-sm p-2 sm:p-3 flex flex-col items-center gap-1 clay-interactive">
                    <span className="text-lg sm:text-2xl">{tool.icon}</span>
                    <span className="text-[8px] sm:text-[10px] font-bold" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process/Workflow */}
            <div className="clay p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-black mb-4" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>My Process</h3>
              <div className="flex flex-col gap-3">
                {PROCESS_STEPS.map((step, i) => {
                  const Icon = getIcon(step.icon);
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-[16px] clay-sm">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}40` }}>
                        <Icon className="w-4 h-4" style={{ color: step.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black" style={{ color: step.color }}>{step.step}</span>
                          <h4 className="font-extrabold text-sm" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{step.title}</h4>
                        </div>
                        <p className="text-[10px] sm:text-xs font-bold mt-0.5 leading-relaxed" style={{ color: '#8f7eaf' }}>{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Proof */}
            <div className="clay p-4">
              <h3 className="text-sm font-black mb-3 text-center" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Trusted By</h3>
              <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
                {PARTNER_LOGOS.map((logo, i) => (
                  <div key={i} className="clay-sm px-3 py-2 flex items-center gap-1.5 clay-interactive">
                    <span className="text-base">{logo.emoji}</span>
                    <span className="text-[10px] font-extrabold" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#a78bfa]" />
                <h2 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>My Projects</h2>
              </div>
            </div>

            {/* Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {PROJECT_CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setProjectFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold whitespace-nowrap transition-all ${
                    projectFilter === cat ? 'bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white' : 'clay-sm'
                  }`}
                  style={projectFilter !== cat ? { color: '#8f7eaf' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProjects.map((project) => (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="project-card clay-sm clay-interactive overflow-hidden flex flex-col group cursor-pointer">
                  <div className="relative h-28 sm:h-32 overflow-hidden rounded-t-[14px]">
                    <img src={project.image} alt={project.title} className="project-img w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-white text-[9px] font-extrabold backdrop-blur-sm" style={{ backgroundColor: `${project.color}cc` }}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <h4 className="font-extrabold text-xs group-hover:text-[#a78bfa] transition-colors" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{project.title}</h4>
                    <p className="text-[10px] font-bold mt-1 leading-relaxed" style={{ color: '#8f7eaf' }}>{project.description.slice(0, 80)}...</p>
                    <div className="flex items-center gap-1 mt-2 text-[9px] font-bold text-[#a78bfa]">
                      <span>View Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CERTIFICATES */}
          <section id="certificates" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#a78bfa]" />
              <h2 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Certificates</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CERTIFICATES.map((cert) => {
                const Icon = getIcon(cert.icon);
                return (
                  <div key={cert.id} className="cert-card clay-sm p-4 flex flex-col gap-2 group cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cert.color}20`, border: `2px solid ${cert.color}40` }}>
                        <Icon className="w-4 h-4" style={{ color: cert.color }} />
                      </div>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="font-extrabold text-xs group-hover:text-[#a78bfa] transition-colors" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{cert.title}</h4>
                    <p className="text-[10px] font-bold" style={{ color: '#8f7eaf' }}>{cert.issuer} • {cert.date}</p>
                    <button className="clay-sm clay-interactive px-3 py-1.5 rounded-lg text-[9px] font-extrabold flex items-center justify-center gap-1 mt-auto" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>
                      <Download className="w-3 h-3" /> View
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* BLOG */}
          <section id="blog" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#a78bfa]" />
              <h2 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Blog</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BLOG_POSTS.map((post) => (
                <div key={post.id} className="clay-sm clay-interactive overflow-hidden flex flex-col group cursor-pointer">
                  <div className="relative h-24 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover project-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-white text-[9px] font-extrabold bg-[#a78bfa]/80">{post.category}</span>
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <h4 className="font-extrabold text-xs group-hover:text-[#a78bfa] transition-colors" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{post.title}</h4>
                    <p className="text-[10px] font-bold mt-1 leading-relaxed" style={{ color: '#8f7eaf' }}>{post.excerpt.slice(0, 80)}...</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[9px] font-bold" style={{ color: '#8f7eaf' }}>{post.date}</span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-[#a78bfa]">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#a78bfa]" />
              <h2 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="clay p-4 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" />)}
                  </div>
                  <p className="text-xs font-bold italic leading-relaxed" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>"{t.text}"</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-[10px] font-extrabold" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{t.name}</p>
                      <p className="text-[9px] font-bold" style={{ color: '#8f7eaf' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#a78bfa]" />
              <h2 className="text-lg sm:text-xl font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Get In Touch</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Form */}
              <div className="clay p-4 sm:p-5">
                <h3 className="text-sm font-black mb-3" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Send a Message</h3>
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 gap-3">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                    <p className="text-sm font-extrabold" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Message Sent!</p>
                    <p className="text-xs font-bold" style={{ color: '#8f7eaf' }}>I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-3">
                    <input type="text" placeholder="Your Name" required value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})}
                      className="clay-inset px-4 py-2.5 rounded-xl text-xs font-bold outline-none" style={{ color: isDark ? '#e8e0f5' : '#4a3b69', borderRadius: '14px' }}
                    />
                    <input type="email" placeholder="Your Email" required value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})}
                      className="clay-inset px-4 py-2.5 rounded-xl text-xs font-bold outline-none" style={{ color: isDark ? '#e8e0f5' : '#4a3b69', borderRadius: '14px' }}
                    />
                    <textarea placeholder="Your Message" required rows={4} value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})}
                      className="clay-inset px-4 py-2.5 rounded-xl text-xs font-bold outline-none resize-none" style={{ color: isDark ? '#e8e0f5' : '#4a3b69', borderRadius: '14px' }}
                    />
                    <button type="submit" className="clay-sm clay-interactive py-2.5 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] flex items-center justify-center gap-2">
                      <Send className="w-3.5 h-3.5" /> Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Info + Timeline */}
              <div className="flex flex-col gap-4">
                <div className="clay p-4">
                  <h3 className="text-sm font-black mb-3" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Contact Info</h3>
                  <div className="flex flex-col gap-2">
                    <div className="clay-inset flex items-center px-3 py-2 rounded-xl" style={{ borderRadius: '12px' }}>
                      <Mail className="w-3.5 h-3.5 text-[#a78bfa] mr-2" />
                      <span className="text-[10px] font-bold" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>mia.chen@email.com</span>
                    </div>
                    <div className="clay-inset flex items-center px-3 py-2 rounded-xl" style={{ borderRadius: '12px' }}>
                      <Target className="w-3.5 h-3.5 text-[#f472b6] mr-2" />
                      <span className="text-[10px] font-bold" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>San Francisco, CA</span>
                    </div>
                  </div>
                  <button className="mt-3 w-full clay-sm clay-interactive py-2 rounded-xl font-extrabold text-[10px] flex items-center justify-center gap-1.5" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>
                    <Download className="w-3 h-3" /> Download Resume (PDF)
                  </button>
                </div>

                <div className="clay p-4">
                  <h3 className="text-sm font-black mb-3" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Experience</h3>
                  <div className="flex flex-col gap-2">
                    {EXPERIENCE.map((exp, i) => {
                      const Icon = getIcon(exp.icon);
                      return (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-[14px] clay-interactive">
                          <div className="w-9 h-9 rounded-[12px] clay-inset flex items-center justify-center flex-shrink-0">
                            <Icon className={`w-4 h-4 ${exp.color}`} />
                          </div>
                          <div>
                            <p className="font-extrabold text-[11px]" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>{exp.title}</p>
                            <p className="text-[9px] font-bold" style={{ color: '#8f7eaf' }}>{exp.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quote */}
          <div className="clay p-5 sm:p-8 text-center relative overflow-hidden">
            <div className="clay-shape-coin hidden sm:block" style={{ width: '35px', height: '35px', left: '8%', top: '20%' }}></div>
            <div className="clay-shape-leaf hidden sm:block" style={{ width: '30px', height: '30px', right: '8%', bottom: '20%' }}></div>
            <div className="relative z-10">
              <Heart className="w-5 h-5 text-rose-400 mx-auto mb-3" />
              <p className="text-sm sm:text-base font-extrabold max-w-xl mx-auto leading-relaxed italic" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>
                "Design is not just what it looks like. Design is how it works."
              </p>
              <p className="font-bold mt-2 text-xs" style={{ color: '#8f7eaf' }}>— Steve Jobs</p>
            </div>
          </div>
        </div>
      </main>

      {/* Back to Top */}
      {showBackToTop && (
        <button onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] flex items-center justify-center text-white shadow-lg clay-interactive fade-in-up">
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isDark={isDark} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-center justify-center backdrop-blur-lg" style={{ backgroundColor: isDark ? 'rgba(26,21,37,0.95)' : 'rgba(235,230,245,0.95)' }}>
          <div className="clay w-[85%] max-w-sm p-5 flex flex-col items-center gap-4">
            <button className="absolute top-4 right-4 clay-sm clay-pill p-2.5 clay-interactive" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-4 h-4" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }} />
            </button>
            <div className="w-14 h-14 rounded-[22px] clay-sm flex items-center justify-center p-1.5">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" className="w-full h-full rounded-[18px] object-cover" alt="Mia" />
            </div>
            <h2 className="text-base font-black" style={{ color: isDark ? '#e8e0f5' : '#4a3b69' }}>Mia Chen</h2>
            <nav className="flex flex-col gap-2 w-full">
              {NAV_LINKS.map((item) => {
                const isActive = activeNav === item.id;
                const Icon = getIcon(item.icon);
                return (
                  <button key={item.id} onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-[14px] font-extrabold text-xs transition-all ${isActive ? 'clay-inset' : ''}`}
                    style={{ color: isActive ? (isDark ? '#e8e0f5' : '#4a3b69') : '#8f7eaf' }}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#a78bfa]' : ''}`} />
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
