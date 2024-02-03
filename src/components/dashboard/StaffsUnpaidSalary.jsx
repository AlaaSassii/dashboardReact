import { FaRegCheckCircle } from "react-icons/fa";

import React from "react";

const StaffsUnpaidSalary = ({ title,date }) => {
  return (
    <div className="flex flex-col p-4 mb-2 w-full  bg-red-50 shadow-md rounded ">
      <div className="font-bold font-lg mb-2 ">{title}</div>
      <div className="flex "><div className="font-bold text-sm">Warehouse : </div><p>{date}</p></div>

    </div>
  );
};

export default StaffsUnpaidSalary;
