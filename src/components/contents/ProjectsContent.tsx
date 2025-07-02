import type { Project } from "../../interfaces/Project";

interface ProjectContentProps {
  projects: Project[];
}

const ProjectsContent: React.FC<ProjectContentProps> = ({ projects }) => {
  return (
    <div className="space-y-4 text-sm text-gray-300">
      <div className="text-green-400 font-semibold text-base">
        🚀 Projects Portfolio
      </div>

      {projects.length === 0 && (
        <div className="text-red-400">No projects available.</div>
      )}

      {projects.map((project: Project) => {
        let techList: string[] = [];
        try {
          techList = JSON.parse(project.tech); // ✅ convert string to array
        } catch (error) {
          console.warn("Invalid tech format in project:", project.title);
        }

        return (
          <div
            key={project.id}
            className="ml-4 border-l-2 border-green-500 pl-4 space-y-1"
          >
            <div className="font-semibold text-yellow-400">{project.title}</div>
            <div className="text-gray-400">{project.description}</div>

            {project.url && (
              <div>
                🔗{" "}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {project.url}
                </a>
              </div>
            )}

            {techList.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {techList.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-green-300 px-2 py-0.5 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {projects.length > 0 && (
        <div className="text-gray-400 pt-4">
          <div>
            <span className="text-yellow-400">Usage:</span>{" "}
            <a className="italic">cat projects/[project-name]</a> for details
          </div>

          <div>
            <span className="text-yellow-400">Example:</span>{" "}
            <span className="italic">cat projects/{projects[0]?.slug}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
