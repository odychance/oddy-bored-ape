import React, { useState, useRef } from 'react'
import s from './styles.module.scss'
import Image from 'next/image'
import leftArrow from '/public/Media/Svg/leftArrow.svg'
import rightArrow from '/public/Media/Svg/rightArrow.svg'

const Carousel = ({newMonkeyArr, carouselRef}) => {
  const viewportNFT = `${newMonkeyArr.length * 100}vw`
  const wrapperRef = useRef(null)
  const [ offset, setOffset ] = useState(0)
  const calc = (el) => el % 1 ? -50 : -100 

  const moveRight = () => {
    if(offset <= -((newMonkeyArr.length / 2 - 1) * 100)) return
    const newOffset = offset - 100
    setOffset(newOffset)
    wrapperRef.current.style.transform = `translateX(${newOffset}vw)`
  }
  
  const moveLeft = () => {
    if(offset >= ((newMonkeyArr.length * .5) * 100) + calc(newMonkeyArr.length)) return
    const newOffset = offset + 100
    setOffset(newOffset)
    wrapperRef.current.style.transform = `translateX(${newOffset}vw)`
  }
  
  return (
    <div className={s["containerItems"]} ref={carouselRef}>
      <div className={s["containerButtons"]}>
        <div className={s["leftArrow"]} onClick={moveLeft}>
          <Image src={leftArrow} alt="left arrow" />
        </div>
        <p className={s["ctaApes"]}>Watch different bored ape&apos;s</p>
        <div className={s["rightArrow"]} onClick={moveRight}>
          <Image src={rightArrow} alt="left arrow" />
        </div>
      </div>
      <div className={s["wrapperViewport"]} style={{ width: viewportNFT, transform: `translateX(${offset}vw)` }} ref={wrapperRef}>
        {newMonkeyArr.map((item, idx) => 
          <div className={s["containerNFT"]} key={idx}>
            <div className={s["nftTarget"]}>
              <Image src={item.url} className={s["itemImage"]} fill style={{ objectFit: "cover" }} alt="nft" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carousel