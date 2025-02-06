import type { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import classes from './Button.module.scss'

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={cn(classes.button, className)} {...props} />
}
