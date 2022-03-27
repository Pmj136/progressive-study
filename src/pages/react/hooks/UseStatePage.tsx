import React, { useState } from 'react'

export default function UseStatePage() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <span>{count}</span>
            <div>
                <button className="btn btn-warn" onClick={() => setCount(p => p - 1)}>减一</button>
                <button className="btn btn-primary" onClick={() => setCount(p => p + 1)}>加一</button>
            </div>
        </div>
    )
}
