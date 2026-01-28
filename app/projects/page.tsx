import Link from "next/link";
import { projects } from "@/data/project";

export default function Projeler() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} className="project-card">

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
