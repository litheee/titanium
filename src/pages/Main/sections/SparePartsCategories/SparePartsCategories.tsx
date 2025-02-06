import { Link } from 'react-router-dom'

import classes from './SparePartsCategories.module.scss'
import ArrowRightIcon from 'assets/icons/arrow-right.svg?react'
import engineImg from '/src/assets/img/spare-parts-categories/engine.png'
import coolingSystemsImg from '/src/assets/img/spare-parts-categories/cooling-systems.png'
import wheelsHubs from '/src/assets/img/spare-parts-categories/wheels-hubs.png'
import powerSystems from '/src/assets/img/spare-parts-categories/power-systems.png'
import clutchImg from '/src/assets/img/spare-parts-categories/clutch.png'

export const SparePartsCategories = () => {
  const categories = [
    { label: 'Двигатели', imgSrc: engineImg },
    {
      label: 'Системы охлаждения',
      imgSrc: coolingSystemsImg
    },
    { label: 'Колеса и ступицы', imgSrc: wheelsHubs },
    {
      label: 'Системы питания',
      imgSrc: powerSystems
    },
    { label: 'Сцепление', imgSrc: clutchImg }
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
