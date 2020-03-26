import { connect } from 'react-redux';

import { RootState, Dispatch } from 'store';
import * as loads from 'store/resources/loads';
import { getSortedLoads } from './selectors';
import { StateProps, DispatchProps } from './LoadBoard.props';
import { LoadBoard } from './LoadBoard';

const mapStateToProps = (state: RootState): StateProps => ({
    isFetching: loads.getIsFetching(state),
    isModifying: loads.getIsModifying(state),
    sortedLoads: getSortedLoads(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    fetchLoads: () => dispatch({ type: '@@loads/FETCH' }),
    changeLoadStatus: (loadId: string, loadStatus: loads.LoadStatus) =>
        dispatch({
            type: '@@loads/MODIFY_LOAD_STATUS',
            payload: { loadId, loadStatus },
        }),
});

export const LoadBoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadBoard);
