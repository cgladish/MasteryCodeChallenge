import * as React from 'react';

import { LoadRow } from './LoadRow';
import { Props } from './LoadBoard.props';
import './LoadBoard.css';

export const LoadBoard = (props: Props) => {
    const { fetchLoads, sortedLoads } = props;

    const [selectedLoadId, setSelectedLoadId] = React.useState<null | string>(
        null
    );
    React.useEffect(() => {
        fetchLoads();
    }, [fetchLoads]);

    return (
        <div className="load-board">
            <div className="load-row load-header-row">
                <div className="load-row-id">ID</div>
                <div className="load-row-origin">Origin</div>
                <div className="load-row-destination">Destination</div>
                <div className="load-row-date">Date</div>
                <div className="load-row-value">Value</div>
                <div className="load-row-equipment">Equipment</div>
                <div className="load-row-locked">Locked</div>
                <div className="load-row-status">Status</div>
            </div>
            {props.sortedLoads.map(load => <LoadRow key={load.id} load={load} onClick={() => setSelectedLoadId(load.id)} />)}
        </div>
    );
};
