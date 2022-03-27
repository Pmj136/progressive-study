import { useEffect, useState } from "react"
export default function UseEffectPage() {
    const [count, setCount] = useState(0)
    console.log('render');
    useEffect(() => {
        //执行时机
        //浏览器完成布局和绘制之后
        console.log('useEffect called');
        return () => {
            console.log("clear effect");
        }
    }, [])

    return (
        <div>
            <h2>UseEffect</h2>
            <div>
                <span>{count}</span>
            </div>
            <button className="btn btn-primary" onClick={() => {
                setCount(p => p + 1)
            }}>变化</button>
        </div>
    )
}
