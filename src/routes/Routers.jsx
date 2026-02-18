import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from '../layout/CommonLayout'
import Login from '../pages/auth/Login'
import Order from '../pages/Order'
import Register from '../pages/auth/Register'
import PrivateRoute from './PrivateRoute'
import Favor from '../pages/Favor'
import Settings from '../pages/Settings'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>

          <Route path="/" element={<CommonLayout />}>
            <Route path="/order" element={<Order />} />
            <Route path="/favorites" element={<Favor />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers
