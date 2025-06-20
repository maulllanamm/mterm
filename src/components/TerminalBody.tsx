import { useEffect, useRef, useState } from "react";
import type { HistoryEntry } from "../interfaces/HistoryEntry";
import History from "./History";
import Loading from "./Loading";
import TerminalInitMessage from "./TerminalInitMessage";
import TerminalInput from "./TerminalInput";
import { commandRegistry } from "../commands";

const TerminalBody = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalRef = useRef<HTMLDivElement | null>(null);
  const addToHistory = (entry: HistoryEntry) => {
    setHistory((prev) => [...prev, entry]);
  };

  const addToCommandHistory = (command: string) => {
    setCommandHistory((prev) => [command, ...prev.slice(0, 49)]);
    setHistoryIndex(-1);
  };

  const executeCommand = async () => {
    const command = currentInput.trim();
    if (!command) return;

    addToCommandHistory(command);
    addToHistory({
      type: "input",
      content: `maulana@mterm:~$ ${command}`,
    });

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const [cmd] = command.split(" ");
    const result = await processCommand(cmd.toLocaleLowerCase());
    if (result) {
      addToHistory({
        type: "output",
        content: result,
      });
    }

    setCurrentInput("");
    setIsLoading(false);
  };

  const processCommand = async (
    cmd: string
  ): Promise<React.ReactNode | null> => {
    if (cmd === "clear" || cmd === "cls") {
      clearTerminal();
      return null;
    }

    if (commandRegistry[cmd]) {
      return await commandRegistry[cmd]();
    }

    return (
      <div>
        <span className="text-red-400">Command not found: {cmd}</span>
        <br />
        <span className="text-gray-400">
          Type 'help' to see available commands.
        </span>
      </div>
    );
  };

  const clearTerminal = () => {
    setHistory([]);
    const initialHistory: HistoryEntry = {
      type: "system",
      content: <TerminalInitMessage />,
    };
    addToHistory(initialHistory);
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

  const onNavigateHistory = (direction: number) => {
    const newIndex = historyIndex + direction;
    if (newIndex >= -1 && newIndex < commandHistory.length) {
      setHistoryIndex(newIndex);
      setCurrentInput(newIndex === -1 ? "" : commandHistory[newIndex]);
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
          onExecuteCommand={executeCommand}
          onNavigateHistory={onNavigateHistory}
        />
      </div>
    </>
  );
};

export default TerminalBody;
