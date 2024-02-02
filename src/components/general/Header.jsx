import React, { useContext } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import MenuContext from "./openMenu";

const Header = ({ title }) => {
  const { openMenu } = useContext(MenuContext);
  const { setOpenMenu } = useContext(MenuContext);

  return (
    <div
      className='
                fixed
                w-full
                p-3
                md:pl-56 
                font-semibold  
                shadow-md
                flex
                justify-between
    '
    >
      <div className='flex justify-center items-center cursor-pointer '>
        <div
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className='md:hidden hover:scale-105 transition '
        >
          <IoMenuSharp size={26} />
        </div>
        <div className='ml-10 font-bold'>{title}</div>
      </div>

      <div className='flex justify-center items-center gap-3 mr-0 cursor-pointer hover:bg-neutral-200 transition p-2 rounded'>
        <FaUserCircle size={26} />
        <div className='font-bold'>Admin</div>
        <IoMdArrowDropdown size={20} />
      </div>
    </div>
  );
};

export default Header;
