import React from 'react';

import { Header } from './components/Header';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <Header />
            </header>
            <body />
        </div>
    );
}

export default App;
