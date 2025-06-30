import type { Skill } from "../../interfaces/Skill";

interface SkillsContentProps {
  skills: Skill[];
}

const skillTypeLabels: Record<number, string> = {
  1: "Frontend",
  2: "Backend",
  3: "DevOps",
  4: "Database",
  5: "Soft Skill",
  99: "Other",
};

const getRandomColorClass = () => {
  const colors = [
    "bg-green-400",
    "bg-blue-400",
    "bg-teal-400",
    "bg-cyan-400",
    "bg-emerald-400",
    "bg-sky-400",
    "bg-indigo-400",
    "bg-purple-400",
  ];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const SkillsContent: React.FC<SkillsContentProps> = ({ skills }) => {
  // Group skills by type
  const groupedSkills = skills.reduce<Record<number, Skill[]>>((acc, skill) => {
    if (!acc[skill.type]) acc[skill.type] = [];
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <div className="space-y-6 text-sm text-gray-300">
      <div className="text-green-400 font-semibold text-base">
        🛠️ Technical Skills
      </div>

      {Object.entries(groupedSkills).map(([type, skillsInGroup]) => (
        <div key={type}>
          <div className="text-yellow-400 font-semibold mb-2">
            {skillTypeLabels[parseInt(type)] ?? "Unknown"}
          </div>

          <div className="space-y-2">
            {skillsInGroup.map((skill) => {
              const colorClass = getRandomColorClass();

              return (
                <div key={skill.id} className="flex items-center space-x-4">
                  <div className="w-28 text-blue-400">{skill.name}</div>
                  <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${colorClass} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-gray-400 w-10 text-right">
                    {skill.level}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;
