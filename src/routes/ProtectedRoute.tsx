import React, { ReactNode } from 'react';
import { constants } from '../data/constants';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            {localStorage.getItem(constants.localStorageKeys.isLoggedIn) ===
            'true' ? (
                children
            ) : (
                <Navigate to={'/login'} />
            )}
        </>
    );
};

export default ProtectedRoute;
