import { Link, useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux'

import routes from './router'
import { useTypedSelector } from './hooks'

function App() {
  const count = useTypedSelector((state) => state.counter.count, shallowEqual)

  return (
    <div>
      <Link to="/demo">Demo</Link>

      <div>{useRoutes(routes)}</div>

      <div>{count}</div>
    </div>
  )
}

export default App
