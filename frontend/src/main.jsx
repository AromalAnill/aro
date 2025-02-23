import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/Redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Provider store={store}>
    <App />
  </Provider>,
  </StrictMode>,
)
