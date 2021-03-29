import React from 'react';
import Nav from './Nav'

function AppLayout({ children }) {
    return (
        <div>
            <Nav />
            { children }
        </div>
    )
};

export default AppLayout;
