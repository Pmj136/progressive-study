import React from 'react'
import { Route, Routes } from "react-router-dom";
import routes, { IRoute } from "./routes";

function renderIndexRoute(items?: IRoute[]) {
    if (items && items.length) {
        const { element: Comp, props } = items[0]
        return <Route index element={<Comp {...props} />} />
    }
    return null
}

function renderRoutes(items?: IRoute[]) {
    if (!items) return null
    return items.map((value) => {
        const { path, element: Comp, props, children } = value
        return (
            <Route path={path} element={<Comp {...props} />} key={path}>
                <>
                    {renderIndexRoute(children)}
                    {renderRoutes(children)}
                </>
            </Route>
        )
    })
}

function App() {
    return (
        <Routes>
            {renderRoutes(routes)}
        </Routes>
    )
}

export default App
