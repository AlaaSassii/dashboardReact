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

export default UserData;
