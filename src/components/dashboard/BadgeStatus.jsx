import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const BadgeStatus = ({ value, status }) => {
  if (status === "low status")
    return (
      <div className='flex gap-2 items-center w-[80px] h-[25px] p-2 bg-red-300 text-red-600'>
        <FiAlertTriangle />
        <p>Low Status</p>
      </div>
    );
};

export default BadgeStatus;
