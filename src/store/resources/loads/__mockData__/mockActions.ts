import * as A from '../actions';
import { mockLoadsById, mockLoad } from './mockLoadsData';

export const fetchAction: A.FetchAction = { type: '@@loads/FETCH' };
export const fetchStartAction: A.FetchStartAction = {
    type: '@@loads/FETCH_START',
};
export const fetchSuccessAction: A.FetchSuccessAction = {
    type: '@@loads/FETCH_SUCCESS',
    payload: mockLoadsById,
};
export const modifyLoadStatusAction: A.ModifyLoadStatusAction = {
    type: '@@loads/MODIFY_LOAD_STATUS',
    payload: { loadId: mockLoad.id, loadStatus: 'booked' },
};
export const modifyLoadStatusStartAction: A.ModifyLoadStatusStartAction = {
    type: '@@loads/MODIFY_LOAD_STATUS_START',
};
export const modifyLoadStatusSuccessAction: A.ModifyLoadStatusSuccessAction = {
    type: '@@loads/MODIFY_LOAD_STATUS_SUCCESS',
    payload: { loadId: mockLoad.id, loadStatus: 'booked' },
};
