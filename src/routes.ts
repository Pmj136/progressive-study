import { FunctionComponent, lazy, LazyExoticComponent } from "react";

export interface IRoute {
    path: string;
    menuTitle?: string;
    element?: LazyExoticComponent<any> | FunctionComponent<any>;
    props?: Record<string, any>;
    children?: IRoute[];
}

const routes: IRoute[] = [
    {
        path: "intro",
        menuTitle: "简介",
        element: lazy(() => import('./pages/Intro'))
    },
    {
        path: "exampels",
        menuTitle: "示例",
        element: lazy(() => import('./pages/Examples'))
    },
    {
        path: "typescript",
        menuTitle: "TypeScript",
        element: lazy(() => import('./pages/typescript/TypeScriptPage'))
    },
    {
        path: "react",
        menuTitle: "React",
        children: [
            {
                path: "classComponent",
                menuTitle: "类组件",
                children: [
                    {
                        path: 'lifeCycle',
                        menuTitle: '生命周期',
                        element: lazy(() => import('./pages/react/class-component/LifeCycle'))
                    },
                    {
                        path: 'defaultProps',
                        menuTitle: 'props默认值',
                        element: lazy(() => import('./pages/react/class-component/DefaultProps'))
                    }
                ]
            },
            {
                path: "functionalComponent",
                menuTitle: "函数式组件",
                element: lazy(() => import('./pages/react/FunctionalComponent'))
            },
            {
                path: "hooks",
                menuTitle: "hooks",
                children: [
                    {
                        path: "useState",
                        menuTitle: "useState",
                        element: lazy(() => import('./pages/react/hooks/UseStatePage')),
                    },
                    {
                        path: "useEffect",
                        menuTitle: "useEffect",
                        element: lazy(() => import('./pages/react/hooks/UseEffectPage')),
                    },
                    {
                        path: "useContext",
                        menuTitle: "useContext",
                        element: lazy(() => import('./pages/react/hooks/UseContextPage')),
                    },
                    {
                        path: "useReducer",
                        menuTitle: "useReducer",
                        element: lazy(() => import('./pages/react/hooks/UseReducerPage')),
                    },
                    {
                        path: "useCallback",
                        menuTitle: "useCallback",
                        element: lazy(() => import('./pages/react/hooks/UseCallbackPage')),
                    },
                    {
                        path: "useMemo",
                        menuTitle: "useMemo",
                        element: lazy(() => import('./pages/react/hooks/UseMemoPage')),
                    },
                    {
                        path: "useRef",
                        menuTitle: "useRef",
                        element: lazy(() => import('./pages/react/hooks/UseRefPage')),
                    },
                    {
                        path: "useImperativeHandle",
                        menuTitle: "useImperativeHandle",
                        element: lazy(() => import('./pages/react/hooks/UseImperativeHandlePage')),
                    },
                    {
                        path: "useLayouEffect",
                        menuTitle: "useLayouEffect",
                        element: lazy(() => import('./pages/react/hooks/UseLayoutEffectPage')),
                    },
                    {
                        path: "useTransition",
                        menuTitle: "useTransition",
                        element: lazy(() => import('./pages/react/hooks/UseTransitionPage')),
                    },
                    {
                        path: "useId",
                        menuTitle: "useId",
                        element: lazy(() => import('./pages/react/hooks/UseIdPage')),
                    },
                    {
                        path: "useDeferredValue",
                        menuTitle: "useDeferredValue",
                        element: lazy(() => import('./pages/react/hooks/UseDeferredValuePage')),
                    },
                ]
            },
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
    },
    {
        path: "tailwindcss",
        menuTitle: "tailwindcss",
    },
]
export default routes
