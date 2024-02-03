import React from "react";
import AddService from "../general/AddService";
import { Button, TextField } from "@mui/material";

const AddNewWarehouse = () => {
  return (
    <AddService HeaderTitle='Add New Warehouse'>
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label htmlFor=''>Name of the warehouse </label>
            <br />
            <TextField id='filled-basic' label='Enter Name' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>City/Town</label>
            <br />
            <TextField id='filled-basic' label='City/Town' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>State</label>
            <br />
            <TextField id='filled-basic' label='State' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Street Name</label>
            <br />
            <TextField id='filled-basic' label='Street Name' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Select Warehouse Admin</label>
            <br />
            <TextField
              id='filled-basic'
              label='Select Warehouse Admin'
              variant='filled'
            />
          </div>
          <div>
            <label htmlFor=''>Mobile Number</label>
            <br />
            <TextField
              id='filled-basic'
              label='Mobile Number'
              variant='filled'
            />
          </div>
        </div>
        <div className='mt-4 '>
          <Button variant='outlined' className='mr-3'>
            Save
          </Button>
          <Button variant='outlined' color='error'>
            Cancel
          </Button>
        </div>
      </form>
    </AddService>
  );
};

export default AddNewWarehouse;
