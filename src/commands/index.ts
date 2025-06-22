import type { CommandHandler } from "../interfaces/CommandHandler";
import { date } from "./date";
import { help } from "./help";
import { ls } from "./ls";
import { projects } from "./projects";
import { skills } from "./skills";
import { whoami } from "./whoami";

export const commandRegistry: Record<string, CommandHandler> = {
  whoami,
  help,
  ls,
  projects,
  skills,
  date,
};
