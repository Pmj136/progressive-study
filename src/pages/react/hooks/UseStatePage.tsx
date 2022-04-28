import { useState } from 'react'
import { flushSync } from 'react-dom'

export default function UseStatePage() {
    console.log('render')
    const [count, setCount] = useState(0)
    const onBtnClick = (tag = 1) => {
        setCount(v => v + tag)
        Promise.resolve().then(() => {
            //退出批处理
            flushSync(() => {
                setCount(v => v + tag)
                setCount(v => v + 1)
            })
        })
    }
    return (
        <div>
            <span>{count}</span>
            <div>
                <button className="warn" onClick={() => onBtnClick(-1)}>减一</button>
                <button className="primary aaa" onClick={() => onBtnClick(1)}>加一</button>
            </div>
        </div>
    )
}
