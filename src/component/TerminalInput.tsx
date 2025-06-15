import { useEffect, useRef } from "react";

interface TerminalInputProps {
  currentInput: string;
  setCurrentInput: (value: string) => void;
  onAutocomplete: (prefix: string) => void;
}

const TerminalInput = ({
  currentInput,
  setCurrentInput,
  onAutocomplete,
}: TerminalInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      onAutocomplete(currentInput);
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
