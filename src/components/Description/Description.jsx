import React, { useEffect, useRef } from 'react'
import s from './styles.module.scss'
import ButtonLink from '../ButtonLink/ButtonLink'
import clsx from 'clsx'
import circleBlur from '/public/Media/Images/circle-blur.png'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { animationButton, animationText } from '../Animation/animations'

gsap.registerPlugin(ScrollTrigger)

const Description = ({ variant, className, text, textBtn }) => {
  const infoRef = useRef(null)
  const buttonRef = useRef(null)
  const words = text.split(" ")
  
  useEffect(() => {
    animationText(infoRef.current.children, infoRef.current)
    animationButton(buttonRef.current, infoRef.current)
  }, [])

  return (
    <div className={clsx(s["containerDescription"], className, {[s["ctaVariant"]] : variant})}>
      <p className={clsx(s["text"], {[s["textVariant"]] : variant})} ref={infoRef}>
        {words.map((word, idx) => (
          <span key={idx} className={s["hiddenWord"]} style={{ display: "inline-block", marginRight: "1.5vw" }} dangerouslySetInnerHTML={{ __html: word }} />
        ))}
      </p>
      { textBtn && <ButtonLink text={textBtn} className={s["button"]} ref={buttonRef}/> }
      <Image src={circleBlur} alt="" className={clsx(s["bgCircle"], {[s["variantBg"]] : variant} )} />
    </div>
  )
}

export default Description