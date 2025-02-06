import { Button } from 'ui'

import classes from './GoodsPreview.module.scss'
import truckImg from '/src/assets/img/truck.png'

export const GoodsPreview = () => {
  return (
    <section className={classes.goodsPreview}>
      <div className={classes.text}>
        <h1>Ознакомьтесь с нашими товарами</h1>

        <p>
          Скачайте прайс-лист или добавляйте позиции в корзину через поисковую строку сверху, чтобы
          узнать стоимость и наличие
        </p>

        <Button className={classes.button}>Скачать прайс лист</Button>
      </div>

      <div className={classes.image}>
        <img src={truckImg} alt='Грузовик' />
      </div>
    </section>
  )
}
