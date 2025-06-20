import type { UserAbout } from "../../interfaces/UserAbout";

interface WhoamiContentProps {
  about: UserAbout;
}

const WhoamiContent: React.FC<WhoamiContentProps> = ({ about }) => {
  return (
    <div className="space-y-3 text-sm">
      <div className="text-green-400 font-semibold">👨‍💻 {about.title}</div>
      <div className="space-y-1">
        <div>
          <span className="text-blue-400">Name:</span>{" "}
          <span className="text-gray-300">{about.name}</span>
        </div>
        <div>
          <span className="text-blue-400">Role:</span>{" "}
          <span className="text-gray-300">{about.title}</span>
        </div>
        <div>
          <span className="text-blue-400">Summary:</span>{" "}
          <span className="text-gray-300">{about.summary}</span>
        </div>
      </div>
      <div>
        <div className="text-yellow-400 mb-2">Social Media:</div>
        <div className="ml-4 text-gray-300 space-y-1">
          {about.socialMedias.map((data, index) => (
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
