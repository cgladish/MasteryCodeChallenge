import React from 'react';
import { mount } from 'enzyme';

import { App } from './App';

describe('App', () => {
    it('mounts and renders', () => {
        const rendered = mount(<App />);

        expect(rendered.find('div').exists());
    });
});
