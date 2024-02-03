import React from "react";

const TopProductsSales = ({ Warehouse,Remaining,Reorder,RetailPricePerrod }) => {
  return (
    <div className="flex flex-col p-4 mb-2 w-full  bg-red-50 shadow-md rounded ">
      <div className="font-bold font-lg mb-2 ">Pod</div>
      <div className="flex "><div className="font-bold text-sm">Warehouse : </div><p>{Warehouse}</p></div>
      <div className="flex"><div className="font-bold text-sm">Remaining Stock : </div>{Remaining}</div>
      <div className="flex"><div className="font-bold text-sm">Reorder Point : </div>{Reorder}</div>
      <div className="flex"><div className="font-bold text-sm">Retail Price Per rod : </div>{RetailPricePerrod}</div>
      
    </div>
  );
};

export default TopProductsSales;


/*
import React from "react";

const TopProductsSales = ({ productSales }) => {
  return (
    <div>
      <h1>Top Products Sales</h1>
      {productSales?.map((product, key) => {
        <div className='bg-red-100' key={key}>
          <h6>Cement</h6>
          <p>
            <b>Total Stock Sold:</b>
            {product.totalStockSoldNumber}Cement
          </p>
          <p>
            <b>Total Amount Sold:</b>
            RS. {product.totalAmountSoldNumber}
          </p>
        </div>;
      })}
    </div>
  );
};

export default TopProductsSales;
*/
