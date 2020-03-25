import {
    combineReducers,
    createStore,
    applyMiddleware,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import * as loads from './resources/loads';

const reducer = combineReducers({
    [loads.namespace]: loads.reducer,
});

function* rootSaga() {
    yield all([...loads.sagas]);
}

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
