import * as React from 'react';

import { Props } from './LoadRow.props';

export const LoadRow = (props: Props) => (
    <tr className="load-board-row" onClick={props.onClick}>
        <td>{props.load.id}</td>
        <td>{props.load.origin}</td>
        <td>{props.load.destination}</td>
        <td>{props.load.date}</td>
        <td>{props.load.value}</td>
        <td>{props.load.equipment}</td>
        <td>{props.load.locked ? 'yes' : 'no'}</td>
        <td>{props.load.status}</td>
    </tr>
);
