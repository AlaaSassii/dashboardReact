import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ icon: Icon, title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` ${
          isActive
            ? "text-yellow-300 p-4 pl-8 flex flex-row ju items-center cursor-pointer hover:bg-neutral-800 transition"
            : "text-white p-4 pl-8 flex flex-row ju items-center cursor-pointer hover:bg-neutral-800 transition"
        }`
      }
    >
      <div className='text-xl mr-2'>
        <Icon size={25} />
      </div>
      <div className='font-semibold  pl-5'>{title}</div>
    </NavLink>
  );
};

export default SidebarLink;
