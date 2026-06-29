export const profile = {
  name: "Ashish",
  shortName: "Ashish",
  title: "Software Engineer",
  tagline: "Software Engineering Student · DTU",
  location: "New Delhi, India",
  email: "kumarashish91011@gmail.com",
  phone: "+91 8851264563",
  summary:
    "Second-year B.Tech Software Engineering student at Delhi Technological University. I build full-stack web applications with React, Next.js, and Express, backed by a strong foundation in data structures, algorithms, and OOP — and I enjoy turning real-world problems into working software.",
};

export const heroRoles = [
  "Software Engineer",
  "Full Stack Developer",
  "Data Analyst",
];

// About quick-stats card
export const stats = [
  { value: "7.20", label: "CGPA / 10" },
  { value: "100+", label: "Societies on InfoSoc" },
  { value: "~0.01s", label: "Search response" },
  { value: "SIH", label: "Round 1 Qualifier" },
];

// group → color used by the 3D skills galaxy (purple-family, on-theme)
export const skillGroups = [
  { key: "Languages", color: "#a78bfa", gradient: "from-violet-400 to-purple-500" },
  { key: "Web Dev", color: "#e879f9", gradient: "from-fuchsia-400 to-pink-500" },
  { key: "Databases", color: "#818cf8", gradient: "from-indigo-400 to-violet-500" },
  { key: "Data & BI", color: "#f0abfc", gradient: "from-pink-400 to-fuchsia-500" },
  { key: "Tools", color: "#c4b5fd", gradient: "from-violet-300 to-purple-400" },
] as const;

type SkillGroup = (typeof skillGroups)[number]["key"];

const groupColor = (group: SkillGroup) =>
  skillGroups.find((g) => g.key === group)!.color;

export const skills: { name: string; level: string; group: SkillGroup; color: string }[] = [
  { name: "C++", level: "Advanced", group: "Languages" },
  { name: "Python", level: "Advanced", group: "Languages" },
  { name: "JavaScript", level: "Advanced", group: "Languages" },
  { name: "TypeScript", level: "Advanced", group: "Languages" },
  { name: "Java", level: "Intermediate", group: "Languages" },
  { name: "React.js", level: "Advanced", group: "Web Dev" },
  { name: "Next.js", level: "Advanced", group: "Web Dev" },
  { name: "Express.js", level: "Intermediate", group: "Web Dev" },
  { name: "Tailwind CSS", level: "Advanced", group: "Web Dev" },
  { name: "Framer Motion", level: "Advanced", group: "Web Dev" },
  { name: "Three.js", level: "Intermediate", group: "Web Dev" },
  { name: "MySQL", level: "Advanced", group: "Databases" },
  { name: "PostgreSQL", level: "Advanced", group: "Databases" },
  { name: "MongoDB", level: "Intermediate", group: "Databases" },
  { name: "Supabase", level: "Intermediate", group: "Databases" },
  { name: "Pandas", level: "Advanced", group: "Data & BI" },
  { name: "NumPy", level: "Advanced", group: "Data & BI" },
  { name: "Power BI", level: "Intermediate", group: "Data & BI" },
  { name: "Git", level: "Advanced", group: "Tools" },
  { name: "Salesforce", level: "Intermediate", group: "Tools" },
  { name: "Vercel", level: "Advanced", group: "Tools" },
].map((s) => ({ ...s, group: s.group as SkillGroup, color: groupColor(s.group as SkillGroup) }));

