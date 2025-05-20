import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from "react";

export default function ProtectedRoutes() {
    const { user, authReady } = useContext(AuthContext);
    return (
        user ? <Outlet/> : <Navigate to="/loginPage"/>
    )
}

/* Complete when Loading animation is ready 

if (!authReady) {
  return <LoadingSpinner />;
}

return user ? <Dashboard /> : <Login />;

*/