import React from 'react'
import AppAside from "./AppAside";
import RouterView from "./RouterView";

function Layout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <AppAside />
            <div className="flex-1 bg-gray-50">
                <RouterView />
            </div>
        </div>
    )
}

export default Layout
