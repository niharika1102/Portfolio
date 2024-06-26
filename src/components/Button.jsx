import React from 'react';

function Button({ label }) {
  return (
    <button className="flex items-center rounded-xl bg-gradient-1 px-5 py-4 text-[20px] font-body-1 font-bold text-black-1 transition duration-300 ease-in-out hover:bg-gradient-hover focus:bg-gradient-hover">
      {label}
    </button>
  );
}

export default Button;