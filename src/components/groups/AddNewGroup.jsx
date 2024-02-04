import React from "react";
import AddService from "../general/AddService";
import { Button, TextField } from "@mui/material";

const AddNewGroup = () => {
  return (
    <AddService HeaderTitle='Add New Group'>
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label htmlFor=''>Name</label>
            <br />
            <TextField id='filled-basic' label='Name' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Location</label>
            <br />
            <TextField id='filled-basic' label='Location' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Select Warehouse</label>
            <br />
            <TextField id='filled-basic' label='Warehouse' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Select Site</label>
            <br />
            <TextField id='filled-basic' label='Select Site' variant='filled' />
          </div>
        </div>
        <div className='mt-4 flex justify-center items-center  '>
          <div className="mr-5">
            <Button variant='outlined'>
              Save
            </Button>
          </div>
          <div className="mr-5">
            <Button variant='outlined' color='error'>
              Cancel
            </Button>
          </div>
          
        </div>
      </form>
    </AddService>
  );
};

export default AddNewGroup;
