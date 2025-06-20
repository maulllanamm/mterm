import type { CommandHandler } from "../interfaces/CommandHandler";
import { help } from "./help";
import { ls } from "./ls";
import { whoami } from "./whoami";

export const commandRegistry: Record<string, CommandHandler> = {
  whoami,
  help,
  ls,
};
