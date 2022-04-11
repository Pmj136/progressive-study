import { Fragment, lazy, ReactElement } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes, { IRoute } from "./routes";

function renderIndexRoute(item: IRoute): ReactElement | null {
    const { element = Outlet, props } = item
    if (element === Outlet && item.children?.length)
        return renderIndexRoute(item.children[0])
    const Comp = element
    return <Route index element={<Comp {...props} />} />
}

function renderRoutes(items?: IRoute[]): ReactElement[] | null {
    if (items?.length) {
        return items.map((value, index) => {
            const { path, element = Outlet, props, children } = value
            const Comp = element
            return (
                <Fragment key={path}>
                    {
                        index === 0 && renderIndexRoute(value)
                    }
                    <Route path={path} element={<Comp {...props} />}>
                        {renderRoutes(children)}
                    </Route>
                </Fragment>
            )
        })
    }
    return null
}

const Page404 = lazy(() => import('./pages/Page404'))

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {renderRoutes(routes)}
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
