import React from "react";

const StaffsUnpaidSalary = ({ staffsUnpaidSalary }) => {
  return (
    <div>
      <h5>Staffs Unpaid Salary</h5>
      {staffsUnpaidSalary?.map((staff, key) => (
        <div key={key}>
          <h4>{staff.user}</h4>
          <p>
            <b>Salary Date</b> {staff.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StaffsUnpaidSalary;
