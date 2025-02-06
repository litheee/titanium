import cn from 'classnames'
import type { InputHTMLAttributes } from 'react'

import classes from './TextField.module.scss'

type TextFieldProps = {
  name: string
  className?: string
  startAdornment?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ name, className, startAdornment, ...props }: TextFieldProps) => {
  return (
    <div className={cn(classes.textField, className)}>
      {startAdornment ?? null}

      <input name={name} {...props} />
    </div>
  )
}
