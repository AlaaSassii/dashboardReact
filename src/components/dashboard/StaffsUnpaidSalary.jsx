import { FaRegCheckCircle } from "react-icons/fa";

import React from "react";

const StaffsUnpaidSalary = ({ number, title }) => {
  return (
    <div className='flex flex-col justify-center items-center  p-4 mb-2 w-full bg-neutral-50 shadow-md rounded '>
      <div className='mb-5 text-rose-500'>
        <FaRegCheckCircle size={70} />
      </div>
      <div className=' font-bold text-lg mb-2'>{number}</div>
      <div className='  text-sm'>{title}</div>
    </div>
  );
};

export default StaffsUnpaidSalary;
