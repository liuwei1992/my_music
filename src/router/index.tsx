import { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router-dom'

import Discover from '@/pages/discover'
import Recommend from '@/pages/discover/views/recommend'

const Toplist = lazy(() => import('@/pages/discover/views/toplist'))
const Playlist = lazy(() => import('@/pages/discover/views/playlist'))
const Djradio = lazy(() => import('@/pages/discover/views/djradio'))
const Singer = lazy(() => import('@/pages/discover/views/singer'))
const Album = lazy(() => import('@/pages/discover/views/album'))

const My = lazy(() => import('@/pages/my'))
const Attention = lazy(() => import('@/pages/attention'))
const Download = lazy(() => import('@/pages/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Recommend />,
      },
      {
        path: '/discover/toplist',
        element: <Toplist />,
      },
      {
        path: '/discover/playlist',
        element: <Playlist />,
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/singer',
        element: <Singer />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
    ],
  },
  {
    path: '/my',
    element: <My />,
  },
  {
    path: '/attention',
    element: <Attention />,
  },
  {
    path: '/download',
    element: <Download />,
  },
]

export default routes
