import React, { useContext, useEffect } from "react";
import StaffsUnpaidSalary from "../components/dashboard/StaffsUnpaidSalary";
import TopProductsSales from "../components/dashboard/TopProductsSales";
import HeaderTitle from "../components/general/headerTitle";
import ProfileLayout from "../components/general/ProfileLayout";
import UserData from "../components/dashboard/UserData";
import InformationCart from "../components/dashboard/InformationCart";

const Dashboard = () => {
  const { setHeaderTitle } = useContext(HeaderTitle);

  useEffect(() => {
    setHeaderTitle("Dashboard");
  }, []);

  return (
    <ProfileLayout>
      <div className='flex flex-col '>
        <div className='font-semibold text-xl ml-5 mt-5'>Site Information</div>
        <div className='grid  grid-cols-1   xl:grid-cols-2  gap-4 max-h-[50vh] p-4'>
          <InformationCart date='Feb ,5 2024' title='Site 1' numRequest={3} />
          <InformationCart date='Feb ,5 2024' title='Site 1' numRequest={3} />
          <InformationCart date='Feb ,5 2024' title='Site 1' numRequest={3} />
        </div>
      </div>
    </ProfileLayout>
  );
};
export default Dashboard;
{
  /*
        <div className='font-bold text-lg ml-5 mt-5'>Welcome User!</div>

        <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] p-4'>
          <StaffsUnpaidSalary number={5} title={"Approvals Awaiting"} />
          <StaffsUnpaidSalary number={10} title={"Total Warehouse"} />
          <StaffsUnpaidSalary number={66} title={"Total Staffs"} />
        </div>

        <div className='font-bold text-lg ml-5 mt-20 '>Low On Inventory</div>

        <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] p-4'>
          <TopProductsSales
            title={"rod"}
            Warehouse={"Warehouse One"}
            Remaining={"0000 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
          <TopProductsSales
            title={"rod"}
            Warehouse={"Warehouse One"}
            Remaining={"0 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
          <TopProductsSales
            title={"rod"}
            Warehouse={"Warehouse One"}
            Remaining={"0 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
          <TopProductsSales
            title={"rod"}
            Warehouse={"Warehouse One"}
            Remaining={"0 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
        </div>

        <div className='font-bold text-lg ml-5 mt-10 '>Top Products Sales</div>


        <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] p-4'>
          <UserData title={"rod"} TotalAmountSold={"5 rod"} TotalStockSold={"Rs. 500000"}/>
          <UserData title={"Cement"} TotalAmountSold={"5 rod"} TotalStockSold={"Rs. 500000"}/>
          <UserData title={"Cement"} TotalAmountSold={"5 rod"} TotalStockSold={"Rs. 500000"}/>
        </div>

        <div className='font-bold text-lg ml-5 mt-10 '>Staffs Unpaid Salary</div>

        <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] p-4'>
          <StaffsUnpaidSalary title={"Admin User"} date={"2024-01-25"} />
          <StaffsUnpaidSalary title={"Admin User"} date={"2024-01-25"} />
          <StaffsUnpaidSalary title={"Admin User"} date={"2024-01-25"} />
          <StaffsUnpaidSalary title={"Admin User"} date={"2024-01-25"} />

          <StaffsUnpaidSalary title={"Admin User"} date={"2024-01-25"} />
          <StaffsUnpaidSalary title={"Admin User"} date={"2024-01-25"} />
        </div>
        
      */
}
