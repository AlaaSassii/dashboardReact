import React from "react";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='min-w-[300px] h-[40px] rounded shadow-md  '
    />
  );
};

export default Input;
