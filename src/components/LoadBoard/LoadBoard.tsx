import * as React from 'react';
import { Table } from 'reactstrap';

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
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Value</th>
                        <th>Equipment</th>
                        <th>Locked</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sortedLoads.map(load => <LoadRow key={load.id} load={load} onClick={() => setSelectedLoadId(load.id)} />)}
                </tbody>
            </Table>
        </div>
    );
};