export const projects = [
  {
    title: "InfoSoc — Student Society Platform",
    description:
      "A full-stack platform to list and manage student societies, with 100+ societies onboarded. Secure JWT + Google Sign-In auth, plus fast search, filtering, and modal-based interactions on reusable, responsive UI.",
    stack: ["Next.js", "TypeScript", "JWT", "Google OAuth"],
    liveUrl: "https://infosoc.in",
    githubUrl: "https://github.com/hu-zzn/dtuSocksUnited",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A high-performance portfolio with an interactive 3D skills galaxy (Three.js + React Three Fiber), scroll-triggered Framer Motion animations, and a glassmorphism dark theme — optimized with lazy-loaded 3D scenes and skeleton states.",
    stack: ["Next.js", "Three.js", "R3F", "Framer Motion"],
    liveUrl: "https://ashish-portfolio-delta-khaki.vercel.app/",
    githubUrl: "https://github.com/Ashish150806/ashish-portfolio",
  },
  {
    title: "Mini Search Engine — Text to Meaning",
    description:
      "A search engine built on core DSA, implementing TF-IDF ranking over an inverted index. Tuned for speed — achieving roughly 0.01s query response time.",
    stack: ["C++", "DSA", "TF-IDF", "Inverted Index"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish150806/mini_search",
  },
];

// Work experience — each entry carries a screenshot/image slot rendered on the
// website. Swap the placeholder SVGs in /public/experience for real screenshots
// (if you use .png/.jpg, update the `image` path's extension here too).
export const experience = [
  {
    title: "Software Development Intern",
    mode: "Remote",
    organization: "Scott Law Firm (SLF)",
    location: "Texas, USA",
    period: "Feb 2026 – Present",
    image: "/experience/scott-law-firm.svg",
    bullets: [
      "Building two core projects with Salesforce and Supabase — a Client Portal and a Jury Study platform for running focus groups for legal research.",
      "Shipping client-facing features focused on responsive UI, integrating Supabase (PostgreSQL + REST APIs) across both platforms.",
    ],
    tags: ["Salesforce", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Research Intern",
    mode: "Hybrid",
    organization: "HHTRF, NSUT",
    location: "Hydroponic Horticulture Training Research Facility",
    period: "Jul 2025 – Oct 2025",
    image: "/experience/hhtrf-nsut.svg",
    bullets: [
      "Analysed a leaf chemical-composition dataset (Flavonoid, Phenolic, Tannin) with Python and Jupyter; regression model reached R² ≈ 0.94, MSE ≈ 3.31.",
      "Produced training vs. validation loss curves and actual vs. predicted scatter plots to interpret model accuracy.",
    ],
    tags: ["Python", "Jupyter", "Regression", "Matplotlib"],
  },
  {
    title: "Data Analysis Intern",
    mode: "On-site",
    organization: "CCDR, DTU",
    location: "Centre for Community Development & Research",
    period: "Jan 2025 – Jun 2025",
    image: "/experience/ccdr-dtu.svg",
    bullets: [
      "Managed the DTU Prayas platform database, uploading industrial-level problem statements to support final-year student research projects.",
      "Ran EDA and visualization on real-world datasets with Pandas, Matplotlib, and Seaborn, preparing analytical reports and dashboards.",
    ],
    tags: ["Pandas", "Matplotlib", "Seaborn", "EDA"],
  },
];

// Leadership & society roles (from LinkedIn) — shown within the Experience section.
export const societies = [
  {
    organization: "Mathematics & Computing Society (MACS), DTU",
    note: "DTU's premier technical society",
    roles: [
      { role: "President", period: "Jun 2026 – Present" },
      { role: "Joint Coordinator", period: "Aug 2025 – Jun 2026" },
      { role: "Member", period: "Nov 2024 – Aug 2025" },
    ],
  },
  {
    organization: "Rotaract Club of DTU Regency",
    note: "Logistics planning for club events",
    roles: [{ role: "Head of Logistics Department", period: "Aug 2025 – Dec 2025" }],
  },
];

export const education = [
  {
    institution: "Delhi Technological University",
    place: "New Delhi, India",
    degree: "B.Tech — Software Engineering",
    period: "2024 – 2028",
    detail: "CGPA: 7.20 / 10",
  },
  {
    institution: "R.P.V.V. Gandhi Nagar",
    place: "CBSE",
    degree: "Class XII (Science): 84%",
    period: "Till 2023",
    detail: "Class X: 93%",
  },
];

export const socialLinks = [
  { label: "GitHub", icon: "github", href: "https://github.com/Ashish150806", handle: "@Ashish150806" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/ashish-861072325/", handle: "Ashish Kumar" },
  { label: "LeetCode", icon: "leetcode", href: "https://leetcode.com/u/Ashish0503/", handle: "@Ashish0503" },
  { label: "Codeforces", icon: "codeforces", href: "https://codeforces.com/profile/ashish05032006", handle: "@ashish05032006" },
] as const;

export const contactLinks = [
  { label: "Email", icon: "mail", href: "mailto:kumarashish91011@gmail.com", value: "kumarashish91011@gmail.com" },
  { label: "Phone", icon: "phone", href: "tel:+918851264563", value: "+91 8851264563" },
  { label: "Location", icon: "location", href: "#", value: "New Delhi, India" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
