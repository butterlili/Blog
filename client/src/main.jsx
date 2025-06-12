import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>

);

{/* The Provider component makes the Redux store available to any nested components that need to access the Redux state. */}
      {/* The store prop is the Redux store that was created in the store.js file. */}
      {/* This allows the App component and its children to connect to the Redux store and access the state or dispatch actions. */}
    