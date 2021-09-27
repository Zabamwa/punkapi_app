import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import {beerListReducer} from "../features/listOfBeer/ListOfBeerSlice";
import rootSaga from "./sagas";
import {favouriteReducer} from "../features/favouriteList/FavouriteListSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    beerList: beerListReducer,
    favourite: favouriteReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
