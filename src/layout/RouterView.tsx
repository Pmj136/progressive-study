import React, { Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import routes, { IRoute } from "../routes";
import { pathResolve } from "./util";

function renderRoutes(items?: IRoute[], basePath = "/") {
    if (!items) return null
    return items.map(value => {
        const { path, element: Comp, props, children } = value
        const actPath = pathResolve(basePath, path)
        return (
            <Route path={actPath} element={<Comp {...props} />} key={actPath}>
                {
                    renderRoutes(children, actPath)
                }
            </Route>
        )
    })
}

//or use useRoutes(config) to generate views
function RouterView() {
    // const els = useRoutes(routes);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    renderRoutes(routes)
                }
            </Routes>
        </Suspense>
    )
}

export default RouterView
