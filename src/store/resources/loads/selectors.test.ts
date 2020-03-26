import * as S from './selectors';
import { initialState, State } from './state';
import { mockLoadsById } from './__mockData__';

describe('loads resource selectors', () => {
    const createState = (additionalState: Partial<State> = {}) => ({
        loads: {
            ...initialState,
            ...additionalState,
        },
    });

    it('get loads state', () => {
        const state = createState();
        expect(S.getState(state)).toEqual(initialState);
    });

    it('get fetch status', () => {
        const state = createState({ fetchStatus: 'success' });
        expect(S.getFetchStatus(state)).toEqual('success');
    });

    it('get modify status', () => {
        const state = createState({ modifyStatus: 'success' });
        expect(S.getModifyStatus(state)).toEqual('success');
    });

    it('get loads by id', () => {
        const state = createState({ loadsById: mockLoadsById });
        expect(S.getLoadsById(state)).toEqual(mockLoadsById);
    });

    describe('gets whether loads are being fetched', () => {
        it('when they have not yet loaded', () => {
            const state = createState({ fetchStatus: 'initial' });
            expect(S.getIsFetching(state)).toEqual(true);
        });

        it('when they are being fetched', () => {
            const state = createState({ fetchStatus: 'pending' });
            expect(S.getIsFetching(state)).toEqual(true);
        });

        it('when they have loaded', () => {
            const state = createState({ fetchStatus: 'success' });
            expect(S.getIsFetching(state)).toEqual(false);
        });
    });

    describe('gets whether loads are being modified', () => {
        it('when they are not being modified', () => {
            const state = createState({ modifyStatus: 'initial' });
            expect(S.getIsModifying(state)).toEqual(false);
        });

        it('when they are being modified', () => {
            const state = createState({ modifyStatus: 'pending' });
            expect(S.getIsModifying(state)).toEqual(true);
        });

        it('when they have finished being modified', () => {
            const state = createState({ modifyStatus: 'success' });
            expect(S.getIsModifying(state)).toEqual(false);
        });
    });
});
