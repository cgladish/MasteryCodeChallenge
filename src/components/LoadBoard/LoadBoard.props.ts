import { Load, LoadStatus } from 'store/resources/loads';

export type StateProps = {
    isFetching: boolean;
    isModifying: boolean;
    sortedLoads: Load[];
};

export type DispatchProps = {
    fetchLoads: () => void;
    changeLoadStatus: (loadId: string, loadStatus: LoadStatus) => void;
};

export type Props = StateProps & DispatchProps;
