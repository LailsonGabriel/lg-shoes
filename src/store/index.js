import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducers } from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'lgshoes',
  storage,
}

const persistedReducer = persistReducer(persistConfig, Reducers) 

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(persistedReducer, composeEnhancer);
export const persistor = persistStore(store);
