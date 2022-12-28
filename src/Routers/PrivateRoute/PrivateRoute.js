import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div>

        </div>
    );
};

export default PrivateRoute;