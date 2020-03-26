import React from 'react';
import { mount } from 'enzyme';

import { mockLoad } from 'store/resources/loads/__mockData__';
import { LoadRow } from './LoadRow';

describe('LoadRow', () => {
    it('mounts and renders', () => {
        const rendered = mount(
            <table>
                <tbody>
                    <LoadRow load={mockLoad} onClick={jest.fn()} />
                </tbody>
            </table>
        );

        expect(rendered.find('tr').exists()).toBeTruthy();
    });

    it('handles click on row', () => {
        const onClick = jest.fn();
        const rendered = mount(
            <table>
                <tbody>
                    <LoadRow load={mockLoad} onClick={onClick} />
                </tbody>
            </table>
        );
        rendered.find('tr').simulate('click');

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
