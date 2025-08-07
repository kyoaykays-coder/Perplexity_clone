// input.tsx
export const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-xl bg-[#1a1a1a] text-white border border-[#333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 ${className}`}
    {...props}
  />
);

// button.tsx
export const Button = ({ className = "", children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a] hover:text-white transition-all duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);
