import { ResourceStatus } from 'store/resources/types';
import * as R from './reducer';
import * as A from './actions';
import { mockLoad, mockLoadsById } from './__mockData__';

const fetchAction: A.FetchAction = { type: '@@loads/FETCH' };
const fetchStartAction: A.FetchStartAction = { type: '@@loads/FETCH_START' };
const fetchSuccessAction: A.FetchSuccessAction = {
    type: '@@loads/FETCH_SUCCESS',
    payload: mockLoadsById,
};
const modifyLoadStatusAction: A.ModifyLoadStatusAction = {
    type: '@@loads/MODIFY_LOAD_STATUS',
    payload: { loadId: mockLoad.id, loadStatus: 'booked' },
};
const modifyLoadStatusStartAction: A.ModifyLoadStatusStartAction = {
    type: '@@loads/MODIFY_LOAD_STATUS_START',
};
const modifyLoadStatusSuccessAction: A.ModifyLoadStatusSuccessAction = {
    type: '@@loads/MODIFY_LOAD_STATUS_SUCCESS',
    payload: { loadId: mockLoad.id, loadStatus: 'booked' },
};

describe('loads resource reducers', () => {
    it.each`
        action                           | initial      | expected
        ${fetchAction}                   | ${'initial'} | ${'initial'}
        ${fetchStartAction}              | ${'initial'} | ${'pending'}
        ${fetchSuccessAction}            | ${'pending'} | ${'success'}
        ${modifyLoadStatusAction}        | ${'initial'} | ${'initial'}
        ${modifyLoadStatusStartAction}   | ${'initial'} | ${'initial'}
        ${modifyLoadStatusSuccessAction} | ${'initial'} | ${'initial'}
    `(
        'reduces fetchStatus for action $action.type from $initial to $expected',
        ({
            action,
            initial,
            expected,
        }: {
            action: A.Action;
            initial: ResourceStatus;
            expected: ResourceStatus;
        }) => {
            const newState = R.fetchStatus(initial, action);
            expect(newState).toEqual(expected);
        }
    );
});
