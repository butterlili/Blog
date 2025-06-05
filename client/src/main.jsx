import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* The Provider component makes the Redux store available to any nested components that need to access the Redux state. */}
      {/* The store prop is the Redux store that was created in the store.js file. */}
      {/* This allows the App component and its children to connect to the Redux store and access the state or dispatch actions. */}
    <App />
    </Provider>
  </StrictMode>,
)
