import { forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react'

const Cat = forwardRef((props: {}, ref: Ref<any>) => {
    const [str, setStr] = useState("")
    useImperativeHandle(ref, () => (
        {
            run() {
                setStr("run")
            }
        }
    ))
    return (
        <>
            <h2>Cat组件</h2>
            <div>{str}</div>
        </>
    )
})


export default function UseImperativeHandlePage() {
    const ref = useRef<any>(null)
    return (
        <>
            <Cat ref={ref} />
            <button onClick={() => {
                ref.current?.run()
            }}>car-run
            </button>
        </>
    )
}
