import React from "react";
import AddService from "../general/AddService";
import { Button, TextField } from "@mui/material";

const AddNewSite = () => {
  return (
    <AddService HeaderTitle='Add New Group'>
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <label htmlFor=''>Name of the Site</label>
            <br />
            <TextField
              id='filled-basic'
              label='Name of the Site'
              variant='filled'
            />
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
            <label htmlFor=''>Enter Allocated Budget [Optional]</label>
            <br />
            <TextField
              id='filled-basic'
              label='Allocated Budget'
              variant='filled'
              type='number'
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

export default AddNewSite;
