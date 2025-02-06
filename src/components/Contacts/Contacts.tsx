import classes from './Contacts.module.scss'
import TelegramIcon from 'assets/icons/social/telegram.svg?react'
import WhatsAppIcon from 'assets/icons/social/whats-app.svg?react'
import MailIcon from 'assets/icons/social/mail.svg?react'
import PhoneIcon from 'assets/icons/phone.svg?react'

export const Contacts = () => {
  const social = [
    { label: 'telegram', href: '/', icon: <TelegramIcon />, color: '#55B0DA' },
    { label: 'WhatsApp', href: '/', icon: <WhatsAppIcon />, color: '#62BC6B' },
    { label: 'Mail', href: '/', icon: <MailIcon />, color: '#8BBEEE' }
  ]

  return (
    <div className={classes.contacts}>
      <ul className={classes.socialList}>
        {social.map(({ label, href, icon, color }) => {
          return (
            <li key={label}>
              <a href={href} style={{ backgroundColor: color }}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>

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
    </div>
  )
}
