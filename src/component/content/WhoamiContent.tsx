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
    const userId = "233b68de-ba0e-4089-a795-b78776ad3dd7";
    const fetchUserAbout = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/users/${userId}/about`);
        console.log(res);
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
      <div className="text-green-400 font-semibold">👨‍💻 .NET Developer</div>
      <div className="space-y-1">
        <div>
          <span className="text-blue-400">Name:</span>{" "}
          <span className="text-gray-300">Maulana Muhammad</span>
        </div>
        <div>
          <span className="text-blue-400">Role:</span>{" "}
          <span className="text-gray-300">.NET Developer</span>
        </div>
        <div>
          <span className="text-blue-400">Focus:</span>{" "}
          <span className="text-gray-300">
            Building scalable APIs and distributed systems
          </span>
        </div>
      </div>

      <div>
        <div className="text-yellow-400 mb-2">Specialization:</div>
        <div className="ml-4 text-gray-300 space-y-1">
          <div>• RESTful API Development</div>
          <div>• Microservices Architecture</div>
          <div>• Database Design & Optimization</div>
          <div>• Cloud Infrastructure (AWS/GCP)</div>
          <div>• DevOps & CI/CD Pipelines</div>
        </div>
      </div>

      <div className="text-green-400 font-semibold">
        Current Status: Available for new opportunities! 🚀
      </div>
    </div>
  );
};

export default WhoamiContent;
