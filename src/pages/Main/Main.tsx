import { Logo } from 'components/Logo/Logo'
import { TextField } from 'ui'
import { AboutShop, CallBack, GoodsPreview, Manufacturers, SparePartsCategories } from './sections'

import classes from './Main.module.scss'
import SearchIcon from 'assets/icons/search.svg?react'

export const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <div className='wrapper'>
        <div className={classes.top}>
          <div className={classes.logo}>
            <Logo variant='black' />
          </div>

          <TextField
            name='search'
            placeholder='Поиск по артикулу или коду товара'
            startAdornment={
              <div className={classes.searchFieldStartAdornment}>
                <SearchIcon />
              </div>
            }
            className={classes.searchField}
          />
        </div>

        <div className={classes.goodsPreview}>
          <GoodsPreview />
        </div>

        <div className={classes.manufacturers}>
          <Manufacturers />
        </div>

        <div className={classes.sparePartsCategories}>
          <SparePartsCategories />
        </div>
      </div>

      <div className={classes.bottom}>
        <div className='wrapper'>
          <AboutShop />

          <div className={classes.callBack}>
            <CallBack />
          </div>
        </div>
      </div>
    </div>
  )
}
