import Header from "./components/Header";
import TerminalBody from "./components/TerminalBody";

function MTermApp() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Header />
      <TerminalBody />
    </div>
  );
}

export default MTermApp;
