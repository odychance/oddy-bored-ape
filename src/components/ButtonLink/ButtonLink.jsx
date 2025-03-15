import s from './styles.module.scss'
import Link from 'next/link'
import clsx from 'clsx'

const ButtonLink = ({ text, className, ref }) => {
  
  return (
    <Link href="./" className={clsx(s["btn"], className)} ref={ref}>
      <p className={s["text-btn"]}>{text}</p>
    </Link>
  )
}

export default ButtonLink