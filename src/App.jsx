import React, { useState } from "react";
import("tailwindcss").Config;
import { Route, Router, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Approvals from "./pages/approvais";

import Sidebar from "./components/general/Sidebar";
import Header from "./components/general/Header";
import { MenuContext } from "./components/general/openMenu";
import { HeaderTitle } from "./components/general/headerTitle";
import Input from "./components/general/Input";

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
            <Route path='/' element={<Sidebar />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/approvals' element={<Approvals />} />
            <Route path='/warehouses' element={<h1>warehouse</h1>} />
            <Route path='/groups' element={<h1>/groups</h1>} />
            <Route path='/sites' element={<h1>/sites</h1>} />
            <Route path='/inventory' element={<h1>/inventory</h1>} />
            <Route path='/machinery' element={<h1>/machinery</h1>} />
            <Route path='/receipts' element={<h1>/receipts</h1>} />
            <Route path='/sales' element={<h1>/sales</h1>} />
            <Route path='/staffs' element={<h1>/staffs</h1>} />
          </Routes>
        </HeaderTitle.Provider>
      </MenuContext.Provider>
    </>
  );
};

export default App;

// aaaaa
