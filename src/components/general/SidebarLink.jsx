import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = ({ icon: Icon, title,to }) => {
  return (
    <Link to={to} className='p-4 pl-8 flex flex-row ju items-center cursor-pointer hover:bg-neutral-800 transition'>
      <div className='text-xl text-white mr-2'>
        <Icon size={25} />
      </div>
      <div className='font-semibold text-white pl-5'>{title}</div>
    </Link>
  );
};

export default SidebarLink;