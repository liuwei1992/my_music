import { Link, useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux'

import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { Suspense } from 'react'

function App() {
  return (
    <div>
      <AppHeader />
      <Suspense>
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
