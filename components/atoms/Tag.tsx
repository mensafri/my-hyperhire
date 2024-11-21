export default function Tag() {
  return (
    <div className="relative inline-block animate-fadeIn delay-300">
      {/* Bubble Container */}
      <div className="bg-white text-cyan-500 px-4 py-2 rounded-lg shadow-md font-medium">풀타임, 파트타임</div>

      {/* Pointer */}
      <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
    </div>
  );
}
