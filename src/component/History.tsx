import { type FC } from "react";
import type { HistoryEntry } from "../types/HistoryEntry";

interface HistoryProps {
  entries: HistoryEntry[];
}

const History: FC<HistoryProps> = ({ entries }) => {
  return (
    <div className="space-y-4 mb-4">
      {entries.map((entry, index) => (
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
  );
};

export default History;
