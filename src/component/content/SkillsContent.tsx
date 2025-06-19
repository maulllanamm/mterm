import React from "react";

const SkillsContent = () => {
  const skills = [{ name: ".NET", level: 90, color: "bg-purple-500" }];

  return (
    <div className="space-y-3">
      <div className="text-green-400 font-semibold">🛠️ Technical Skills</div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-20 text-blue-400 text-sm">{skill.name}</div>
            <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="text-gray-400 text-sm w-8">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
