import { actionChannel, take, call, put } from 'redux-saga/effects';

import * as R from './resources';
import * as S from './sagas';
import { modifyLoadStatusAction, mockLoadsById } from './__mockData__';

describe('loads resource sagas', () => {
    it('fetches loads', () => {
        const iterator = S.handleFetch();

        expect(iterator.next().value).toEqual(
            put({ type: '@@loads/FETCH_START' })
        );
        expect(iterator.next().value).toEqual(call(R.fetch));
        expect(iterator.next(mockLoadsById).value).toEqual(
            put({ type: '@@loads/FETCH_SUCCESS', payload: mockLoadsById })
        );
    });

    it('watches for fetch', () => {
        const iterator = S.watchFetch();

        expect(iterator.next().value).toEqual(take('@@loads/FETCH'));
        expect(iterator.next().value).toEqual(call(S.handleFetch));
        expect(iterator.next().value).toEqual(undefined);
    });

    it('watches for modify', () => {
        const iterator = S.watchModifyLoadStatus();

        expect(iterator.next().value).toEqual(
            actionChannel('@@loads/MODIFY_LOAD_STATUS')
        );

        const mockChannel = jest.fn() as any;
        expect(iterator.next(mockChannel).value).toEqual(take(mockChannel));
        expect(iterator.next(modifyLoadStatusAction).value).toEqual(
            call(S.handleModifyLoadStatus, modifyLoadStatusAction)
        );
        expect(iterator.next().value).toEqual(take(mockChannel));
    });
});
