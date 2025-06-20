export interface SocialMedia {
  platform: string;
  url: string;
}

export interface UserAbout {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  socialMedias: SocialMedia[];
}
