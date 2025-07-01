const HelpContent = () => {
  return (
    <div className="space-y-2 text-sm">
      <div className="text-green-400 font-semibold">Available Commands:</div>
      <div className="ml-4 space-y-1">
        <div className="text-blue-400">Portfolio:</div>
        <div className="ml-4 text-gray-300">
          <div>whoami - Show basic personal information</div>
          <div>skills - List technical skills</div>
          <div>projects - Show portfolio projects</div>
          <div>experiences - Display work experiences</div>
          <div>educations - Show educational background</div>
          <div>certificates - List earned certificates</div>
        </div>

        <div className="text-blue-400">System:</div>
        <div className="ml-4 text-gray-300">
          <div>history - Show command history</div>
          <div>ls - Show list files</div>
          <div>date - Show current date</div>
          <div>help - Show this help</div>
        </div>
      </div>
    </div>
  );
};

export default HelpContent;
