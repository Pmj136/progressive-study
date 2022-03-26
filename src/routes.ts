import { FunctionComponent, lazy, LazyExoticComponent } from "react";
import IndexPage from "./pages/IndexPage";
import Layout from "./layout/Layout";

export interface IRoute {
    path: string;
    menuTitle?: string;
    element: LazyExoticComponent<any> | FunctionComponent<any>;
    props?: Record<string, any>;
    children?: IRoute[];
}

const routes: IRoute[] = [
    {
        path: "/",
        element: Layout,
        children: [
            {
                path: "react",
                menuTitle: "React",
                element: IndexPage,
                props: {
                    title: "React"
                },
                children: [
                    {
                        path: "context",
                        menuTitle: "Context",
                        element: lazy(() => import('./pages/react/ContextPage')),
                    },
                    {
                        path: "error-boundaries",
                        menuTitle: "错误边界",
                        element: lazy(() => import('./pages/react/ErrorBoundariesPage')),
                    },
                    {
                        path: "forwarding-refs",
                        menuTitle: "Refs转发",
                        element: lazy(() => import('./pages/react/ForwardingRefsPage')),
                    },
                ]
            },
            {
                path: "react-router-dom",
                menuTitle: "ReactRouterDom",
                element: IndexPage,
                props: {
                    title: "ReactRouterDom"
                },
            },
            {
                path: "tailwindcss",
                menuTitle: "tailwindcss",
                element: IndexPage,
                props: {
                    title: "tailwindcss"
                },
            },
        ]
    }
]
export default routes
