import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Approvals from "./pages/approvais";

import Sidebar from "./components/general/Sidebar";
import Header from "./components/general/Header";
import { MenuContext } from "./components/general/openMenu";
import { HeaderTitle } from "./components/general/headerTitle";
import Warehouses from "./pages/warehouse";
import Groups from "./pages/groups";
import Sites from "./pages/sites";
import Inventory from "./pages/inventory";
import Machinery from "./pages/machinery";
import Receipts from "./pages/receipts";
import Sales from "./pages/sales";
import Staffs from "./pages/staffs";
import Modal from "./components/general/Modal";
const App = () => {
  const [headerTitle, setHeaderTitle] = useState("ala");
  const [openMenu, setOpenMenu] = useState(false);

  const menuValue = { openMenu, setOpenMenu };
  const titleHead = { headerTitle, setHeaderTitle };

  return (
    <>
      <MenuContext.Provider value={menuValue}>
        <HeaderTitle.Provider value={titleHead}>
          <Sidebar />
          <Header title={headerTitle} />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/approvals' element={<Approvals />} />
            <Route path='/warehouses' element={<Warehouses />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/sites' element={<Sites />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/machinery' element={<Machinery />} />
            <Route path='/receipts' element={<Receipts />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/staffs' element={<Staffs />} />
          </Routes>
        </HeaderTitle.Provider>
      </MenuContext.Provider>
    </>
  );
};

export default App;
