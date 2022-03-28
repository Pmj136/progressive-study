import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function UseLayoutEffectPage() {
  const [str, setStr] = useState("稍后")
  const divRef = useRef(null)
  useEffect(() => {
    console.log('effect');
  }, [])
  useLayoutEffect(() => {
    console.log('layout effect');
  }, [])
  return (
    <div ref={divRef}>
      {str}
    </div>
  );
}
