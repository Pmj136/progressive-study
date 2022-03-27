import { lazy, ReactElement } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
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
const Page404 = lazy(() => import('./pages/Page404'))
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {renderRoutes(routes)}
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}

export default App
