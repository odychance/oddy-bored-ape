import s from './styles.module.scss'
import ParallaxImage from '../ParallaxImage/ParallaxImage'
import nfts from '/src/data/nfts.json'
import Carousel from '../Carousel/Carousel'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
  const containerTextRef = useRef(null)
  const carouselRef = useRef(null)

  const { Monkey } = nfts
  const newMonkeyArr = Monkey.slice(1, 8)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerTextRef.current,
        start: "top 50%",
        end: "top 50%",
        toggleActions: "play none reverse none",
      }
    })

    tl.set([textRef1.current, textRef2.current, textRef3.current], {
      opacity: 0,
      x: 100
    })
    tl.set(carouselRef.current, { opacity: 0, y: 100})
    tl.to(textRef1.current, {
      opacity: 1,
      x: 0
    })
    tl.to(textRef2.current, {
      opacity: 1,
      x: 0
    }, "-=.2")
    tl.to(textRef3.current, {
      opacity: 1,
      x: 0
    }, "-=.2")
    tl.to(carouselRef.current, {
      opacity: 1,
      y: 0,
    })
  }, [])

  return (
    <div className={s["containerAbout"]}>
      <div className={s["containerText"]} ref={containerTextRef}>
        <p className={s["title"]} ref={textRef1}>Some of ours</p>
        <p className={s["title"]} ref={textRef2}>Bored</p>
        <p className={s["title"]} ref={textRef3}>Ape&apos;s</p>
      </div>
      <div className={s["containerParallax"]}>
        <ParallaxImage src="/Media/Images/sunsetBg.jpg" alt="sunset background" className={s["parallaxImage"]} />
      </div>
      <Carousel newMonkeyArr={newMonkeyArr} carouselRef={carouselRef}/>
    </div>
  )
}

export default About