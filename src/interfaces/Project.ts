export interface Project {
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  userId: string;
  title: string;
  description: string;
  url: string;
  github: string;
  tech: string;
  features: string;
  slug: string;
}
