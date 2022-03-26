import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";

interface IProps {
    title: string
}

function IndexPage(props: IProps) {
    return (
        <>
            <div className="bg-white p-5 drop-shadow-sm">
                {props.title}
            </div>
            <div className="flex-1 m-4 p-2 bg-white drop-shadow-sm">
                <Suspense fallback={<div>loading</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}

export default IndexPage
