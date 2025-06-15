import { useEffect, useRef, useState } from "react";
import type { HistoryEntry } from "../types/HistoryEntry";
import History from "./History";
import Loading from "./Loading";
import TerminalInitMessage from "./TerminalInitMessage";
import TerminalInput from "./TerminalInput";

const TerminalBody = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const terminalRef = useRef<HTMLDivElement | null>(null);
  const addToHistory = (entry: HistoryEntry) => {
    setHistory((prev) => [...prev, entry]);
  };

  const autocomplete = () => {
    const commands = [
      "help",
      "ls",
      "cat",
      "cd",
      "pwd",
      "clear",
      "whoami",
      "date",
      "history",
      "skills",
      "projects",
      "contact",
      "tree",
      "grep",
      "echo",
    ];
    const suggestions = commands.filter((cmd) =>
      cmd.startsWith(currentInput.toLowerCase())
    );

    if (suggestions.length === 1) {
      setCurrentInput(suggestions[0] + " ");
    } else if (suggestions.length > 1) {
      addToHistory({
        type: "output",
        content: (
          <span className="text-blue-400">
            Suggestions: {suggestions.join(", ")}
          </span>
        ),
      });
    }
  };

  // Initialize terminal
  useEffect(() => {
    const initialHistory: HistoryEntry = {
      type: "system",
      content: <TerminalInitMessage />,
    };
    addToHistory(initialHistory);
  }, []);

  return (
    <>
      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-6 h-screen overflow-y-auto bg-gradient-to-br from-black to-gray-900"
      >
        {/* History */}
        <History entries={history} />
        {/* Loading indicator */}
        {isLoading && <Loading />}
        {/* Input Line */}
        <TerminalInput
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          onAutocomplete={autocomplete}
        />
      </div>
    </>
  );
};

export default TerminalBody;
