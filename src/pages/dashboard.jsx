import React, { useContext } from "react";
import StaffsUnpaidSalary from "../components/dashboard/StaffsUnpaidSalary";
import TopProductsSales from "../components/dashboard/TopProductsSales";
import UserData from "../components/dashboard/UserData";
import HeaderTitle from "../components/general/headerTitle";

const Dashboard = () => {
  
  const {setHeaderTitle} = useContext(HeaderTitle);
  setHeaderTitle("Dashboard");
  
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
      <div className="font-bold text-lg">
        Welcome User!
      </div>
      <StaffsUnpaidSalary />
      <TopProductsSales />
      <UserData />

    </div>
      
    </>
  );
};

export default Dashboard;
