import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Shared/Header/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return <Navigate to='/logIn' state={{ from: location }} replace />
    }
    return children;
};

export default PrivateRoute;