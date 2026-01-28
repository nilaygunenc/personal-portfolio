type Props = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
}: Props) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-list">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <a href={github} target="_blank">GitHub →</a>
    </div>
  );
}
