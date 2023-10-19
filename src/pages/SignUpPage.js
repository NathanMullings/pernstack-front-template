import React from 'react';
import '../App.css'

import { useDispatch,  useSelector } from 'react-redux';
import { signupUser } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleSubmit = (e) => {
   
      e.preventDefault();
      
      const credentials = {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
      };
      dispatch(signupUser(credentials));
      console.log(credentials)
      
   
      
  };

  React.useEffect(() => {
    if (isAuthenticated) {
        navigate('/dashboard');
    }
}, [isAuthenticated, navigate]);

  return (
    <div className="signup-container">
        <div className="logo">
            <span>M</span>
        </div>
        <h2>Sign up for Nathanote</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
            <input type='username' name='username' placeholder='Username' />
            <input type="email" name='email' placeholder="Email address" />
            <input type="password" name='password' placeholder="Password" />
            <button type="submit">Sign up</button>
            
            <p>Already have an account?  Login</p>
        </form>
    </div>
);
};

export default SignUpPage;
