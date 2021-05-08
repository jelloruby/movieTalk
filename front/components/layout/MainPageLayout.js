import React from 'react';
import Nav from '../Menu/Nav';

function MainPageLayout({ children }) {
    return (
        <div style={{ width: '100%' }}>
            <Nav />
            { children }
        </div>
    )
};

export default MainPageLayout;
