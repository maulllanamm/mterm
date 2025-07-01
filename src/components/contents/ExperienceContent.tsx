import type { Experience } from "../../interfaces/Experience";

interface ExperienceContentProps {
  experiences: Experience[];
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  experiences,
}) => {
  if (experiences.length === 0) {
    return <div className="text-red-400">No work experience found.</div>;
  }

  const sortExperiences = experiences.slice().sort((a, b) => {
    const aEnd = a.endDate ? new Date(a.endDate).getTime() : Infinity;
    const bEnd = b.endDate ? new Date(b.endDate).getTime() : Infinity;

    if (bEnd !== aEnd) {
      return bEnd - aEnd;
    }

    const aStart = new Date(a.startDate).getTime();
    const bStart = new Date(b.startDate).getTime();
    return bStart - aStart;
  });
  return (
    <div className="space-y-4 text-sm text-gray-300">
      <div className="text-green-400 font-semibold text-base">
        💼 Work Experiences
      </div>
      {sortExperiences.map((exp) => (
        <div
          key={exp.id}
          className="ml-4 border-l-2 border-yellow-400 pl-4 space-y-1"
        >
          <div className="text-yellow-400 font-semibold">{exp.role}</div>
          <div className="text-gray-400 italic">{exp.company}</div>
          <div className="text-gray-400 text-xs">
            {new Date(exp.startDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {exp.endDate
              ? new Date(exp.endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })
              : "Present"}
          </div>
          <div className="text-gray-300">{exp.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
