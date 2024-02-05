import React, { useState } from "react";
{/*import { Link } from 'react-router-dom';*/}
import ProfileLayout from "../components/general/ProfileLayout";
import Products from "../components/inventory/Products";
import Suppliers from "../components/inventory/Suppliers";
import Brands from "../components/inventory/Brands";
import Category from "../components/inventory/Category";
import Overview from "../components/inventory/Overview";

const Inventory = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");
  

  const page = ["Overview", "Products", "Category", "Suppliers", "Brands"];

  const renderComponent = () => {
    switch (activeComponent) {
      case "Products":
        return <Products />;
      case "Category":
        return <Category />;
      case "Suppliers":
        return <Suppliers />;
      case "Brands":
        return <Brands />;
      default:
        return <Overview />;
    }
  };

  return (
    <ProfileLayout>
      <div className="flex items-center bg-neutral-200 text-sm overflow-x-auto">
        {page.map(
          (component) => (
            <div
              key={component}
              className={`p-3 hover:bg-neutral-300 transition cursor-pointer ${
                activeComponent === component && "bg-neutral-300"
              }`}
              onClick={() => setActiveComponent(component)}
            >
              {/*<Link to={`/${component}`}>*/}{component}{/*</Link>*/}
            </div>
          )
        )}
      </div>

      {renderComponent()}
    </ProfileLayout>
  );
};

export default Inventory;