const NinjaLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-lg shadow-lg border border-gray-700 w-72 relative">
        <div className="absolute top-2 left-2 flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="mt-6 whitespace-nowrap overflow-hidden border-r-2 border-green-400 animate-typing">
          Initializing a Ninja...
        </p>
      </div>
    </div>
  );
};

export default NinjaLoader;
