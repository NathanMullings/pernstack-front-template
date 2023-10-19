import React from 'react';
import '../App.css'

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      const credentials = {
          email: e.target.email.value,
          password: e.target.password.value
      };
      dispatch(loginUser(credentials));
  };

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  React.useEffect(() => {
    if (isAuthenticated) {
        navigate('/dashboard');
    }
}, [isAuthenticated, navigate]);
    return (
        <div className="login-container">
            <div className="logo">
                <span>M</span>
            </div>
            <h2>Log in to Nathanote</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email address" />
                <input type="password" name="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button type="submit">Log in</button>
                
                <p>Don't have an account? <a href="#">Sign up now</a></p>
            </form>
        </div>
    );
}

export default LoginPage;

