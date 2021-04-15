import React from 'react';
import Nav from '../Nav'

function AppLayout({ children }) {
    return (
        <div>
            <Nav />
            { children }
            <footer style={{ textAlign: 'center', padding: '5rem 0 3rem' }}>@2021 madeby JEB</footer>
        </div>
    )
};

export default AppLayout;
