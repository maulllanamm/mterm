import type { CommandHandler } from "../interfaces/CommandHandler";
import { whoami } from "./whoami";

export const commandRegistry: Record<string, CommandHandler> = {
  whoami,
};
