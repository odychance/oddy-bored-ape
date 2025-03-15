import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import ParallaxImage from '../ParallaxImage/ParallaxImage'
import apeCoin from '/public/Media/Images/apeCoin.webp'
import circleBlur from '/public/Media/Images/circle-blur.png'
import Image from 'next/image'
import ButtonLink from '../ButtonLink/ButtonLink'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CallToAction = () => {
  const textRef = useRef(null)
  const btnRef = useRef(null)
  const coinRef = useRef(null)
  
  useEffect(() => {
    if(!textRef.current || !btnRef.current) return
    
    const tl = gsap.timeline({
      opacity: 0,
      duration: .5,
      stagger: .5,
      scrub: true,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "top 70%",
        toggleActions: "play none reverse none",
      }    
    })
  
      tl.set(coinRef.current, {
        scale: 2
      })
      tl.set(textRef.current, {
        x: -100
      })
      tl.set(btnRef.current, {
        y: 100
      })
      tl.to(coinRef.current, {
        scale: 1,
        opacity: 1
      })
      tl.to(textRef.current, {
        x: 0,
        opacity: 1,
      })
      tl.to(btnRef.current, {
        y: 0,
        opacity: 1
      })
  }, [])


  return (
    <div className={s["containerCTA"]}>
      <div className={s["cotainerText"]}>
        <Image src={circleBlur} alt="blur" className={s["bgBlur"]}/>
        <p className={s["ctaSketch"]} ref={textRef}>Be part of the next digital generation...<br/>Your active, Your identity, Your power.</p>
        <ButtonLink text="Discover Now" className={s["btn"]} ref={btnRef}/>
      </div>
      <div className={s["mediaContainer"]}>
        <div className={s["parallaxContainer"]}>
          <ParallaxImage src="/Media/Images/apeBackground.webp" alt="bg banner" className={s["parallaxImage"]}/>
        </div>
        <Image src={apeCoin} alt="" className={s["apeCoin"]} ref={coinRef}/>
      </div>
    </div>
  )
}

export default CallToAction