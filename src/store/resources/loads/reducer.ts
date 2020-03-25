import { combineReducers } from 'redux';

import { ResourceStatus } from 'store/resources/types';
import * as A from './actions';
import { initialState, LoadsById } from './state';

export const fetchStatus = (
    state = initialState.fetchStatus,
    action: A.Action
): ResourceStatus => {
    switch (action.type) {
        case '@@loads/FETCH_START':
            return 'pending';
        case '@@loads/FETCH_SUCCESS':
            return 'success';
        default:
            return state;
    }
};

export const modifyStatus = (
    state = initialState.modifyStatus,
    action: A.Action
): ResourceStatus => {
    switch (action.type) {
        case '@@loads/MODIFY_LOAD_STATUS_START':
            return 'pending';
        case '@@loads/MODIFY_LOAD_STATUS_SUCCESS':
            return 'success';
        default:
            return state;
    }
};

export const loadsById = (
    state = initialState.loadsById,
    action: A.Action
): LoadsById => {
    switch (action.type) {
        case '@@loads/FETCH_SUCCESS':
            return action.payload;
        case '@@loads/MODIFY_LOAD_STATUS_SUCCESS':
            if (state[action.payload.loadId]) {
                return {
                    ...state,
                    [action.payload.loadId]: {
                        ...state[action.payload.loadId],
                        status: action.payload.loadStatus,
                    },
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export const reducer = combineReducers({
    fetchStatus,
    modifyStatus,
    loadsById,
});
