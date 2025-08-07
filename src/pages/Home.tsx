import { FaSearch, FaTimes, FaLightbulb, FaGlobe, FaMicrophone, FaPaperclip, FaLanguage, FaQuestion } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";

export default function App() {
  const tags = ["Parenting", "Compare", "Troubleshoot", "Health", "Sports"];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4 relative">
      {/* Logo */}
      <h1 className="text-5xl font-light mb-10">perplexity</h1>

      {/* Search Box */}
      <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl w-full max-w-2xl p-6">
        
        {/* Input Field on Top */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Ask anything or @mention a Space"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-lg px-4 py-3 border border-[#2a2a2a] rounded-xl"
          />
        </div>

        {/* Icons Row (3 Left + Space + 5 Right) */}
        <div className="flex justify-between items-center">
          
          {/* Left Side Icons (3) */}
          <div className="flex space-x-2">
            <button className="p-2 rounded-xl hover:bg-gray-800"><FaSearch className="text-cyan-400" /></button>
            <button className="p-2 rounded-xl hover:bg-gray-800"><FaTimes /></button>
            <button className="p-2 rounded-xl hover:bg-gray-800"><FaLightbulb /></button>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right Side Icons (5) */}
          <div className="flex items-center space-x-5">
            <FaLanguage className="hover:text-gray-300 cursor-pointer" />
            <FaGlobe className="hover:text-gray-300 cursor-pointer" />
            <FaPaperclip className="hover:text-gray-300 cursor-pointer" />
            <FaMicrophone className="hover:text-gray-300 cursor-pointer" />
            <button className="bg-cyan-400 text-black rounded-xl p-2 hover:bg-cyan-500">
              <BsSoundwave />
            </button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {tags.map((tag, i) => (
          <button
            key={i}
            className="flex items-center space-x-1 px-4 py-2 bg-[#1f1f1f] rounded-xl border border-[#333] text-sm hover:bg-[#2a2a2a] transition"
          >
            <span>{tag === "Compare" ? "" :
                    tag === "Troubleshoot" ? "" :
                    tag === "Health" ? "" :
                    tag === "Sports" ? "" :
                    ""}</span>
            <span className="font-medium">{tag}</span>
          </button>
        ))}
      </div>

      {/* Bottom Right Icons */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-gray-400">
        <button className="hover:text-white"><FaLanguage /></button>
        <button className="hover:text-white"><FaQuestion /></button>
      </div>
    </div>
  );
}
