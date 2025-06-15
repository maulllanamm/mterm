import { type ReactNode } from "react";

export interface HistoryEntry {
  type: "system" | "input" | "output";
  content: ReactNode;
}
