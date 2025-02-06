import { Link } from 'react-router-dom'
import cn from 'classnames'

import { Contacts } from '../Contacts/Contacts'

import classes from './Header.module.scss'
import UserIcon from 'assets/icons/user.svg?react'
import ShoppingCartIcon from 'assets/icons/shopping-cart.svg?react'
import { useState } from 'react'

export const Header = () => {
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const nav = [
    { label: 'Компания', href: '/' },
    { label: 'Оплата', href: '/' },
    { label: 'Доставка', href: '/' },
    { label: 'Производители', href: '/' }
  ]

  return (
    <header className={classes.header}>
      <div className='wrapper'>
        <nav>
          <ul className={classes.navList}>
            {nav.map(({ label, href }) => {
              return (
                <li key={label}>
                  <Link to={href}>{label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={classes.right}>
          <div className={classes.contacts}>
            <Contacts />
          </div>

          <div className={classes.userLinks}>
            <Link to='/'>
              <UserIcon />
            </Link>

            <Link to='/'>
              <ShoppingCartIcon />
            </Link>

            <button
              className={classes.mobileMenuBtn}
              onClick={() => {
                setMobileDropdownOpen((isOpen) => !isOpen)
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(classes.mobileDropdown, {
          [classes.open]: isMobileDropdownOpen
        })}
      >
        <ul className={classes.mobileNavList}>
          {nav.map(({ label, href }) => {
            return (
              <li key={label}>
                <Link to={href}>{label}</Link>
              </li>
            )
          })}
        </ul>

        <div className={classes.mobileContacts}>
          <Contacts />
        </div>
      </div>
    </header>
  )
}
