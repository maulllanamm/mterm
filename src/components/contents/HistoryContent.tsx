interface HistoryContentProps {
  history: string[];
}

export const HistoryContent = ({ history }: HistoryContentProps) => {
  return (
    <div className="space-y-1 text-sm">
      <div className="text-green-400 font-semibold">Command History</div>
      {history.slice(0, 10).map((cmd, index) => (
        <div key={index} className="text-gray-300">
          <span className="text-blue-400">{history.length - index}:</span> {cmd}
        </div>
      ))}
    </div>
  );
};
