import { useEffect, useState } from "react"
export default function UseEffectPage() {
    const [count, setCount] = useState(0)
    const [str, setStr] = useState("")
    console.log('render');
    useEffect(() => {
        //执行时机
        //浏览器完成布局和绘制之后
        setStr("useEffect called")
        return () => {
            console.log("clear effect");
        }
    }, [])

    return (
        <div>
            <div>
                <h2>{str}</h2>
                <span>count：{count}</span>
            </div>
            <button className="primary" onClick={() => {
                setCount(p => p + 1)
            }}>变化</button>
        </div>
    )
}
