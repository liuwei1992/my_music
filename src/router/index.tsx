import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router-dom'

const Demo = lazy(() => import('@/pages/demo'))
const DemoChild = lazy(() => import('@/pages/demo/views/child'))
const DemoChild2 = lazy(() => import('@/pages/demo/views/child2'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/demo" />,
  },
  {
    path: '/demo',
    element: <Demo />,
    children: [
      {
        path: '/demo/child1',
        element: <DemoChild />,
      },
      {
        path: '/demo/:id',
        element: <DemoChild2 />,
      },
    ],
  },
]

export default routes
