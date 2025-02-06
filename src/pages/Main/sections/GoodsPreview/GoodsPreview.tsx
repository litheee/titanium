import { Button } from 'ui'

import classes from './GoodsPreview.module.scss'

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
        <img src='/src/assets/img/truck.png' alt='Грузовик' />
      </div>
    </section>
  )
}
