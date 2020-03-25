import * as React from 'react';

import { Props } from './LoadRow.props';

export const LoadRow = (props: Props) => (
    <div className="load-row" onClick={props.onClick}>
        <div className="load-row-id">{props.load.id}</div>
        <div className="load-row-origin">{props.load.origin}</div>
        <div className="load-row-destination">{props.load.destination}</div>
        <div className="load-row-date">{props.load.date}</div>
        <div className="load-row-value">{props.load.value}</div>
        <div className="load-row-equipment">{props.load.equipment}</div>
        <div className="load-row-locked">{props.load.locked ? 'yes' : 'no'}</div>
        <div className="load-row-status">{props.load.status}</div>
    </div>
);
