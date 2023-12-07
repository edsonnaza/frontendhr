import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios';
import '../styles/global.scss';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';  
import { store, persistor } from './redux/store';

// Router
import { BrowserRouter } from 'react-router-dom';
// axios default base URL
axios.defaults.baseURL='https://human-resources-backend.onrender.com/hr';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
