import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useOutsideClick } from '@chakra-ui/react-use-outside-click'
import cn from 'classnames'

import classes from './Header.module.scss'
import UserIcon from 'assets/icons/user.svg?react'
import ShoppingCartIcon from 'assets/icons/shopping-cart.svg?react'
import PhoneIcon from 'assets/icons/phone.svg?react'

export const Header = () => {
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const mobileDropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: mobileDropdownRef as React.RefObject<HTMLDivElement>,
    handler: () => {
      setMobileDropdownOpen(false)
    }
  })

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

            <li>
              <a href='#footer'>Контакты</a>
            </li>
          </ul>
        </nav>

        <div className={classes.right}>
          <div className={classes.phones}>
            <a href='tel:79502705030'>
              <PhoneIcon />
              +7 (950) 270 50 30
            </a>

            <a href='tel:79015888812'>
              <PhoneIcon />
              +7 (901) 588 88 12
            </a>
          </div>

          <div className={classes.userLinks}>
            <a className={classes.contactsLink} href='#footer'>
              <PhoneIcon width={40} height={40} />
            </a>

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
        ref={mobileDropdownRef}
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
          <a href='tel:79502705030'>
            <PhoneIcon />
            +7 (950) 270 50 30
          </a>

          <a href='tel:79015888812'>
            <PhoneIcon />
            +7 (901) 588 88 12
          </a>

          <a href='mailto:titanzapch@mail.ru'>titanzapch@mail.ru</a>
        </div>
      </div>
    </header>
  )
}
