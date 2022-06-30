import React from 'react';
import Sidebar from '@/layouts/sidebar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <div>
                <main>{children}</main>
            </div>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout;
