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
