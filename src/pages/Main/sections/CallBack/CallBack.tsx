import { PatternFormat } from 'react-number-format'

import { Button, TextField } from 'ui'

import classes from './CallBack.module.scss'
import questionsImg from '/src/assets/img/questions-img.png'

export const CallBack = () => {
  return (
    <section className={classes.callBack}>
      <div className={classes.left}>
        <h2>
          Остались вопросы? <br /> Оставьте данные и мы перезвоним
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <PatternFormat
            name='phone'
            className={classes.textField}
            format='+7 (###) ### ## ##'
            allowEmptyFormatting
            mask='_'
            customInput={TextField}
          />

          <Button type='submit' className={classes.submitBtn}>
            Отправить
          </Button>
        </form>
      </div>

      <img src={questionsImg} alt='Запчасти' />
    </section>
  )
}
