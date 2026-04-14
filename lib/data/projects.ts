import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "project-one",
    title: "Project Name",
    category: "Full-Stack",
    description: "A brief one-liner about the project showcasing the core value and technology.",
    longDescription: "Detailed description of the project, including the challenges faced, the solutions implemented, and the impact of the final product. We focused on building a scalable architecture that could handle high traffic while maintaining a smooth user experience.",
    coverImage: "/images/projects/project-one/cover.jpg",
    images: ["/images/projects/project-one/1.jpg", "/images/projects/project-one/2.jpg", "/images/projects/project-one/3.jpg"],
    year: 2024,
    client: "Personal / Client Name",
    role: "Full-Stack Developer & Designer",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    liveUrl: "https://project-one.vercel.app",
    githubUrl: "https://github.com/Kasshyys/project-one",
    featured: true,
    order: 1
  }
];
