import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, children }) {
    console.log(user);
    // replace yapinca kullanici geri butouna basinca calismaz

    if (!user?.id) {
        return <Navigate to="/login" replace />;
    }

    return children;
}