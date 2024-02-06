import { ChildCare } from "@mui/icons-material";
import React from "react";

const Modal = ({ children, title, close, onClick }) => {
  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-50 '>
      <div className='bg-white p-6 rounded-md shadow-lg w-[450px] '>
        <div className='flex justify-between'>
          <div className='text-xl text-black font-600'>{title}</div>
          <button className='text-gray-500 hover:text-gray-700' onClick={close}>
            <svg
              className='h-6 w-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>
        <div className='mt-4'>{children}</div>
        <div className='mt-2 flex gap-3'>
          <button className='btn btn-outline btn-success' onClick={onClick}>
            Save
          </button>
          <button
            className='btn  bg-white border border-gray-200 text-black hover:text-white'
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
