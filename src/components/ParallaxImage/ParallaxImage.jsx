"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import s from './styles.module.scss'
import clsx from "clsx"

const ParallaxImage = ({ src, alt = "", speed = 0.5, className }) => {
  const imageRef = useRef(null)

  useEffect(() => {
    const img = imageRef.current
    const parent = img.parentElement

    const updateParallax = () => {
      const { top, height } = parent.getBoundingClientRect()
      const windowHeight = window.innerHeight
      if(top + height > 0 && top < windowHeight) {
        const progress = (top + height) / (windowHeight + height)
        gsap.to(img, {
          y: progress * height * speed,
          ease: "power2.out",
          duration: 0.3
        })
      }
    }
    window.addEventListener("scroll", updateParallax)
    updateParallax()
    return () => window.removeEventListener("scroll", updateParallax)
  }, [speed])

  return (
    <img 
      ref={imageRef}
      src={src}
      alt={alt}
      className={clsx(s["img"], className)}
    />
  )
}

export default ParallaxImage