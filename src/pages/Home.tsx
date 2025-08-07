import {
  FaSearch,
  FaTimes,
  FaLightbulb,
  FaGlobe,
  FaMicrophone,
  FaPaperclip,
  FaLanguage,
  FaQuestion,
} from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";

export default function App() {
  const tags = ["Parenting", "Compare", "Troubleshoot", "Health", "Sports"];

  return (
    <div className="min-h-screen bg-[#202020] text-white flex flex-col items-center justify-center px-4 relative">
      {/* Logo */}
      <h1 className="text-5xl font-light mb-12 tracking-tight">perplexity</h1>

      {/* Search Box */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl w-full max-w-2xl p-6 shadow-lg">
        {/* Input */}
        <div className="mb-6">
          <Input
            placeholder="Ask anything or @mention a Space"
            className="bg-transparent text-white placeholder-gray-400 text-lg px-4 py-3 border border-[#333] rounded-xl w-full"
          />
        </div>

        {/* Icons Row */}
        <div className="flex justify-between items-center">
          {/* Left Icons */}
          <div className="flex space-x-2">
            <Button className="rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] text-cyan-400" size="icon">
              <FaSearch />
            </Button>
            <Button className="rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white" size="icon">
              <FaTimes />
            </Button>
            <Button className="rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] text-yellow-400" size="icon">
              <FaLightbulb />
            </Button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <FaLanguage className="hover:text-gray-300 cursor-pointer text-lg" />
            <FaGlobe className="hover:text-gray-300 cursor-pointer text-lg" />
            <FaPaperclip className="hover:text-gray-300 cursor-pointer text-lg" />
            <FaMicrophone className="hover:text-gray-300 cursor-pointer text-lg" />
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-xl p-2 h-auto w-auto" size="icon">
              <BsSoundwave />
            </Button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tags.map((tag, i) => (
          <Button
            key={i}
            variant="outline"
            className="bg-[#1f1f1f] border border-[#333] text-sm px-4 py-2 rounded-xl hover:bg-[#2a2a2a] text-white transition"
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Bottom Right Floating Panel */}
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center space-x-2 bg-[#1a1a1a] border border-[#333] px-3 py-2 rounded-xl shadow-md">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white transition"
            title="Language"
          >
            <FaLanguage />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white transition"
            title="Help"
          >
            <FaQuestion />
          </Button>
        </div>
      </div>
    </div>
  );
}
