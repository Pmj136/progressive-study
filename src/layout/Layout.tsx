import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from '../components/icons/Loading';
import AppAside from "./AppAside";
import BreadCrumb from "./BreadCrumb";

function Layout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <AppAside />
            <div className="flex flex-col flex-1 bg-gray-200">
                <BreadCrumb />
                <div className="flex-1 m-4 p-2 bg-white drop-shadow-sm transition-all overflow-y-scroll">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Layout
