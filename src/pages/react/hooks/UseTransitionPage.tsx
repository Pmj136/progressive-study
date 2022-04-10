import React, { useState, useTransition } from 'react'

interface IProps {

}

function UseTransitionPage(props: IProps) {
    const [isPending, startTransition] = useTransition();
    const [keyword, setKeyword] = useState(0);
    const [count, setCount] = useState(0)

    function handleChange(e: any) {
        setKeyword(e.target.value)
        startTransition(() => {
            setCount(v => v + 1)
        })
    }

    return (
        <div>
            <input type="text" value={keyword} onChange={handleChange} />
            {isPending ? <div>loading</div> : <div>{count}</div>}
        </div>
    );
}

export default UseTransitionPage
