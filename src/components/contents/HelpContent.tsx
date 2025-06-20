const HelpContent = () => {
  return (
    <div className="space-y-2 text-sm">
      <div className="text-green-400 font-semibold">Available Commands:</div>
      <div className="ml-4 space-y-1">
        <div className="text-blue-400">Portfolio:</div>
        <div className="ml-4 text-gray-300">
          <div>whoami - About me</div>
          <div>skills - Show technical skills</div>
          <div>projects - List all projects</div>
          <div>contact - Get contact information</div>
        </div>

        <div className="text-blue-400">System:</div>
        <div className="ml-4 text-gray-300">
          <div>clear - Clear terminal (or Ctrl+L)</div>
          <div>history - Show command history</div>
          <div>date - Show current date</div>
          <div>echo [text] - Display text</div>
          <div>help - Show this help</div>
        </div>
      </div>
    </div>
  );
};

export default HelpContent;
