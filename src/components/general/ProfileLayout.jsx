import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <div
      className='
      w-full p-2 md:w-[calc(100%-208px)] md:ml-52 min-h-screen bg-white transition-all main
    '
    >
      {children}
    </div>
  );
};

export default ProfileLayout;
