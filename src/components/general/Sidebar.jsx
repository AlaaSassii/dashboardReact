import React from 'react'
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


import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <div className=
        "bg-black fixed p-50 text-white h-full w-[200px] flex flex-col"
    >
      <img src={image} alt="logo" className='p-8'/>

      <div className='flex flex-col justify-center h-full overflow-y-auto' >
        
        <SidebarLink title="Dashboard" icon={MdDashboard}/>
        <SidebarLink title="Approvais" icon={FaCheckCircle}/>
        <SidebarLink title="Warehouses" icon={FaHouseChimney}/>
        <SidebarLink title="Groups" icon={MdGroups}/>
        <SidebarLink title="Sites" icon={TbTableOptions}/>
        <SidebarLink title="Inventory" icon={MdInventory}/>
        <SidebarLink title="Machinery" icon={GiRobotGrab}/>
        <SidebarLink title="Receipts" icon={IoReceipt}/>
        <SidebarLink title="Sales" icon={AiFillDollarCircle}/>
        <SidebarLink title="Staffs" icon={FaUserGroup}/>
      </div>
        
    </div>
  )
}

export default Sidebar