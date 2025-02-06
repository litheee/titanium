import { Link } from 'react-router-dom'
import cn from 'classnames'

import classes from './Logo.module.scss'
import LogoWhiteIcon from 'assets/icons/logo-white.svg?react'
import LogoBlackIcon from 'assets/icons/logo-black.svg?react'

type LogoProps = {
  variant?: 'white' | 'black'
}

export const Logo = ({ variant = 'white' }: LogoProps) => {
  return (
    <Link to='/' className={classes.logo}>
      <div className={classes.icon}>
        {variant === 'white' ? <LogoWhiteIcon /> : null}
        {variant === 'black' ? <LogoBlackIcon /> : null}
      </div>

      <div
        className={cn(classes.text, {
          [classes.white]: variant === 'white',
          [classes.black]: variant === 'black'
        })}
      >
        <p>ТитанЗапчасть</p>
        <p>оригинальные запчасти МАЗ</p>
      </div>
    </Link>
  )
}
