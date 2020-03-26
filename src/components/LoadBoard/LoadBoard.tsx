import * as React from 'react';
import { Table, Spinner } from 'reactstrap';

import { Load } from 'store/resources/loads';
import { LoadRow } from './LoadRow';
import { LoadModal } from './LoadModal';
import { Props } from './LoadBoard.props';
import './LoadBoard.css';

export const LoadBoard = (props: Props) => {
    const { fetchLoads, sortedLoads, isModifying } = props;

    const [selectedLoad, setSelectedLoad] = React.useState<null | Load>(null);

    React.useEffect(
        () => {
            fetchLoads();
        },
        [fetchLoads]
    );

    const onCloseModal = () => {
        setSelectedLoad(null);
    };

    React.useEffect(
        () => {
            if (!isModifying) {
                onCloseModal();
            }
        },
        [isModifying]
    );

    if (props.isFetching) {
        return (
            <div className="load-board-fetching">
                <Spinner color="primary" />
            </div>
        );
    }

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
                    {sortedLoads.map(load => (
                        <LoadRow
                            key={load.id}
                            load={load}
                            onClick={() => setSelectedLoad(load)}
                        />
                    ))}
                </tbody>
            </Table>
            {!!selectedLoad && (
                <LoadModal
                    isModifying={props.isModifying}
                    load={selectedLoad}
                    onClose={onCloseModal}
                    changeLoadStatus={props.changeLoadStatus}
                />
            )}
        </div>
    );
};
