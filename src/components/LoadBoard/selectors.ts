import { createSelector } from 'reselect';

import * as loads from 'store/resources/loads';

// Would like to add different sort types here (name, origin, etc)
export const getSortedLoads = createSelector(
    [loads.getLoadsById],
    loadsById => {
        return Object.values(loadsById).sort((load1, load2) => {
            // Sort first by available loads, then by oldest loads, then by id
            if (load1.status !== load2.status) {
                return load1.status === 'available' ? -1 : 1;
            }

            const load1Date = new Date(load1.date);
            const load2Date = new Date(load2.date);
            if (load1Date !== load2Date) {
                return load1Date.getTime() - load2Date.getTime();
            }

            return load1.id > load2.id ? 1 : -1;
        });
    }
);
