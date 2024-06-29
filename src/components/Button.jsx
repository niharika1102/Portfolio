import React from 'react';

function Button({ label }) {
  return (
    <button
      className="flex items-center rounded-xl px-5 py-4 text-[20px] font-bold font-body-1 text-black-1 transition duration-300 ease-in-out bg-gradient-1 hover:bg-gradient-hover focus:outline-none focus:ring-2 focus:ring-lGreen focus:ring-opacity-50"
    >
      {label}
    </button>
  );
}

export default Button;