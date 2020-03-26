import React from 'react';
import { mount } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {
    it('mounts and renders', () => {
        const rendered = mount(<Header />);

        expect(rendered.find('div').exists()).toBeTruthy();
    });
});
