import { useCallback, useState } from "react"

function AddButton(props: { fn: () => void }) {
  return <button className="primary" onClick={props.fn}>加1</button>
}

function LessButton(props: { fn: () => void }) {
  return <button className="primary" onClick={props.fn}>减1</button>
}
export default function UseCallBackPage() {
  const [count, setCount] = useState(0)
  const addFn = useCallback(() => {
    setCount(c => c + 1)
  }, [])
  return (
    <div>
      <h2>应用场景：传给子组件的一个函数，为了不让re-render的时候，重新执行</h2>
      <div>count：{count}</div>
      <LessButton fn={useCallback(() => setCount(v => v - 1), [])} />
      <AddButton fn={addFn} />
    </div>
  )
}
