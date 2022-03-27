import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

function getUrls(pathname: string) {
  if (pathname === '/') return ['/intro']
  const matchAll = pathname.match(/\/\w+(?=\/?)/g)
  if (matchAll == null) return []
  const result: string[] = []
  let str = matchAll[0]
  result.push(str)
  for (let i = 1; i < matchAll.length; i++) {
    str += matchAll[i]
    result.push(str)
  }
  return result
}
function getItems(pathname: string) {
  if (pathname === '/') return ['intro']
  const items = pathname.split('/')
  items.shift()
  return items
}
export default function BreadCrumb() {
  const { pathname } = useLocation()
  const items = useMemo(() => getItems(pathname), [pathname])
  const urls = useMemo(() => getUrls(pathname), [pathname])
  return (
    <ul className="bg-white p-5 drop-shadow-sm flex">
      {
        items.map((v, i) => {
          return (
            <li key={i} className="font-bold after:content-['>'] after:mx-2 after:text-gray-500 last:after:content-['']">
              <NavLink
                replace
                to={urls[i]}
                className={i !== items.length - 1 ? 'text-blue-700' : 'text-gray-600 cursor-not-allowed'}>
                {v}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}
