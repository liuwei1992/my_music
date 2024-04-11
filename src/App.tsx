import { Link, useRoutes } from 'react-router-dom'

import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { Suspense } from 'react'
import Player from './pages/player'

function App() {
  return (
    <div>
      <AppHeader />
      <Suspense>
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <Player />
    </div>
  )
}

export default App
