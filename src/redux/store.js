// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer'

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


// REDUX DEV TOOLS
 
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer'

// const composed = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

// const store = createStore(rootReducer, composed);

// export default store;
 
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Cambio aquí 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);  

const composed = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const store = createStore(
  persistedReducer, 
  composed
);

const persistor = persistStore(store);

export { store, persistor };