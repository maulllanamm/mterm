import { useEffect, useRef } from "react";

interface TerminalInputProps {
  currentInput: string;
  setCurrentInput: (value: string) => void;
  onExecuteCommand: () => void;
  onAutocomplete: () => void;
  onNavigateHistory: (direction: number) => void;
}

const TerminalInput = ({
  currentInput,
  setCurrentInput,
  onExecuteCommand,
  onAutocomplete,
  onNavigateHistory,
}: TerminalInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onExecuteCommand();
    } else if (e.key === "Tab") {
      e.preventDefault();
      onAutocomplete();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      onNavigateHistory(1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div
      className="flex items-center space-x-2"
      onClick={() => inputRef.current?.focus()}
    >
      <span className="text-green-400 font-semibold">maulana@mterm:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono caret-green-400"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default TerminalInput;
