import { projects } from "@/data/project";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) return notFound();

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div>{project.content}</div>
      
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {project.github && <a href={project.github}>GitHub</a>}
      {project.demo && <a href={project.demo}>Demo</a>}
      {project.pdf && <a href={project.pdf} target="_blank" rel="noopener noreferrer">PDF Dokümantasyonu</a>}
    </div>
  );
}
