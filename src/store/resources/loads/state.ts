import { ResourceStatus } from 'store/resources/types';

export type LoadEquipment = 'V' | 'R' | 'F';

export type LoadStatus = 'available' | 'booked';

export type Load = {
    id: string;
    origin: string;
    destination: string;
    date: string;
    value: number;
    equipment: LoadEquipment;
    locked: boolean;
    status: LoadStatus;
};

export type LoadsById = {
    [loadId: string]: Load;
};

export type State = {
    fetchStatus: ResourceStatus;
    modifyStatus: ResourceStatus;
    loadsById: LoadsById;
};

export const initialState: State = {
    fetchStatus: 'initial',
    modifyStatus: 'initial',
    loadsById: {},
};
