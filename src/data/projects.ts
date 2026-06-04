import perimeteriqImg from "@/assets/perimeteriq.jpg";
import lmszoneImg from "@/assets/lmszone.png";
import flowgridImg from "@/assets/flowgrid.jpg";
import collegeWebImg from "@/assets/college-web.jpg";
import businessWebImg from "@/assets/business-web.jpg";
import chatbotImg from "@/assets/chatbot.jpg";
import brandKitImg from "@/assets/brand-kit.jpg";
import whatsappBotImg from "@/assets/whatsapp-bot.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tag: string;
  stack: string[];
  blurb: string;
  palette: [string, string];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "perimeteriq",
    title: "PerimeterIQ — AI Intrusion Detection",
    client: "Research / IoT Lab",
    year: "2026",
    tag: "AI Product",
    stack: ["ESP32", "WebSockets", "TensorFlow", "React"],
    blurb: "Laser-grid perimeter sensors streaming over WebSockets to an AI classifier that flags real intrusions from noise in real time.",
    palette: ["#0a0a0a", "#ff2d6f"],
    image: perimeteriqImg,
  },
  {
    slug: "lmszone",
    title: "LMSZone — Full-Stack Learning Platform",
    client: "EdTech / Independent",
    year: "2025",
    tag: "Business Website",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Storage", "RBAC"],
    blurb: "A complete LMS with auth, role-based access for students/instructors/admins, course storage, progress tracking and certificates.",
    palette: ["#fff1e6", "#ff7a3d"],
    image: lmszoneImg,
  },
  {
    slug: "flowgrid",
    title: "FlowGrid — Signal-less Traffic Management",
    client: "Smart City R&D",
    year: "2025",
    tag: "AI Product",
    stack: ["NodeMCU", "ESP32", "Computer Vision", "WebSockets", "React"],
    blurb: "A signal-less intersection controller — IR + vision sensors feed an AI scheduler that streams lane priorities to a live web dashboard in real time.",
    palette: ["#0d0d10", "#ff3b30"],
    image: flowgridImg,
  },
  {
    slug: "college-club-site",
    title: "College & Club Website",
    client: "Campus Collectives",
    year: "2026",
    tag: "College / Club Website",
    stack: ["React", "Tailwind", "CMS"],
    blurb: "A fast, beautiful site for college clubs and departments — events, members, gallery and announcements baked in.",
    palette: ["#1a1a2e", "#ff7a3d"],
    image: collegeWebImg,
  },
  {
    slug: "business-website",
    title: "Business Website",
    client: "Local SMB",
    year: "2026",
    tag: "Business Website",
    stack: ["Next.js", "Tailwind", "SEO"],
    blurb: "A premium marketing site for small businesses — modern, responsive, scalable and tuned for conversions.",
    palette: ["#c4b5fd", "#f9a8a8"],
    image: businessWebImg,
  },
  {
    slug: "chatbot-integration",
    title: "AI Chatbot Integration",
    client: "Service Businesses",
    year: "2026",
    tag: "AI Automation",
    stack: ["OpenAI", "RAG", "Vector DB", "Web Widget"],
    blurb: "Drop-in AI chatbots wired to your knowledge base — handles FAQs, leads and bookings on autopilot.",
    palette: ["#0c2340", "#5cbdb9"],
    image: chatbotImg,
  },
  {
    slug: "brand-kit",
    title: "Logo + Brand Kit",
    client: "Founders & Creators",
    year: "2026",
    tag: "Brand + Web",
    stack: ["Logo", "Type", "Color", "Guidelines"],
    blurb: "Identity systems for founders who refuse the canva look — logo, palette, typography and a usable guideline doc.",
    palette: ["#0d0d0d", "#e85d3a"],
    image: brandKitImg,
  },
  {
    slug: "whatsapp-bot",
    title: "WhatsApp Business Bot",
    client: "D2C & Clinics",
    year: "2026",
    tag: "AI Automation",
    stack: ["WhatsApp Cloud API", "Node", "Webhooks", "AI"],
    blurb: "Automated WhatsApp flows for bookings, orders and support — wired into your CRM with AI-powered replies.",
    palette: ["#0d3b2e", "#25d366"],
    image: whatsappBotImg,
  },
];

export const team = [
  { name: "Mohammed Ayman", role: "Lead Engineer", craft: "Systems & infra", years: 6, init: "MA", tone: "ink" },
  { name: "Karthick R.", role: "Design Director", craft: "Interaction & motion", years: 5, init: "KA", tone: "primary" },
  { name: "Balamurugan S.", role: "Product Engineer", craft: "Frontend & DX", years: 4, init: "BM", tone: "accent" },
];

export const services = [
  {
    code: "01",
    title: "Final-year project (basic)",
    description: "A working, defendable build for your viva — clean code, demo, and a tight report draft.",
    deliverables: ["Working build", "Source code", "Short report", "Demo rehearsal"],
    from: "₹5,000",
  },
  {
    code: "02",
    title: "Final-year project (full)",
    description: "Thesis-grade end-to-end build — architecture, hardware/AI integration, report, and defense support.",
    deliverables: ["Architecture doc", "Full build", "Report", "Defense rehearsal"],
    from: "₹12,000",
  },
  {
    code: "03",
    title: "College / Club website",
    description: "A fast, responsive site for college clubs and departments — events, members, gallery, announcements.",
    deliverables: ["Design", "CMS", "Responsive build", "Deploy"],
    from: "₹6,000",
  },
  {
    code: "04",
    title: "Business website",
    description: "Modern. Responsive. Scalable. A premium marketing site tuned for SEO and conversions.",
    deliverables: ["Design system", "CMS", "SEO", "Analytics"],
    from: "₹10,000",
  },
  {
    code: "05",
    title: "Chatbot integration",
    description: "AI chatbot wired to your knowledge base — handles FAQs, leads, and bookings on autopilot.",
    deliverables: ["Bot training", "Web widget", "Lead capture", "Analytics"],
    from: "₹8,000",
  },
  {
    code: "06",
    title: "Poster (single)",
    description: "One scroll-stopping poster — print or social, delivered in source + export formats.",
    deliverables: ["Concept", "Final design", "Print + social exports"],
    from: "₹300",
  },
  {
    code: "07",
    title: "Event design package",
    description: "Full event identity — posters, social creatives, badges, and templates that match.",
    deliverables: ["Poster set", "Social kit", "Badges", "Templates"],
    from: "₹1,500",
  },
  {
    code: "08",
    title: "Logo + brand kit",
    description: "Identity systems for founders who refuse the template look — logo, palette, type, and usable guidelines.",
    deliverables: ["Logo system", "Palette", "Type", "Guidelines"],
    from: "₹3,000",
  },
  {
    code: "09",
    title: "Project guidance",
    description: "1:1 mentoring sessions — architecture review, debugging, and clarity for your next move.",
    deliverables: ["Live session", "Action notes", "Follow-up"],
    from: "₹500 / session",
  },
  {
    code: "10",
    title: "WhatsApp bot",
    description: "Automated WhatsApp flows for bookings, orders and support — CRM-wired with AI-powered replies.",
    deliverables: ["Bot flows", "Cloud API setup", "CRM hooks", "AI replies"],
    from: "₹12,000",
  },
];
