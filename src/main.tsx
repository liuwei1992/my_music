import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App'
import { Suspense } from 'react'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Suspense>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
)
