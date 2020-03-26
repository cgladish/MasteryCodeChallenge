import React from 'react';
import { mount } from 'enzyme';

import { mockLoads } from 'store/resources/loads/__mockData__';
import { Props } from './LoadBoard.props';
import { LoadBoard } from './LoadBoard';

const createMountedWrapper = (additionalProps: Partial<Props> = {}) => {
    const props = {
        isFetching: false,
        isModifying: false,
        sortedLoads: mockLoads,
        fetchLoads: jest.fn(),
        changeLoadStatus: jest.fn(),

        ...additionalProps,
    };
    const rendered = mount(<LoadBoard {...props} />);

    return { rendered, props };
};

describe('LoadBoard', () => {
    it('mounts and renders', () => {
        const { rendered } = createMountedWrapper();
        expect(rendered.find('div').exists()).toBeTruthy();
    });

    it('fetches loads on initial mount', () => {
        const { props } = createMountedWrapper();
        expect(props.fetchLoads).toHaveBeenCalledTimes(1);
    });

    it('does not show modal until row is selected', () => {
        const { rendered } = createMountedWrapper();
        expect(rendered.find('LoadModal').exists()).toBeFalsy();
    });

    it('shows modal once row is selected', () => {
        const { rendered } = createMountedWrapper();
        (rendered.find('LoadRow').first() as any).invoke('onClick')();
        expect(rendered.find('LoadModal').exists()).toBeTruthy();
    });

    it('hides modal on close', () => {
        const { rendered } = createMountedWrapper();
        (rendered.find('LoadRow').first() as any).invoke('onClick')();
        expect(rendered.find('LoadModal').exists()).toBeTruthy();

        (rendered.find('LoadModal') as any).invoke('onClose')();
        expect(rendered.find('LoadModal').exists()).toBeFalsy();
    });
});
