import type { Project } from "../../interfaces/Project";
import { ProjectContent } from "./ProjectContent";

interface CatContentProps {
  args: string[];
  projects: Project[];
}

export const CatContent: React.FC<CatContentProps> = ({ args, projects }) => {
  console.log(args);
  if (!args[0]) {
    return <span className="text-red-400">cat: missing file operand</span>;
  }

  const fileName = args[0];
  const contentMap: Record<string, React.ReactNode> = (projects ?? []).reduce(
    (map: Record<string, React.ReactNode>, project: Project) => {
      if (project.slug) {
        map[`projects/${project.slug}`] = <ProjectContent project={project} />;
      }
      return map;
    },
    {}
  );

  if (contentMap[fileName]) {
    return contentMap[fileName];
  } else {
    return (
      <span className="text-red-400">
        cat: {fileName}: No such file or directory
      </span>
    );
  }
};
