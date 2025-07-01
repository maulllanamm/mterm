import type { Certificate } from "./Certificate";
import type { Educations } from "./Education";
import type { Experience } from "./Experience";
import type { Project } from "./Project";
import type { Skill } from "./Skill";
import type { SocialMedia } from "./SocialMedia";

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  socialMedias: SocialMedia[];
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  educations: Educations[];
  certificates: Certificate[];
}
