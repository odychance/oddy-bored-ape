import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gsapAnim = (ref1, ref2, addPosition) => {
  gsap.to(ref1, {
    y: {addPosition},
    x: {addPosition},
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ref2,
      toggleActions: "play none reverse none",
      start: "top 80%",
      end: "top 80%",
    }
  })
}

export const animationText = (mainRef, triggerRef) => {
  gsapAnim(mainRef, triggerRef, 0)
}

export const animationButton = (mainRef, triggerRef) => {
  gsapAnim(mainRef, triggerRef, 0)
}