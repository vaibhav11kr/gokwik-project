import React from 'react';

const Divider = () => {
  return (
    <div className="relative flex py-10 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400 font-extrabold">or</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default Divider;
