import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const SmothScroll = ({ children, className }) => {
  const scrollContainerRef = useRef()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      lerp: 0.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div ref={scrollContainerRef} className={className}>
      {children}
    </div>
  )
}

export default SmothScroll