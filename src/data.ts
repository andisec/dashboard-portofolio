export const NAV_LINKS = [
  { id: 'home', icon: 'Home', label: 'Home' },
  { id: 'about', icon: 'Heart', label: 'About' },
  { id: 'projects', icon: 'Briefcase', label: 'Projects' },
  { id: 'certificates', icon: 'Award', label: 'Certificates' },
  { id: 'blog', icon: 'FileText', label: 'Blog' },
  { id: 'contact', icon: 'Mail', label: 'Contact' }
];

export const STATS = [
  { id: 1, title: "Years Experience", value: "5+", trend: "Since 2020", tint: "tint-purple", icon: "Award", trendColor: "#a78bfa", path: "M 0 35 C 20 35, 40 10, 60 20 C 80 30, 90 5, 100 5" },
  { id: 2, title: "Projects Done", value: "80+", trend: "Completed", tint: "tint-pink", icon: "Code2", trendColor: "#f472b6", path: "M 0 25 C 25 35, 40 15, 60 25 C 80 35, 90 10, 100 0" },
  { id: 3, title: "Happy Clients", value: "50+", trend: "Worldwide", tint: "tint-yellow", icon: "Star", trendColor: "#fbbf24", path: "M 0 40 C 30 40, 40 5, 60 15 C 80 25, 90 0, 100 0" },
  { id: 4, title: "Awards Won", value: "12", trend: "Design Awards", tint: "tint-blue", icon: "Sparkles", trendColor: "#60a5fa", path: "M 0 30 C 20 20, 40 25, 60 10 C 80 5, 90 15, 100 5" }
];

export const SKILLS = [
  { name: "UI/UX Design", level: 95, color: "#a78bfa" },
  { name: "React / Next.js", level: 90, color: "#f472b6" },
  { name: "Figma & Prototyping", level: 92, color: "#fbbf24" },
  { name: "TypeScript", level: 85, color: "#60a5fa" },
  { name: "Motion Design", level: 78, color: "#4ade80" },
];

