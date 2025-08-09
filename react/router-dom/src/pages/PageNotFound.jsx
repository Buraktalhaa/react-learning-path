import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <h1>404 - Page not found..</h1>
            <Link to="/" className="btn btn-info">Click here to go to the home page</Link>
        </>
    )
}