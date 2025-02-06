import { Link } from 'react-router-dom'

import classes from './Manufacturers.module.scss'

export const Manufacturers = () => {
  const manufacturers = [
    { label: 'Запчасти  ОАО МАЗ', imgSrc: '/src/assets/img/spare-parts-manufacturers/maz.png' },
    { label: 'Запчасти СОАО ДИФА', imgSrc: '/src/assets/img/spare-parts-manufacturers/difa.png' },
    {
      label: 'Запчасти СООО Белтримо',
      imgSrc: '/src/assets/img/spare-parts-manufacturers/beltrimo.png'
    },
    { label: 'Запчасти МТЗ', imgSrc: '/src/assets/img/spare-parts-manufacturers/mtz.png' },

    { label: 'Запчасти ОАО ЭКРАН', imgSrc: '/src/assets/img/spare-parts-manufacturers/iekran.png' },
    { label: 'Запчасти ТАиМ', imgSrc: '/src/assets/img/spare-parts-manufacturers/taim.png' },
    { label: 'Запчасти ВЗЭИП', imgSrc: '/src/assets/img/spare-parts-manufacturers/vzaip.png' },
    {
      label: 'Запчасти УП ОО БелТиз',
      imgSrc: '/src/assets/img/spare-parts-manufacturers/beltiz.png'
    },

    { label: 'Запчасти  ОАО БААЗ', imgSrc: '/src/assets/img/spare-parts-manufacturers/baaz.png' },
    { label: 'Запчасти ОАО ОЗАА', imgSrc: '/src/assets/img/spare-parts-manufacturers/ozaa.png' },
    {
      label: 'Запчасти ОАО Радиоволна',
      imgSrc: '/src/assets/img/spare-parts-manufacturers/radiovolna.png'
    },
    {
      label: 'Запчасти ОАО Беларусьрезинотехника',
      imgSrc: '/src/assets/img/spare-parts-manufacturers/belarus-rezino-texnika.png'
    }
  ]

  return (
    <section className={classes.manufacturers}>
      <h2>Подбор по производителю</h2>

      <ul className={classes.manufacturersList}>
        {manufacturers.map(({ label, imgSrc }) => {
          return (
            <li key={label}>
              <Link to='/'>
                <img src={imgSrc} alt={label} />

                <span>{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