export const PROJECTS = [
  { id: 1, title: "Finova Banking App", category: "UI/UX Design", description: "A modern fintech mobile app with claymorphism design system. Features include budget tracking, investment portfolio, and seamless payments.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", color: "#a78bfa", year: "2024", client: "Finova Inc.", role: "Lead Designer", tools: ["Figma", "React Native", "Lottie"] },
  { id: 2, title: "EcoTrack Dashboard", category: "Web Development", description: "Sustainability tracking platform with real-time data visualization. Helps companies monitor their carbon footprint and environmental impact.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", color: "#4ade80", year: "2024", client: "EcoTrack Co.", role: "Full Stack Developer", tools: ["Next.js", "D3.js", "PostgreSQL"] },
  { id: 3, title: "Artisan Marketplace", category: "E-Commerce", description: "Handcrafted goods marketplace with immersive shopping experience. Connects artisans directly with customers worldwide.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", color: "#f472b6", year: "2023", client: "Artisan Hub", role: "UI Designer", tools: ["Figma", "Shopify", "Tailwind"] },
  { id: 4, title: "MindFlow Meditation", category: "Mobile App", description: "Mindfulness and meditation app with calming micro-interactions. Features guided sessions, sleep stories, and progress tracking.", image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", color: "#fbbf24", year: "2023", client: "MindFlow Ltd.", role: "Product Designer", tools: ["Figma", "Swift", "After Effects"] },
  { id: 5, title: "CryptoVault Wallet", category: "UI/UX Design", description: "Secure cryptocurrency wallet with intuitive interface. Multi-chain support with real-time portfolio tracking.", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", color: "#a78bfa", year: "2023", client: "CryptoVault", role: "Lead Designer", tools: ["Figma", "React", "Web3"] },
  { id: 6, title: "FoodieExpress", category: "Mobile App", description: "Food delivery platform with AR menu preview. Users can see 3D food models before ordering.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", color: "#f472b6", year: "2022", client: "FoodieExpress", role: "UX Researcher", tools: ["Figma", "React Native", "ARKit"] }
];

export const PROJECT_CATEGORIES = ["All", "UI/UX Design", "Web Development", "Mobile App", "E-Commerce"];

export const CERTIFICATES = [
  { id: 1, title: "Google UX Design", issuer: "Google", date: "2023", credential: "GX-2023-8472", icon: "Award", color: "#a78bfa" },
  { id: 2, title: "React Developer", issuer: "Meta", date: "2023", credential: "META-RD-2023", icon: "Code2", color: "#60a5fa" },
  { id: 3, title: "UI/UX Masterclass", issuer: "Coursera", date: "2022", credential: "COUR-UX-2022", icon: "Palette", color: "#f472b6" },
  { id: 4, title: "TypeScript Advanced", issuer: "Microsoft", date: "2022", credential: "MS-TS-2022", icon: "FileText", color: "#4ade80" },
  { id: 5, title: "Motion Design", issuer: "Adobe", date: "2021", credential: "AD-MD-2021", icon: "Camera", color: "#fbbf24" },
  { id: 6, title: "Frontend Expert", issuer: "freeCodeCamp", date: "2021", credential: "FCC-FE-2021", icon: "Star", color: "#f472b6" }
];

export const EXPERIENCE = [
  { icon: "Briefcase", title: 'Senior UI Designer @ Google', time: '2023 — Present', color: 'text-[#a78bfa]', description: 'Leading design system for Google Cloud products' },
  { icon: "GraduationCap", title: 'Design Lead @ StartupXYZ', time: '2021 — 2023', color: 'text-emerald-400', description: 'Built design team from scratch, shipped 15+ products' },
  { icon: "Award", title: 'Freelance Designer', time: '2020 — 2021', color: 'text-rose-400', description: 'Worked with 30+ clients across various industries' },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Discovery", description: "Understanding your goals, target audience, and project requirements through research and interviews.", icon: "Search", color: "#a78bfa" },
  { step: "02", title: "Strategy", description: "Creating user personas, user flows, and information architecture to guide the design process.", icon: "Target", color: "#f472b6" },
  { step: "03", title: "Design", description: "Crafting wireframes, prototypes, and high-fidelity designs with attention to every detail.", icon: "Palette", color: "#fbbf24" },
  { step: "04", title: "Develop", description: "Building the product with clean code, responsive design, and smooth interactions.", icon: "Code2", color: "#4ade80" },
  { step: "05", title: "Launch", description: "Testing, optimizing, and deploying the final product with ongoing support and improvements.", icon: "Rocket", color: "#60a5fa" }
];

export const TOOLS = [
  { name: "Figma", icon: "🎨", color: "#a78bfa" },
  { name: "React", icon: "⚛️", color: "#60a5fa" },
  { name: "TypeScript", icon: "📘", color: "#4ade80" },
  { name: "Next.js", icon: "▲", color: "#e8e0f5" },
  { name: "Tailwind", icon: "💨", color: "#60a5fa" },
  { name: "Framer", icon: "🎬", color: "#f472b6" },
  { name: "After Effects", icon: "🎞️", color: "#fbbf24" },
  { name: "VS Code", icon: "💻", color: "#a78bfa" },
];

export const TESTIMONIALS = [
  { id: 1, name: "Sarah Johnson", role: "CEO @ Finova", text: "Mia transformed our vision into a stunning product. Her attention to detail and creative problem-solving is unmatched.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", rating: 5 },
  { id: 2, name: "David Chen", role: "CTO @ TechStart", text: "Working with Mia was a game-changer. She delivered beyond our expectations and the user feedback has been incredible.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", rating: 5 },
  { id: 3, name: "Emily Rodriguez", role: "Founder @ EcoTrack", text: "Mia's design skills are top-notch. She understood our mission and created a platform that truly resonates with users.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", rating: 5 },
];

export const BLOG_POSTS = [
  { id: 1, title: "The Future of Claymorphism in UI Design", excerpt: "Exploring how soft UI trends are shaping modern digital experiences and why designers should pay attention.", date: "Mar 15, 2024", readTime: "5 min", category: "Design", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop" },
  { id: 2, title: "Building Accessible Design Systems", excerpt: "A comprehensive guide to creating design systems that work for everyone, regardless of ability.", date: "Feb 28, 2024", readTime: "8 min", category: "Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop" },
  { id: 3, title: "Motion Design Principles for Web", excerpt: "How to add meaningful animations that enhance user experience without overwhelming them.", date: "Feb 10, 2024", readTime: "6 min", category: "Animation", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop" },
];

export const PARTNER_LOGOS = [
  { name: "Google", emoji: "🔍" },
  { name: "Meta", emoji: "📘" },
  { name: "Apple", emoji: "🍎" },
  { name: "Microsoft", emoji: "🪟" },
  { name: "Adobe", emoji: "🎨" },
  { name: "Spotify", emoji: "🎵" },
];

export const TYPING_TEXTS = [
  "UI/UX Designer",
  "Frontend Developer",
  "Creative Thinker",
  "Problem Solver"
];
