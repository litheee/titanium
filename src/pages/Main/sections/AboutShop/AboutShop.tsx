import classes from './AboutShop.module.scss'
import aboutShopImg from '/src/assets/img/about-shop-img.png'

export const AboutShop = () => {
  return (
    <section className={classes.aboutShop}>
      <div className={classes.text}>
        <h2>О нашем магазине</h2>

        <p>Прямые поставки заводов Беларуси и РФ от всех поставщиков конвейера МАЗ.</p>

        <p>
          В наличии постоянно более 9 000 запасных частей к автомобилям МАЗ Индивидуальные скидки и
          удобные формы расчета. Подбор запчасти по ФОТОГРАФИИ, номеру, описанию. Даем честную
          гарантию, отвечаем за каждую запчасть. Оперативно доставим в любую точку России удобным
        </p>
      </div>

      <div className={classes.image}>
        <img src={aboutShopImg} alt='Запчасти' />
      </div>
    </section>
  )
}
