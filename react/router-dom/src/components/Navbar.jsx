import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ user, handleLogout }) {
    
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">R-Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                        <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                        <NavLink className="nav-link" to="/communication">Communication</NavLink>

                        {user && user.id
                            ? <>
                                <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                                <button className="nav-link" onClick={handleLogout}>Logout ({user.name})</button>
                            </>
                            : <NavLink className="nav-link" to="/login">Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>)
}