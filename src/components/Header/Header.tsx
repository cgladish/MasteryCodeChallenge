import React from 'react';

import logo from './logo.svg';
import './Header.css';

export const Header = () => (
    <div className="app-header">
        <img className="app-header-logo" alt="logo" src={logo} />
        <div className="app-header-text">Load Board</div>
    </div>
);
