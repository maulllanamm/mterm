const Header = () => {
  return (
    <>
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900 border-b-2 border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-sm">maulana@mterm:~$</div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
