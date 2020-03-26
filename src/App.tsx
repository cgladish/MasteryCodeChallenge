import React from 'react';

import { Header } from './components/Header';
import { LoadBoard } from './components/LoadBoard';

export const App = () => (
    <div className="app">
        <header className="app-header">
            <Header />
        </header>
        <LoadBoard />
    </div>
);
