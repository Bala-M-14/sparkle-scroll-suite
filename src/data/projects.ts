import perimeteriqImg from "@/assets/perimeteriq.jpg";

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
    tag: "AI + IoT",
    stack: ["ESP32", "WebSockets", "TensorFlow", "React"],
    blurb: "Laser-grid perimeter sensors streaming over WebSockets to an AI classifier that flags real intrusions from noise in real time.",
    palette: ["#0a0a0a", "#ff2d6f"],
  },
  {
    slug: "lumen",
    title: "Lumen — AI Resume Builder",
    client: "Final Year · NIT",
    year: "2025",
    tag: "AI Product",
    stack: ["Next.js", "OpenAI", "Supabase"],
    blurb: "NLP-driven resume tailoring that lands interviews. Ranked 1st in batch.",
    palette: ["#0c2340", "#5cbdb9"],
  },
  {
    slug: "harvest",
    title: "Harvest Commerce",
    client: "Harvest & Co.",
    year: "2025",
    tag: "Web Development",
    stack: ["Astro", "Shopify", "Sanity"],
    blurb: "A buttery-smooth storefront for a third-generation olive oil house.",
    palette: ["#5c2018", "#e8b84a"],
  },
  {
    slug: "fold",
    title: "Fold — Origami POS",
    client: "Fold Hospitality",
    year: "2025",
    tag: "Product Design",
    stack: ["React Native", "Hono", "Stripe"],
    blurb: "A point-of-sale that fits in an apron pocket. Used in 40+ cafés.",
    palette: ["#1b4332", "#73ffb8"],
  },
  {
    slug: "monolith",
    title: "Monolith Editor",
    client: "Internal",
    year: "2024",
    tag: "Open Source",
    stack: ["Rust", "WASM", "CodeMirror"],
    blurb: "A minimalist code editor with first-class collaborative cursors.",
    palette: ["#0a0a1a", "#4f46e5"],
  },
  {
    slug: "noma",
    title: "Noma Reservations",
    client: "Noma Group",
    year: "2024",
    tag: "Web Development",
    stack: ["Remix", "Postgres", "Cloudflare"],
    blurb: "A reservation system inspired by the world's most patient chefs.",
    palette: ["#2d2d2d", "#c9a84c"],
  },
  {
    slug: "halcyon",
    title: "Halcyon Wellness",
    client: "Halcyon Health",
    year: "2024",
    tag: "Brand + Web",
    stack: ["Webflow", "Figma", "GSAP"],
    blurb: "A calm digital home for a sleep-coaching practice.",
    palette: ["#f5f0e8", "#7d9b76"],
  },
  {
    slug: "tessera",
    title: "Tessera Mosaics",
    client: "Tessera Studio",
    year: "2023",
    tag: "Final Year Project",
    stack: ["Three.js", "Vite", "GLSL"],
    blurb: "Generative mosaics from any photo — runs entirely on-device.",
    palette: ["#3d348b", "#f7b801"],
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
    title: "Web platforms",
    description: "Marketing sites, dashboards, and full-stack apps that load in a blink and feel hand-tailored.",
    deliverables: ["Design system", "SSR app", "CMS", "Analytics"],
    from: "₹2L",
  },
  {
    code: "02",
    title: "Startup MVPs",
    description: "Zero-to-launch product engineering for founders who refuse the 'good enough' demo.",
    deliverables: ["Auth & billing", "Core flow", "Admin", "Launch playbook"],
    from: "₹4L",
  },
  {
    code: "03",
    title: "Final-year projects",
    description: "Thesis-grade builds that survive viva panels, GitHub stars, and your own résumé.",
    deliverables: ["Architecture doc", "Working build", "Report draft", "Defense rehearsal"],
    from: "₹35k",
  },
  {
    code: "04",
    title: "Brand × Motion",
    description: "Identity systems and editorial motion direction for products that need a voice, not a template.",
    deliverables: ["Identity", "Motion language", "Guidelines", "Asset library"],
    from: "₹1.5L",
  },
];
