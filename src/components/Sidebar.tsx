import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto border-r">
      <h2 className="text-lg font-semibold mb-4">History</h2>
      <ul className="space-y-2">
        {[...Array(10)].map((_, i) => (
          <li key={i} className="text-sm cursor-pointer hover:bg-gray-200 p-2 rounded">
            Conversation {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
