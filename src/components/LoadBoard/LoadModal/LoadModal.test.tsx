import React from 'react';
import { mount } from 'enzyme';

import { mockLoad } from 'store/resources/loads/__mockData__';
import { Props } from './LoadModal.props';
import { LoadModal } from './LoadModal';

const createMountedWrapper = (additionalProps: Partial<Props> = {}) => {
    const props = {
        isModifying: false,
        load: mockLoad,
        onClose: jest.fn(),
        changeLoadStatus: jest.fn(),

        ...additionalProps,
    };
    const rendered = mount(<LoadModal {...props} />);

    return { rendered, props };
};

describe('LoadModal', () => {
    it('mounts and renders', () => {
        const { rendered } = createMountedWrapper();
        expect(rendered.find('Modal').exists()).toBeTruthy();
    });

    describe('handles displaying warning', () => {
        it('when not locked', () => {
            const { rendered } = createMountedWrapper();
            expect(rendered.find('.text-danger').exists()).toBeFalsy();
        });

        it('when locked', () => {
            const { rendered } = createMountedWrapper({
                load: { ...mockLoad, locked: true },
            });
            expect(rendered.find('.text-danger').exists()).toBeTruthy();
        });
    });

    it('handles changing load status and submitting confirm', () => {
        const { rendered, props } = createMountedWrapper();
        (rendered.find('Input') as any).invoke('onChange')({
            target: { value: 'booked' },
        });
        (rendered.find('Button#confirm') as any).invoke('onClick')();

        expect(props.changeLoadStatus).toHaveBeenCalledTimes(1);
        expect(props.changeLoadStatus).toHaveBeenCalledWith(
            props.load.id,
            'booked'
        );
    });

    it('allows changing load status when load is not', () => {
        const { rendered } = createMountedWrapper({ load: { ...mockLoad } });
        expect(rendered.find('Input').props().disabled).toBeFalsy();
    });

    it('disables changing load status when load is locked', () => {
        const { rendered } = createMountedWrapper({
            load: { ...mockLoad, locked: true },
        });
        expect(rendered.find('Input').props().disabled).toBeTruthy();
    });

    it('handles closing on toggle', () => {
        const { rendered, props } = createMountedWrapper();
        (rendered.find('Modal') as any).invoke('toggle')();

        expect(props.onClose).toHaveBeenCalledTimes(1);
    });

    it('handles closing on cancel click', () => {
        const { rendered, props } = createMountedWrapper();
        (rendered.find('Button#cancel') as any).invoke('onClick')();

        expect(props.onClose).toHaveBeenCalledTimes(1);
    });

    it('does not disable when not modifying', () => {
        const { rendered } = createMountedWrapper();
        const input = rendered.find('Input');
        const buttons = rendered.find('Button');

        expect(input.props().disabled).toBeFalsy();
        expect(buttons.at(0).props().disabled).toBeFalsy();
    });

    it('disables all interactions when modifying', () => {
        const { rendered } = createMountedWrapper({ isModifying: true });
        const input = rendered.find('Input');
        const buttons = rendered.find('Button');

        expect(input.props().disabled).toBeTruthy();
        expect(buttons.at(0).props().disabled).toBeTruthy();
        expect(buttons.at(1).props().disabled).toBeTruthy();
    });

    it('disables confirm button until load status has been changed', () => {
        const { rendered } = createMountedWrapper();
        let confirmButton = rendered.find('Button#confirm');
        expect(confirmButton.props().disabled).toBeTruthy();

        (rendered.find('Input') as any).invoke('onChange')({
            target: { value: 'booked' },
        });
        confirmButton = rendered.find('Button#confirm');
        expect(confirmButton.props().disabled).toBeFalsy();
    });
});
