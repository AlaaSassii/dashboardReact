import React from "react";
import AddService from "../general/AddService";
import { Button, TextField } from "@mui/material";

const AddNewReceipts = () => {
  return (
    <AddService HeaderTitle='Add New Receipt'>
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label htmlFor=''>Enter Starting Date</label>
            <br />
            <TextField
              id='filled-basic'
              label='mm/dd/yyyy'
              variant='filled'
              type='date'
            />
          </div>
          <div>
            <label htmlFor=''>Name</label>
            <br />
            <TextField id='filled-basic' label='Name' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Select Supplier</label>
            <br />
            <TextField id='filled-basic' label='Supplier' variant='filled' />
          </div>
          <div>
            <label htmlFor=''>Add An Image Of The Site</label>
            <br />
            <TextField
              id='filled-basic'
              label='choose file'
              variant='filled'
              type='image'
            />
          </div>
          <div>
            <label htmlFor=''>Total Amount</label>
            <br />
            <TextField
              id='filled-basic'
              label='Total Amount'
              variant='filled'
            />
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

export default AddNewReceipts;
