import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import * as loads from './resources/loads';

export const store = configureStore({
    reducer: {
        [loads.namespace]: loads.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
