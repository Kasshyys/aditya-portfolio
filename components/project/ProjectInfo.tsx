"use client";

import React from "react";
import { Project } from "@/types";
import TechBadge from "@/components/ui/TechBadge";

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const infoItems = [
    { label: "Role", value: project.role },
    { label: "Client", value: project.client || "Personal Project" },
    { label: "Year", value: project.year.toString() },
    { label: "Category", value: project.category },
  ];

  return (
    <div className="py-12 border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {infoItems.map((item, i) => (
          <div key={item.label} className="flex flex-col gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              {item.label}
            </span>
            <span className="text-sm font-medium text-text-primary">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
          Tools & Tech
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <TechBadge key={tool} name={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;