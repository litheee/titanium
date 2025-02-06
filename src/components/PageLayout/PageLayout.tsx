import { Outlet } from 'react-router-dom'

import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'

import classes from './PageLayout.module.scss'

export const PageLayout = () => {
  return (
    <div className={classes.pageLayout}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
