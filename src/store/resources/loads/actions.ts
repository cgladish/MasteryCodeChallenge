import { LoadsById, LoadStatus } from './state';

export type FetchAction = { type: '@@loads/FETCH' };
export type FetchStartAction = { type: '@@loads/FETCH_START' };
export type FetchSuccessAction = {
    type: '@@loads/FETCH_SUCCESS';
    payload: LoadsById;
};
export type ModifyLoadStatusAction = {
    type: '@@loads/MODIFY_LOAD_STATUS';
    payload: { loadId: string; loadStatus: LoadStatus };
};
export type ModifyLoadStatusStartAction = {
    type: '@@loads/MODIFY_LOAD_STATUS_START';
};
export type ModifyLoadStatusSuccessAction = {
    type: '@@loads/MODIFY_LOAD_STATUS_SUCCESS';
    payload: { loadId: string; loadStatus: LoadStatus };
};

export type Action =
    | FetchAction
    | FetchStartAction
    | FetchSuccessAction
    | ModifyLoadStatusAction
    | ModifyLoadStatusStartAction
    | ModifyLoadStatusSuccessAction;
