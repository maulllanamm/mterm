import type { Project } from "../../interfaces/Project";

interface ProjectContentProps {
  project: Project;
}

export const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  let techList: string[] = [];
  try {
    techList = JSON.parse(project.tech);
  } catch (error) {
    console.warn("Invalid tech format in project:", project.title);
  }

  let featureList: string[] = [];
  try {
    featureList = JSON.parse(project.features);
  } catch (error) {
    console.warn("Invalid tech format in project:", project.title);
  }
  return (
    <div className="space-y-3 text-sm">
      <div className="text-green-400 font-semibold">{project.title}</div>

      <div>
        <div className="text-blue-400">Description:</div>
        <div className="text-gray-300 ml-4">{project.description}</div>
      </div>

      {techList.length > 0 && (
        <div>
          <div className="text-blue-400">Tech Stack:</div>
          <div className="ml-4 text-gray-300 space-y-1">
            {techList.map((tech, index) => (
              <div key={index}>• {tech}</div>
            ))}
          </div>
        </div>
      )}

      {featureList.length > 0 && (
        <div>
          <div className="text-blue-400">Features:</div>
          <div className="ml-4 text-gray-300 space-y-1">
            {featureList.map((feature, index) => (
              <div key={index}>• {feature}</div>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-gray-700 pt-2 space-y-1">
        <div>
          <span className="text-yellow-400">GitHub:</span>{" "}
          <a href={project.github} target="_blank" className="text-gray-300">
            {project.github}
          </a>
        </div>
        <div>
          <span className="text-yellow-400">Demo:</span>{" "}
          <a href={project.url} target="_blank" className="text-gray-300">
            {project.url ?? "Coming soon"}
          </a>
        </div>
      </div>
    </div>
  );
};
