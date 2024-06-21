import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../SideNav/SideNav'

export default function Layout() {

    return (
        <div>
            <SideNav/>
           
            <Outlet />
        </div>
    )
}
