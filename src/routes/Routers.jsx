import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from '../layout/CommonLayout'
import Login from '../pages/Login'
import Home from '../pages/Home'

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<CommonLayout/>}>
            <Route path='/' element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default Routers
