import { Link } from 'react-router-dom'

import classes from './SparePartsCategories.module.scss'
import ArrowRightIcon from 'assets/icons/arrow-right.svg?react'

export const SparePartsCategories = () => {
  const categories = [
    { label: 'Двигатели', imgSrc: '/src/assets/img/spare-parts-categories/engine.png' },
    {
      label: 'Системы охлаждения',
      imgSrc: '/src/assets/img/spare-parts-categories/cooling-systems.png'
    },
    { label: 'Колеса и ступицы', imgSrc: '/src/assets/img/spare-parts-categories/wheels-hubs.png' },
    {
      label: 'Системы питания',
      imgSrc: '/src/assets/img/spare-parts-categories/power-systems.png'
    },
    { label: 'Сцепление', imgSrc: '/src/assets/img/spare-parts-categories/clutch.png' }
  ]

  return (
    <div className={classes.sparePartsCategories}>
      <h2>Подбор по категориям</h2>

      <ul className={classes.categoriesList}>
        {categories.map(({ label, imgSrc }) => {
          return (
            <li key={label}>
              <Link to='/'>
                <span>{label}</span>

                <img src={imgSrc} alt={label} />
              </Link>
            </li>
          )
        })}

        <li>
          <Link to='/'>
            <span>Смотреть все категории</span>

            <ArrowRightIcon />
          </Link>
        </li>
      </ul>
    </div>
  )
}
