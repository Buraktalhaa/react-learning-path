import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, loading, children }) {
    console.log(user);
    // replace yapinca kullanici geri butouna basinca calismaz

    if (loading) return <div>Loading...</div>;

    if (!loading && !user?.id) {
        return <Navigate to="/login" replace />;
    }

    return children;
}