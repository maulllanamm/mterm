import { useEffect, useRef, useState } from "react";
import type { HistoryEntry } from "../types/HistoryEntry";
import AsciiBanner from "./AsciiBanner";
import History from "./History";
import Loading from "./Loading";

const Body = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const addToHistory = (entry: HistoryEntry) => {
    setHistory((prev) => [...prev, entry]);
  };
  // Initialize terminal
  useEffect(() => {
    const initialHistory: HistoryEntry = {
      type: "system",
      content: (
        <div className="space-y-4">
          <AsciiBanner />
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
    };
    addToHistory(initialHistory);
    inputRef.current?.focus();
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
        <History entries={history} />
        {/* Loading indicator */}
        {isLoading && <Loading />}
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
