import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import mySaga from './mysaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: counterReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(mySaga);
