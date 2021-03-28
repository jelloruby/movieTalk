import React from 'react';
import Nav from '../components/Nav'

// import PropTypes from 'prop-types'

function AppLayout({ children }) {
    return (
        <div>
            <Nav />
            { children }
        </div>
    )
};

// AppLayout.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default AppLayout;
