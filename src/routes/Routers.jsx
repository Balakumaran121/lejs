import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from '../layout/CommonLayout'
import Login from '../pages/Login'
import Order from '../pages/Order'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CommonLayout />}>
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers
