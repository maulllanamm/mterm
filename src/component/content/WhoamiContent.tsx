import { useEffect, useState } from "react";

interface SocialMedia {
  platform: string;
  url: string;
}

interface UserAbout {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  socialMedias: SocialMedia[];
}

const WhoamiContent: React.FC = () => {
  const [about, setAbout] = useState<UserAbout | null>(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const userId = "1bfd5751-4c2e-406a-a5ad-167c17e3be0d";
    const fetchUserAbout = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/users/${userId}/about`);
        if (!res.ok) {
          throw new Error("Failed fetch user about");
        }
        const data: UserAbout = await res.json();

        setAbout(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserAbout();
  }, []);
  return (
    <div className="space-y-3 text-sm">
      <div className="text-green-400 font-semibold">👨‍💻 {about?.title}</div>
      <div className="space-y-1">
        <div>
          <span className="text-blue-400">Name:</span>{" "}
          <span className="text-gray-300">{about?.name}</span>
        </div>
        <div>
          <span className="text-blue-400">Role:</span>{" "}
          <span className="text-gray-300">{about?.title}</span>
        </div>
        <div>
          <span className="text-blue-400">Summary:</span>{" "}
          <span className="text-gray-300">{about?.summary}</span>
        </div>
      </div>

      <div>
        <div className="text-yellow-400 mb-2">Social Media:</div>
        <div className="ml-4 text-gray-300 space-y-1">
          {about?.socialMedias.map((data, index) => (
            <div key={index}>
              • {data.platform} : <a href={data.url}>{data.url}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-green-400 font-semibold">
        Current Status: Available for new opportunities! 🚀
      </div>
    </div>
  );
};

export default WhoamiContent;
