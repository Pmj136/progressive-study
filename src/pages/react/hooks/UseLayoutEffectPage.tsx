import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function Test() {
  const [state, setState] = useState("hello world")

  // useEffect(() => {
  //   let i = 0;
  //   while (i <= 100000000) {
  //     i++;
  //   };
  //   setState("updated");
  // }, []);

  useLayoutEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    };
    setState("updated");
  }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}

export default function UseLayoutEffectPage() {
  return <>
    <Test />
  </>
}
