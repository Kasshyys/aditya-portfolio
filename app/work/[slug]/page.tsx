import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectInfo from "@/components/project/ProjectInfo";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectNav from "@/components/project/ProjectNav";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Aditya Prakash`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Aditya Prakash`,
      description: project.description,
      images: [{ url: project.coverImage }],
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-0">
      <div className="container py-8">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
        >
          ← Back to all projects
        </Link>
      </div>

      <ProjectHero project={project} />

      <div className="container max-w-5xl pt-16">
        <ProjectInfo project={project} />

        <div className="py-24 flex flex-col gap-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">
            The Project
          </h2>
          <div className="flex flex-col gap-8 text-text-secondary text-base md:text-lg leading-relaxed">
            {project.longDescription.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            {project.liveUrl && (
              <MagneticButton>
                <Button href={project.liveUrl} external>
                  Visit Live Site ↗
                </Button>
              </MagneticButton>
            )}
            {project.githubUrl && (
              <MagneticButton>
                <Button href={project.githubUrl} variant="secondary" external>
                  View on GitHub ↗
                </Button>
              </MagneticButton>
            )}
          </div>
        </div>

        <ProjectGallery images={project.images} />
      </div>

      <ProjectNav currentProject={project} />
    </div>
  );
}
