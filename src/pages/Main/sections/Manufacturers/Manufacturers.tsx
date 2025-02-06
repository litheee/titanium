import { Link } from 'react-router-dom'

import classes from './Manufacturers.module.scss'
import mazImg from '/src/assets/img/spare-parts-manufacturers/maz.png'
import difaImg from '/src/assets/img/spare-parts-manufacturers/difa.png'
import beltrimoImg from '/src/assets/img/spare-parts-manufacturers/beltrimo.png'
import mtzImg from '/src/assets/img/spare-parts-manufacturers/mtz.png'
import iekranImg from '/src/assets/img/spare-parts-manufacturers/iekran.png'
import taimImg from '/src/assets/img/spare-parts-manufacturers/taim.png'
import vzaipImg from '/src/assets/img/spare-parts-manufacturers/vzaip.png'
import beltizImg from '/src/assets/img/spare-parts-manufacturers/beltiz.png'
import baazImg from '/src/assets/img/spare-parts-manufacturers/baaz.png'
import ozaaImg from '/src/assets/img/spare-parts-manufacturers/ozaa.png'
import radiovolnaImg from '/src/assets/img/spare-parts-manufacturers/radiovolna.png'
import belarusRezinoTexnikaImg from '/src/assets/img/spare-parts-manufacturers/belarus-rezino-texnika.png'

export const Manufacturers = () => {
  const manufacturers = [
    { label: 'Запчасти  ОАО МАЗ', imgSrc: mazImg },
    { label: 'Запчасти СОАО ДИФА', imgSrc: difaImg },
    {
      label: 'Запчасти СООО Белтримо',
      imgSrc: beltrimoImg
    },
    { label: 'Запчасти МТЗ', imgSrc: mtzImg },

    { label: 'Запчасти ОАО ЭКРАН', imgSrc: iekranImg },
    { label: 'Запчасти ТАиМ', imgSrc: taimImg },
    { label: 'Запчасти ВЗЭИП', imgSrc: vzaipImg },
    {
      label: 'Запчасти УП ОО БелТиз',
      imgSrc: beltizImg
    },

    { label: 'Запчасти  ОАО БААЗ', imgSrc: baazImg },
    { label: 'Запчасти ОАО ОЗАА', imgSrc: ozaaImg },
    {
      label: 'Запчасти ОАО Радиоволна',
      imgSrc: radiovolnaImg
    },
    {
      label: 'Запчасти ОАО Беларусьрезинотехника',
      imgSrc: belarusRezinoTexnikaImg
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
