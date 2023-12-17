import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { store } from './store/store.ts'
import { Provider } from 'react-redux/es/exports'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StrictMode>
      <App />
      </StrictMode>
    </Provider>
  </React.StrictMode>,
)
