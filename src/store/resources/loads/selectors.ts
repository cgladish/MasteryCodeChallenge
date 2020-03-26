import { createSelector } from 'reselect';

import { RootState } from 'store';
import { State } from './state';

export const getState = (state: RootState): State => state.loads;
export const getFetchStatus = createSelector(
    [getState],
    state => state.fetchStatus
);
export const getModifyStatus = createSelector(
    [getState],
    state => state.modifyStatus
);
export const getLoadsById = createSelector(
    [getState],
    state => state.loadsById
);

export const getIsFetching = createSelector(
    [getFetchStatus],
    fetchStatus => fetchStatus === 'pending'
);

export const getIsModifying = createSelector(
    [getModifyStatus],
    modifyStatus => modifyStatus === 'pending'
);
