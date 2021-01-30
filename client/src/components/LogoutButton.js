import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="container text-right">

                <button type="button" className="logBtn btn btn-primary" onClick={() => logout()}>
                    Log Out
                </button>

            </div>
        )
    )
}

export default LogoutButton