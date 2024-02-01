import React from "react";
import StaffsUnpaidSalary from "../components/dashboard/StaffsUnpaidSalary";
import TopProductsSales from "../components/dashboard/TopProductsSales";
import UserData from "../components/dashboard/UserData";

const Dashboard = () => {
  return (
    < >
    <div className='
                relative   
                top-20
                md:left-56
                md:w-[1300px]
                w-full
                z-5
                p-3
          
    '>

      <StaffsUnpaidSalary />
      <TopProductsSales />
      <UserData />

    </div>
      
    </>
  );
};

export default Dashboard;
