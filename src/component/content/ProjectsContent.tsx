const ProjectsContent = () => {
  return (
    <div className="space-y-3 text-sm">
      <div className="text-green-400 font-semibold">🚀 Projects Portfolio</div>
      <div>
        <div className="text-blue-400 mb-2">Available projects:</div>
        <div className="ml-4 space-y-1 text-gray-300">
          <div>
            • <span className="text-yellow-400">maulllanam-api-be</span> -
            RESTful API for Maulana's profile
          </div>
          <div>
            • <span className="text-yellow-400">MTerm</span> - CLI Portofolio
            Maulana
          </div>
        </div>
      </div>
      <div className="text-gray-400">
        <div>
          <span className="text-yellow-400">Usage:</span> cat
          projects/[project-name] for details
        </div>
        <div>
          <span className="text-yellow-400">Example:</span> cat
          projects/maulllanam-api-be
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
