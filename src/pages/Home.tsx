import { useState } from "react";


const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
     <div className="min-h-screen bg-[#171717] text-gray-100 flex flex-col items-center justify-center p-4 font-inter">
      {/* Perplexity Logo/Title */}
      <h1 className="text-5xl font-semibold mb-12 text-white tracking-wide">perplexity</h1>

      {/* Search Bar Container */}
      <div className="w-full max-w-2xl bg-[#262626] rounded-2xl p-2 flex flex-col shadow-2xl border border-gray-700/50">
        {/* Input Field */}
        <div className="flex items-center px-4 py-3">
          <input
            type="text"
            placeholder="Ask anything or @mention a Space"
            className="flex-grow bg-transparent text-lg text-gray-200 placeholder-gray-500 focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Icons below the input field */}
        <div className="flex justify-between items-center px-4 py-2 border-t border-gray-700">
          <div className="flex space-x-2 text-gray-400">
            {/* Search Icon */}
            <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            {/* Grid Icon (for Spaces) */}
            <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </button>
            {/* Star Icon (for Collections) */}
            <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.176l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.329-1.176l-3.976-2.888c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"></path></svg>
            </button>
          </div>

          <div className="flex space-x-2">
            {/* Calendar Icon */}
            <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200 text-gray-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </button>
            {/* Globe Icon */}
            <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200 text-gray-400 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2m-2 2h2m2 2h2M7 20H5a2 2 0 01-2-2v-2a2 2 0 012-2h2m3-10h2m3 0h2M7 14h.01M17 14h.01M17 18h.01M12 21a9 9 0 100-18 9 9 0 000 18z"></path></svg>
            </button>
            {/* Microphone Icon (active) */}
            <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-14 0v-1a7 7 0 0114 0v1z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18v3m-3-3h6"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {['Compare', 'Perplexity 101', 'Health', 'Learn', 'Fact Check'].map((tag) => (
          <button
            key={tag}
            className="px-5 py-2 bg-[#262626] text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700/50 transition-colors duration-200 shadow-md border border-gray-700/50"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
