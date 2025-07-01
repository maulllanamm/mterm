import type { SocialMedia } from "../../interfaces/SocialMedia";

interface WhoamiContentProps {
  name: string;
  title: string;
  email: string;
  summary: string;
  socialMedia: SocialMedia[];
}

const WhoamiContent: React.FC<WhoamiContentProps> = ({
  name,
  title,
  email,
  summary,
  socialMedia,
}) => {
  return (
    <div className="space-y-3 text-sm">
      <div className="text-green-400 font-semibold">👨‍💻 {title}</div>
      <div className="space-y-1">
        <div>
          <span className="text-blue-400">Name:</span>{" "}
          <span className="text-gray-300">{name}</span>
        </div>
        <div>
          <span className="text-blue-400">Role:</span>{" "}
          <span className="text-gray-300">{title}</span>
        </div>
        <div>
          <span className="text-blue-400">Summary:</span>{" "}
          <span className="text-gray-300">{summary}</span>
        </div>
        <div>
          <span className="text-blue-400">Email:</span>{" "}
          <span className="text-gray-300">{email}</span>
        </div>
      </div>
      <div>
        <div className="text-yellow-400 mb-2">Social Media:</div>
        <div className="ml-4 text-gray-300 space-y-1">
          {socialMedia.map((data) => (
            <div key={data.id}>
              • {data.platform} :{" "}
              <a href={data.url} target="_blank">
                {data.url}
              </a>
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
