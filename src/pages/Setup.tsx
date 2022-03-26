import React from 'react'
import { Outlet } from "react-router-dom";

interface IProps {
    title?: string
}

function Setup(props: IProps) {
    return (
        <div>
            {props.title}
            <Outlet />
        </div>
    )
}

export default Setup
