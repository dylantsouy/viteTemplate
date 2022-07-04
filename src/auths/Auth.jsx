import React, { useState } from 'react';
import * as localforage from 'localforage';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

Auth.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function Auth({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = async () => {
        const storedToken = await localforage.getItem('token');
        if (!storedToken) {
            await localforage.clear();
            setIsAuthenticated(false);
            setIsLoading(false);
            return;
        }
        setIsAuthenticated(true);
        setIsLoading(false);
    };

    const login = async (token) => {
        await localforage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = async () => {
        // call Logout API
        await localforage.clear();
        window.location.replace('/');
        setIsAuthenticated(false);
    };

    return (
        // AuthContext.Provider will wrap the components
        // The wrapped components can use the value sent from the AuthContext.Provider
        // To use the value, the wrapped components should delcare 'useContext(AuthContext)'
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
