import Header from "./component/Header";
import TerminalBody from "./component/TerminalBody";

function MTermApp() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Header />
      <TerminalBody />
    </div>
  );
}

export default MTermApp;
