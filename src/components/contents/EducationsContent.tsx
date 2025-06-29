import type { Educations } from "../../interfaces/Education";

interface EducationsProps {
  education: Educations[];
}

export const EducationsContent: React.FC<EducationsProps> = ({ education }) => {
  return (
    <div className="space-y-4 text-sm">
      <div className="text-green-400 font-semibold">
        🎓 Educational Background
      </div>
      {education.map((edu) => (
        <div key={edu.id} className="border-l-2 border-blue-400 pl-4 space-y-2">
          <div>
            <div className="text-blue-400 font-semibold">{edu.degree}</div>
            <div className="text-yellow-400">{edu.institution}</div>
            <div className="text-gray-400">
              {edu.startYear} - {edu.endYear || "Present"}
            </div>
          </div>
          <div className="text-gray-300">{edu.description}</div>
        </div>
      ))}
    </div>
  );
};
