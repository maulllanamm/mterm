import { useEffect, useRef, useState } from "react";
import type { CommandHandler } from "../interfaces/CommandHandler";
import type { HistoryEntry } from "../interfaces/HistoryEntry";
import type { User } from "../interfaces/User";
import { DateContent } from "./contents/DateContent";
import HelpContent from "./contents/HelpContent";
import { HistoryContent } from "./contents/HistoryContent";
import ListFilesContent from "./contents/ListFilesContent";
import ProjectsContent from "./contents/ProjectsContent";
import SkillsContent from "./contents/SkillsContent";
import WhoamiContent from "./contents/WhoamiContent";
import History from "./History";
import Loading from "./Loading";
import TerminalInitMessage from "./TerminalInitMessage";
import TerminalInput from "./TerminalInput";
import { educations } from "../commands/educations";
import { EducationsContent } from "./contents/EducationsContent";
import ExperienceContent from "./contents/ExperienceContent";
import CertificatesContent from "./contents/CertificatesContent";

const TerminalBody = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [currentPath, setCurrentPath] = useState("/home/portfolio");
  const [user, setUser] = useState<User | null>(null);

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

  const processCommand = async (cmd: string) => {
    const commands: Record<string, CommandHandler> = {
      help: async () => <HelpContent />,
      ls: async () => <ListFilesContent />,
      history: async () => <HistoryContent history={commandHistory} />,
      projects: async () => <ProjectsContent projects={user?.projects ?? []} />,
      skills: async () => <SkillsContent skills={user?.skills ?? []} />,
      clear: async () => {
        clearTerminal();
        return null;
      },
      date: async () => <DateContent />,
      whoami: async () => (
        <WhoamiContent
          name={user?.name ?? ""}
          title={user?.title ?? ""}
          email={user?.email ?? ""}
          summary={user?.summary ?? ""}
          socialMedia={user?.socialMedias ?? []}
        />
      ),
      educations: async () => (
        <EducationsContent education={user?.educations ?? []} />
      ),
      experiences: async () => (
        <ExperienceContent experiences={user?.experiences ?? []} />
      ),
      certificates: async () => (
        <CertificatesContent certificates={user?.certificates ?? []} />
      ),
    };

    if (commands[cmd]) {
      return commands[cmd]();
    } else {
      return (
        <div>
          <span className="text-red-400">Command not found: {cmd}</span>
          <br />
          <span className="text-gray-400">
            Type 'help' to see available commands.
          </span>
        </div>
      );
    }
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
      "pwd",
      "clear",
      "whoami",
      "date",
      "history",
      "skills",
      "projects",
      "educations",
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
    const fetchApi = async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const userId = import.meta.env.VITE_USER_ID;

      try {
        const res = await fetch(`${baseUrl}/api/users/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch user profile");
        const data: User = await res.json();
        setUser(data);
      } catch (err) {
        console.log("error fetch api  ");
      } finally {
        setIsLoading(false);
      }
    };

    const initialHistory: HistoryEntry = {
      type: "system",
      content: <TerminalInitMessage />,
    };
    addToHistory(initialHistory);
    fetchApi();
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
