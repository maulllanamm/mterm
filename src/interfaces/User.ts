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
}
