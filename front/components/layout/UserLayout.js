import React from 'react';
import Nav from '../Nav'

function LoginLayout({ children }) {
    return (
        <div>
            <Nav />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                { children }
            </div>
            <footer style={{ textAlign: 'center', padding: '5rem 0 3rem' }}>@2021 madeby JEB</footer>
        </div>
    )
};

export default LoginLayout;
