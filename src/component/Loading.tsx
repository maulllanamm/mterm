const Loading = () => {
  return (
    <div className="flex items-center space-x-2 text-yellow-400">
      <div className="animate-spin">⚡</div>
      <span>Processing...</span>
    </div>
  );
};

export default Loading;
