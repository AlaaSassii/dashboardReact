import React, { useContext } from "react";
import StaffsUnpaidSalary from "../components/dashboard/StaffsUnpaidSalary";
import TopProductsSales from "../components/dashboard/TopProductsSales";
import UserData from "../components/dashboard/UserData";
import HeaderTitle from "../components/general/headerTitle";
import ProfileLayout from "../components/general/ProfileLayout";

const Dashboard = () => {
  const { setHeaderTitle } = useContext(HeaderTitle);
  setHeaderTitle("Dashboard");

  return (
    <ProfileLayout>
      <div className='font-bold text-lg'>Welcome User!</div>
      <StaffsUnpaidSalary />
      <TopProductsSales />
      <UserData />
    </ProfileLayout>
  );
};

export default Dashboard;
