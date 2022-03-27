import { ReactElement } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import routes, { IRoute } from "./routes";

function renderIndexRoute(items?: IRoute[]): ReactElement | null {
    if (items && items.length) {
        const { element = Outlet, props } = items[0]
        if (element === Outlet)
            return renderIndexRoute(items[0].children)
        const Comp = element
        return <Route index element={<Comp {...props} />} />
    }
    return null
}

function renderRoutes(items?: IRoute[]): ReactElement[] | null {
    if (!items) return null
    return items.map((value) => {
        const { path, element = Outlet, props, children } = value
        const Comp = element
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
