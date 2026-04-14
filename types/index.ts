export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "Design" | "Mobile";
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  year: number;
  client?: string;
  role: string;
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
  location: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract" | "Internship";
}

export interface Skill {
  name: string;
  icon?: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Design" | "Other";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  calendlyUrl: string;
  resumeUrl: string;
  available: boolean;
  stats: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string;
}
