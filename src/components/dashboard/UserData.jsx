import React from "react";

const UserData = ({ title,TotalStockSold,TotalAmountSold }) => {
  return (
    <div className="flex flex-col p-4 mb-2 w-full  bg-red-50 shadow-md rounded ">
      <div className="font-bold font-lg mb-2 ">{title}</div>
      <div className="flex "><div className="font-bold text-sm">Warehouse : </div><p>{TotalStockSold}</p></div>
      <div className="flex"><div className="font-bold text-sm">Remaining Stock : </div>{TotalAmountSold}</div>
      
      
    </div>
  );
};

export default UserData;



/*
import React from "react";

const UserData = ({ data }) => {
  return (
    <div>
      <div>
        {data?.map((userInfo, key) => {
          <div className='bg-red-100' key={key}>
            <img src={userInfo.icon} alt='' />
            <h5>{userInfo.number}</h5>
            <p>{userInfo.text}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default UserData; */
