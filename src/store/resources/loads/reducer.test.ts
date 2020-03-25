import { ResourceStatus } from 'store/resources/types';
import * as R from './reducer';
import * as A from './actions';
import { LoadsById } from './state';
import {
    fetchAction,
    fetchStartAction,
    fetchSuccessAction,
    modifyLoadStatusAction,
    modifyLoadStatusStartAction,
    modifyLoadStatusSuccessAction,
    mockLoadsById,
    mockLoad,
} from './__mockData__';

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
        'reduces fetchStatus for action $action.type',
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

    it.each`
        action                           | initial      | expected
        ${fetchAction}                   | ${'initial'} | ${'initial'}
        ${fetchStartAction}              | ${'initial'} | ${'initial'}
        ${fetchSuccessAction}            | ${'initial'} | ${'initial'}
        ${modifyLoadStatusAction}        | ${'initial'} | ${'initial'}
        ${modifyLoadStatusStartAction}   | ${'initial'} | ${'pending'}
        ${modifyLoadStatusSuccessAction} | ${'pending'} | ${'success'}
    `(
        'reduces modifyStatus for action $action.type',
        ({
            action,
            initial,
            expected,
        }: {
            action: A.Action;
            initial: ResourceStatus;
            expected: ResourceStatus;
        }) => {
            const newState = R.modifyStatus(initial, action);
            expect(newState).toEqual(expected);
        }
    );

    it.each`
        action                           | initial | expected
        ${fetchAction}                   | ${{}}   | ${{}}
        ${fetchStartAction}              | ${{}}   | ${{}}
        ${fetchSuccessAction}            | ${{}}   | ${mockLoadsById}
        ${modifyLoadStatusAction}        | ${{}}   | ${{}}
        ${modifyLoadStatusStartAction}   | ${{}}   | ${{}}
        ${modifyLoadStatusSuccessAction} | ${{}}   | ${{}}
    `(
        'reduces loadsById for action $action.type',
        ({
            action,
            initial,
            expected,
        }: {
            action: A.Action;
            initial: LoadsById;
            expected: LoadsById;
        }) => {
            const newState = R.loadsById(initial, action);
            expect(newState).toEqual(expected);
        }
    );

    it('reduces loadsById for action @@loads/MODIFY_LOAD_STATUS_SUCCESS with existing state', () => {
        const newState = R.loadsById(
            mockLoadsById,
            modifyLoadStatusSuccessAction
        );
        const expected = {
            ...mockLoadsById,
            [mockLoad.id]: {
                ...mockLoad,
                status: 'booked',
            },
        };
        expect(newState).toEqual(expected);
    });
});
