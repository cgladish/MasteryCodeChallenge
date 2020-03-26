import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from 'store';
import { App } from './App';

describe('App', () => {
    it('mounts and renders', () => {
        const rendered = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(rendered.find('div').exists());
    });
});
