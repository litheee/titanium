import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { guestRoutes } from 'shared/router/router'

export const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(guestRoutes)} />
}
