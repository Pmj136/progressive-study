import React from 'react'
import { NavLink } from "react-router-dom";
import routes, { IRoute } from "../routes";
import { pathResolve } from "./util";

function renderLink(items?: IRoute[], basePath = "/", level = 0) {
    if (!items) return null
    let padLeft = level * 15
    return (
        <ul className="flex flex-col">
            {
                items.map(value => {
                    const { path, title, children } = value
                    const actPath = pathResolve(basePath, path)
                    return (
                        <li key={actPath} className="my-2" style={{ paddingLeft: padLeft }}>
                            <NavLink
                                to={actPath}
                                className={({ isActive }) => isActive ? 'text-orange-700 underline' : ''}>
                                <span>{title}</span>
                            </NavLink>
                            {
                                renderLink(children, actPath, level + 1)
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

function AppAside() {
    return (
        <div className="w-64 bg-white drop-shadow overflow-hidden flex flex-col h-full">
            <div className="bg-blue-500 px-2 py-4 text-center font-bold text-white drop-shadow-lg">React</div>
            <div className="flex-1 overflow-y-auto p-2"> {renderLink(routes)}</div>
        </div>
    )
}

export default AppAside
