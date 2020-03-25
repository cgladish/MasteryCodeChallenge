import { createSelector } from 'reselect';

import * as loads from 'store/resources/loads';

// Would like to add different sort types here (name, origin, etc)
export const getSortedLoads = createSelector(
    [loads.getLoadsById],
    loadsById => {
        return Object.values(loadsById).sort((load1, load2) => {
            // Sort first by available loads then by oldest loads
            if (load1.status !== load2.status) {
                return load1.status === 'available' ? -1 : 1;
            }
            return (
                new Date(load1.date).getTime() - new Date(load2.date).getTime()
            );
        });
    }
);
