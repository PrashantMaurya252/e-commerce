import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={store.persistor}>
       <App/>

    </PersistGate>
    
  </Provider>
)
