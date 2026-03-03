import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLogin from "../pages/admin/Login";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import Lobcategories from "../pages/admin/Lobcategories";
import LobcategoriesAdd from "../pages/admin/LobcategoriesAdd";
import Categories from "../pages/admin/Categories";

const Approutes=()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={<AdminLogin />} />
                    <Route path='/admin/login' element={<AdminLogin />} />

                    <Route path="/admin/dashboard" element={<AdminDashboard />} />

                    <Route path="/admin/lobcategories" element={<Lobcategories />} />
                    <Route path="/admin/lobcategories/add" element={<LobcategoriesAdd />} />

                    <Route path="/admin/categories" element={<Categories />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Approutes;