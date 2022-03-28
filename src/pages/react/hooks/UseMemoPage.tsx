import { useMemo, useState } from "react"

export default function UseMemoPage() {
  const [count, setCount] = useState(0)
  const result = useMemo(() => count * 2, [count])
  return (
    <>
      <div>
        count：{count}
      </div>
      <div>
        result【useMemo】：{result}
      </div>
      <button onClick={() => {
        setCount(p => p + 1)
      }}>change</button>
    </>
  )
}
