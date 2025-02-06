import type { RouteObject } from 'react-router-dom'

import { PageLayout } from 'components'
import { MainPage } from 'pages'

import { ROUTE_NAMES } from './routes'

export const guestRoutes: RouteObject[] = [
  {
    element: <PageLayout />,
    children: [
      {
        path: ROUTE_NAMES.MAIN,
        element: <MainPage />
      }
    ]
  }
]
