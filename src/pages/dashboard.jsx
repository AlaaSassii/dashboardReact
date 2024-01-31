import React from "react";
import StaffsUnpaidSalary from "../components/dashboard/StaffsUnpaidSalary";
import TopProductsSales from "../components/dashboard/TopProductsSales";
import UserData from "../components/dashboard/UserData";

const Dashboard = () => {
  return (
    <>
      <StaffsUnpaidSalary />
      <TopProductsSales />
      <UserData />
    </>
  );
};

export default Dashboard;
