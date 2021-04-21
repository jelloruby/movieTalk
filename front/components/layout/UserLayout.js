import React from 'react';
import Nav from '../Nav'

function LoginLayout({ children }) {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Nav />
            <div style={{ marginLeft: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                { children }
            </div>
        </div>
    )
};

export default LoginLayout;
