import AsciiBanner from "./AsciiBanner";

const TerminalInitMessage = () => {
  return (
    <div className="space-y-4">
      <AsciiBanner />
      <div className="text-gray-300">
        Welcome to my interactive portfolio terminal!
        <br />
        Type <span className="text-blue-400 font-semibold">'help'</span> to see
        available commands or{" "}
        <span className="text-blue-400 font-semibold">'ls'</span> to explore.
        <br />
        <br />
        <span className="text-yellow-400">💡 Pro tip:</span> Use TAB for
        autocomplete and UP/DOWN arrows for command history
      </div>
    </div>
  );
};

export default TerminalInitMessage;
