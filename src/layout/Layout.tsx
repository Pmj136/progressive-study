import React from 'react'
import AppAside from "./AppAside";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <AppAside />
            <div className="flex flex-col flex-1 bg-gray-200">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
