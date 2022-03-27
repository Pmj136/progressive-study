import { createContext, ReactNode, useContext, useState } from 'react'

interface ThemeProps {
    color?: string;
    fontSize?: string;
}
interface IThemeCtx {
    theme: ThemeProps,
    toggleTheme: (prop: string, val: string) => void
}

const ThemeContext = createContext<IThemeCtx>({
    theme: {
        color: 'red'
    },
    toggleTheme(prop, val) {
        console.log(prop, val);
    }
})

/**
 * Provider
 * @param props 
 * @returns 
 */
function ThemeContextProvider(props: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeProps>({ color: 'red' })
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme(prop, val) {
                setTheme(Object.assign({}, theme, { [prop]: val }))
            }
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}


/**
 * Parent
 * @returns 
 */
function Parent() {
    return <Child />
}

/**
 * Child
 * @returns 
 */
function Child() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log('render===child');
    return (
        <>
            <div style={theme}>child</div>
            <button className="btn btn-primary" onClick={() => {
                toggleTheme('color', 'blue')
            }}>切换为蓝色
            </button>
        </>
    )
}

function ContextPage() {
    const [count, setCount] = useState(0)
    return (
        <>
            <ThemeContextProvider>
                <Parent />
            </ThemeContextProvider>
            <button className="btn btn-warn" onClick={() => { setCount((pre) => pre + 1) }}>{count}</button>
        </>
    )
}

export default ContextPage
