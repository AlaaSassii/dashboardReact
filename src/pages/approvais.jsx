import React, { useContext } from "react";
import HeaderTitle from "../components/general/headerTitle";
import ProfileLayout from "../components/general/ProfileLayout";
import { TextField,Button } from "@mui/material";


const Approvals = () => {
  const { setHeaderTitle } = useContext(HeaderTitle);
  setHeaderTitle("Approvais");

  return (
    <ProfileLayout>
     <div className='w-[100%] flex justify-between items-center mb-5 mt-5 '>
        
        <TextField id='outlined-basic ' label='Outlined' variant='outlined'  />
        <Button variant='contained' className="bg-black">Searsh</Button>
      </div>
    </ProfileLayout>
  );
};

export default Approvals;
