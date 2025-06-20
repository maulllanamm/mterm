const ListFilesContent = () => {
  const files = [{ name: "about.txt", type: "file", icon: "📄" }];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-2">
      {files.map((file, index) => (
        <div
          key={index}
          className={`flex items-center space-x-2 p-2 rounded transition-colors hover:bg-gray-800 cursor-pointer ${
            file.type === "directory"
              ? "text-blue-400"
              : file.type === "executable"
              ? "text-yellow-400"
              : "text-green-400"
          }`}
        >
          <span>{file.icon}</span>
          <span className="text-sm">{file.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ListFilesContent;
