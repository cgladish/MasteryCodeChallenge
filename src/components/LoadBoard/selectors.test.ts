import * as loads from 'store/resources/loads';
import { mockLoads, mockLoadsById } from 'store/resources/loads/__mockData__';
import { getSortedLoads } from './selectors';

describe('LoadBoard selectors', () => {
    it('get loads sorted first by availability, then by oldest, then by id', () => {
        const state = {
            loads: {
                ...loads.initialState,
                loadsById: mockLoadsById,
            },
        };
        const expected = [
            mockLoads[0],
            mockLoads[4],
            mockLoads[2],
            mockLoads[3],
            mockLoads[1],
            mockLoads[5],
        ];
        expect(getSortedLoads(state)).toEqual(expected);
    });

    it('handles noloads', () => {
        const state = {
            loads: loads.initialState,
        };
        expect(getSortedLoads(state)).toEqual([]);
    });
});
