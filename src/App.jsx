import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>/</h1>} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/approvals' element={<h1>/approvals</h1>} />
      <Route path='/warehouses' element={<h1>/warehouses</h1>} />
      <Route path='/groups' element={<h1>/groups</h1>} />
      <Route path='/sites' element={<h1>/sites</h1>} />
      <Route path='/inventory' element={<h1>/inventory</h1>} />
      <Route path='/machinery' element={<h1>/machinery</h1>} />
      <Route path='/receipts' element={<h1>/receipts</h1>} />
      <Route path='/sales' element={<h1>/sales</h1>} />
      <Route path='/staffs' element={<h1>/staffs</h1>} />
    </Routes>
  );
};

export default App;
