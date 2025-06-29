import type { UserAbout } from "../interfaces/UserAbout";

export const educations = async (): Promise<React.ReactNode> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const userId = import.meta.env.VITE_USER_ID;

  try {
    const res = await fetch(`${baseUrl}/api/users/${userId}/educations`);
    if (!res.ok) throw new Error("Failed to fetch user profile");
    const data: UserAbout = await res.json();
    return <EducationsContent />;
  } catch (error) {
    return (
      <div className="text-red-400">
        Error loading profile: {(error as Error).message}
      </div>
    );
  }
};
