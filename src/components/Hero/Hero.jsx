"use client"

import { useRef } from 'react'
import s from './styles.module.scss'
import ParallaxImage from '../ParallaxImage/ParallaxImage'
import ButtonLink from '../ButtonLink/ButtonLink'
import gsap from 'gsap'
import { useEffect } from 'react'

const Hero = () => {
  const heroImage = useRef(null)
  const buttonRef = useRef(null)
  const textRef = useRef(null)

  const tl = gsap.timeline()

  useEffect(() => {
    gsap.set(heroImage.current, {
      scale: 3,
    })
    gsap.set([textRef.current, buttonRef.current], {
      y: -50,
      opacity: 0
    })

    tl.to(heroImage.current, {
      scale: 1,
      duration: 4,
      ease: "power2.inOut"
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.Out",
    }, "-=1")
    
    .to(buttonRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.Out",
      y: 0
    })

  }, [])

  return (
    <section className={s["containerHero"]}>
      <div className={s["containerImage"]}>
        <ParallaxImage src="/Media/Images/apeBanner.webp" alt="banner" />
      </div>
      <div className={s["callToAction"]}>
        <img src='/Media/Images/monkey1.jpg' alt="adidas" className={s["hero-image"]} ref={heroImage}/>
        <p className={s["cta-text"]} ref={textRef}>Master the digital future with unique NFT&apos;s</p>
        <ButtonLink text="Learn More." ref={buttonRef} className={s["btnLink"]}/>
      </div>
    </section>
  )
}

export default Hero