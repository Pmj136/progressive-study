import React, { useDeferredValue, useState } from 'react'

export default function UseDeferredValuePage() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  return (
    <>
      <input placeholder='placeholder' value={query} onChange={(e) => {
        setQuery(e.target.value)
      }} />
      <div>
        {deferredQuery}
      </div>
    </>
  )
}
