import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
const AddService = ({ children, HeaderTitle }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className='absolute w-screen min-h-screen z-40 bg-white top-0 left-0'>
      <nav className='flex w-full justify-between p-5 bg-black items-center'>
        <h1 className='text-4xl font-bold text-white'>{"HeaderTitle"}</h1>
        <div className='flex gap-2  '>
          <DeleteIcon className='text-white' />
          <ClearIcon className='text-white' />
        </div>
      </nav>
      <div className='grid  m-[100px] place-items-center'>{children}</div>
    </div>
  );
};

export default AddService;
