import { FunctionComponent, lazy, LazyExoticComponent } from "react";
import Setup from "./pages/Setup";

export interface IRoute {
    path: string;
    title: string;
    element: LazyExoticComponent<any> | FunctionComponent<any>;
    props?: Record<string, any>,
    children?: IRoute[]
}

const routes: IRoute[] = [
    {
        path: "/",
        title: "起步",
        element: lazy(() => import('./pages/Setup')),
        props: {
            title: '嘿嘿嘿'
        }
    },
    {
        path: "/a",
        title: "起步a",
        element: Setup,
        props: {
            title: '哈哈哈'
        },
        children: [
            {
                path: '/aa',
                title: "jkla",
                element: Setup,
                props: {
                    title: "嘻嘻嘻"
                }
            }
        ]
    },
]
export default routes
