import { useEffect, useRef, useState, type ReactNode } from "react";

interface HistoryEntry {
  type: "system" | "input" | "output";
  content: ReactNode;
}

const Body = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const addToHistory = (entry: HistoryEntry) => {
    setHistory((prev) => [...prev, entry]);
  };

  // Initialize terminal
  useEffect(() => {
    addToHistory({
      type: "system",
      content: (
        <div className="space-y-4">
          <pre className="whitespace-pre font-mono text-sm leading-tight text-green-400 overflow-x-auto block">
            {`
    __  _________                  
   /  |/  /_  __/__  _________ ___ 
  / /|_/ / / / / _ \\/ ___/ __ '__ \\ 
 / /  / / / / /  __/ /  / / / / / /
/_/  /_/ /_/  \\___/_/  /_/ /_/ /_/                         
`}
          </pre>
          <div className="text-gray-300">
            Welcome to my interactive portfolio terminal!
            <br />
            Type <span className="text-blue-400 font-semibold">'help'</span> to
            see available commands or{" "}
            <span className="text-blue-400 font-semibold">'ls'</span> to
            explore.
            <br />
            <br />
            <span className="text-yellow-400">💡 Pro tip:</span> Use TAB for
            autocomplete and UP/DOWN arrows for command history
          </div>
        </div>
      ),
    });

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-6 h-screen overflow-y-auto bg-gradient-to-br from-black to-gray-900"
        onClick={() => inputRef.current?.focus()}
      >
        {/* History */}
        <div className="space-y-4 mb-4">
          {history.map((entry, index) => (
            <div key={index}>
              {entry.type === "input" && (
                <div className="text-green-400">{entry.content}</div>
              )}
              {entry.type === "output" && (
                <div className="text-gray-300 ml-4">{entry.content}</div>
              )}
              {entry.type === "system" && <div>{entry.content}</div>}
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex items-center space-x-2 text-yellow-400">
            <div className="animate-spin">⚡</div>
            <span>Processing...</span>
          </div>
        )}

        {/* Input Line */}
        <div className="flex items-center space-x-2">
          <span className="text-green-400 font-semibold">maulana@mterm:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono caret-green-400"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
