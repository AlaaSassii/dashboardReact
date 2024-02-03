import React, { useContext } from "react";
import image from "../../assets/kailashNew.png";
import { MdDashboard } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
import { GiRobotGrab } from "react-icons/gi";
import { IoReceipt } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import SidebarLink from "./SidebarLink";
import MenuContext from "./openMenu";

const Sidebar = () => {
  const { openMenu } = useContext(MenuContext);
  const { setOpenMenu } = useContext(MenuContext);
  

  return (
    <div
      className={`fixed  z-30 transition-transform duration-500 ease-in-out
       ${openMenu ? "hidden md:block" : ""} `}
    >
      <div className='bg-black fixed p-50 text-white h-full w-[208px] flex flex-col items-center justify-center   '>
        <div
          className='absolute  text-white top-2 right-2 cursor-pointer hover:scale-105 transition  md:hidden'
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <IoCloseSharp size={32} />
        </div>
        <img
          src={image}
          width={120}
          height={150}
          alt='logo'
          className='pt-5 pb-5'
        />

        <div className='flex flex-col  h-full overflow-y-hidden'>
          <SidebarLink title='Dashboard' to='dashboard' icon={MdDashboard} />
          <SidebarLink title='approvals' to='approvals' icon={FaCheckCircle} />

          <SidebarLink
            title='Warehouses'
            to='warehouses'
            icon={FaHouseChimney}
          />
          <SidebarLink title='Groups' to='groups' icon={MdGroups} />
          <SidebarLink title='Sites' to='sites' icon={TbTableOptions} />
          <SidebarLink title='Inventory' to='inventory' icon={MdInventory} />
          <SidebarLink title='Machinery' to='machinery' icon={GiRobotGrab} />
          <SidebarLink title='Receipts' to='receipts' icon={IoReceipt} />
          <SidebarLink title='Sales' to='sales' icon={AiFillDollarCircle} />
          <SidebarLink title='Staffs' to='staffs' icon={FaUserGroup} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
