import React, { useContext, useEffect } from "react";
import StaffsUnpaidSalary from "../components/dashboard/StaffsUnpaidSalary";
import TopProductsSales from "../components/dashboard/TopProductsSales";
import HeaderTitle from "../components/general/headerTitle";
import ProfileLayout from "../components/general/ProfileLayout";

const Dashboard = () => {
  const { setHeaderTitle } = useContext(HeaderTitle);

  useEffect(() => {
    setHeaderTitle("Dashboard");
  }, []);

  return (
    <ProfileLayout>
      <div className='flex flex-col '>
        <div className='font-bold text-lg ml-5 mt-5'>Welcome User!</div>

        <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] p-4'>
          <StaffsUnpaidSalary number={5} title={"Approvals Awaiting"} />
          <StaffsUnpaidSalary number={10} title={"Total Warehouse"} />
          <StaffsUnpaidSalary number={66} title={"Total Staffs"} />
        </div>

        <div className='font-bold text-lg ml-5 mt-20 '>Low On Inventory</div>

        <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] p-4'>
          <TopProductsSales
            Warehouse={"Warehouse One"}
            Remaining={"0000 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
          <TopProductsSales
            Warehouse={"Warehouse One"}
            Remaining={"0 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
          <TopProductsSales
            Warehouse={"Warehouse One"}
            Remaining={"0 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
          <TopProductsSales
            Warehouse={"Warehouse One"}
            Remaining={"0 rod"}
            Reorder={"1 rod"}
            RetailPricePerrod={"Rs. 100000"}
          />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Dashboard;
