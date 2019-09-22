import { useEvent } from 'react-use'
import { useEffect, useState } from 'react'

export default ({ children, minScroll }) => {
  const [scroll, setScroll] = useState(0)

  useEvent('scroll', () => {
    setScroll(window.scrollY)
  })

  useEffect(() => {
    setScroll(window.scrollY)
  }, [])

  if (minScroll !== undefined) {
    return (
      <div
        style={{
          transition: 'opacity 300ms',
          opacity: scroll > minScroll ? 1 : 0,
        }}
      >
        {children}
      </div>
    )
  }

  return children(scroll)
}
