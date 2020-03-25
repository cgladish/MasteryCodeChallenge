import {
    combineReducers,
    createStore,
    applyMiddleware,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';
import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import * as loads from './resources/loads';

const rootReducer = combineReducers({
    loads: loads.reducer,
});

function* rootSaga() {
    yield all([...loads.sagas]);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
