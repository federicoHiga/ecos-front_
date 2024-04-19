/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate } from "react-router-dom";
import useUser from '../services/hooks/useUser'

const PrivateRoute = ({ Component, roles }) => {

    const { user } = useUser();

    if (!user) {
        return <Navigate to='/login' />
    } else if (roles && roles.indexOf(user.rol) === -1) {
        return <Navigate to={{ pathname: '/login' }} />
    } else {
        return (
            < Component />
        )
    }
}

export default PrivateRoute