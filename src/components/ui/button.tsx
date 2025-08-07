export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-3 py-2 text-sm rounded-xl transition-all duration-200 bg-[#1f1f1f] text-gray-300 hover:bg-[#2a2a2a] hover:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
