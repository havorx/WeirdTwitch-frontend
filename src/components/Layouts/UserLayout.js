import React from 'react'
import MainNav from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';
export default function UserLayout() {
    return (
        <div>
            <MainNav />
            <Outlet />
        </div>
    )
}
