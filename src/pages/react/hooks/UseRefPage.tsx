import { useCallback, useEffect, useRef, useState } from 'react'

function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputWidth, setInputWidth] = useState(0)
  const inputRefCallback = useCallback((node: HTMLInputElement) => {
    if (node != null) {
      setInputWidth(node.offsetWidth)
    }
  }, [])
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <div>
      <h2>
        返回一个可变的ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内持续存在。
      </h2>
      <input type="text" ref={inputRef} placeholder="普通ref" />
      <input
        type="text"
        ref={inputRefCallback}
        placeholder={'inputWidth：' + inputWidth + 'px'}
        onTransitionEnd={node => {
          setInputWidth((node.target as HTMLInputElement).offsetWidth)
        }} />
    </div>
  )
}

export default UseRefPage