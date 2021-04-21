import React from 'react'
import Nav from '../Nav'

function SubPageLayout({ children }) {
    return (
        <div>
            <Nav />
            <div style={{ marginLeft: '200px', boxSizing: 'border-box' }}>
                { children }
            </div>
        </div>
    )
};

export default SubPageLayout
