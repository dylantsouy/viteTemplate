import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import PropTypes from 'prop-types';
import { AuthContext } from '@/auths/Auth';
import Login from '@/components/login';
import Loading from '@/containers/Loading';

const Layout = ({ children }) => {
    // Declare the useContext() so this component will have the same context as AuthContext.Provider
    const { isAuthenticated, isLoading, checkAuth, login, logout } = useContext(AuthContext);

    useEffect(() => {
        checkAuth();
    }, [{ Route }, isAuthenticated]);

    if (isLoading) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Login setToken={login} />;
    }

    return (
        <div className='container'>
            <Header logout={logout} />
            <main className='main'>{children}</main>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout;
