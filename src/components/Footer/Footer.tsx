import { Link } from 'react-router-dom'

import { Contacts } from '../Contacts/Contacts'
import { Logo } from '../Logo/Logo'

import classes from './Footer.module.scss'

export const Footer = () => {
  const nav = [
    { label: 'Компания', href: '/' },
    { label: 'Оплата', href: '/' },
    { label: 'Доставка', href: '/' },
    { label: 'Производители', href: '/' }
  ]

  return (
    <footer className={classes.footer}>
      <div className='wrapper'>
        <div className={classes.logo}>
          <Logo />
        </div>

        <ul className={classes.navList}>
          {nav.map(({ label, href }) => {
            return (
              <li key={label}>
                <Link to={href}>{label}</Link>
              </li>
            )
          })}
        </ul>

        <div className={classes.contacts}>
          <Contacts />
        </div>
      </div>
    </footer>
  )
}
