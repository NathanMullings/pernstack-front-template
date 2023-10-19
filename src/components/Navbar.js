import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/authActions'; 
import './Navbar.css';

const Navbar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');  // Redirect to login page after logout
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to={isAuthenticated ? "/dashboard" : "/"}>
                    <img src="/nlogo.png" alt="logo" className="logo" />
                </Link>
            </div>

            {isAuthenticated && (
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
            )}

            {/* Removing the Project link as per your requirement */}
            {/* <Link to="/project" className="nav-link">Project</Link> */}

            <div className="navbar-items">
                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="login-btn">Log in</Link>
                        <Link to="/signup" className="signup-btn">Sign up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;


