import axios from 'axios'

export const signupUser = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, credentials);
            
            
            // Assuming your server returns a response with a user object and a JWT token.
            const { username, email, userId, token } = response.data;
            console.log(response.data)

            // Store the JWT token in the browser's local storage so the user remains logged in.
            localStorage.setItem('token', token);

            // Dispatching the successful signup action with the user details.
            dispatch({ type: 'SIGNUP_SUCCESS', payload: {username, email, userId} });

            
        } catch (error) {
            // Handle the error. Dispatch a failure action, show a message, etc.
            console.error("Error signing up:", error);
            dispatch({ type: 'SIGNUP_FAILURE', payload: error.response?.data || {} });
        }
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT' });
    };
};

export const fetchUserDetails = () => async dispatch => {
   
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      dispatch({
        type: "FETCH_USER_DETAILS_SUCCESS",
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: "FETCH_USER_DETAILS_FAILURE",
        payload: error
      });
    }
  };

  // actions/authActions.j

export const loginUser = (credentials) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, credentials);
            
            const { username, email, userId, token } = response.data;

            // Store the JWT token in the browser's local storage so the user remains logged in.
            localStorage.setItem('token', token);

            dispatch({ type: 'LOGIN_SUCCESS', payload: { username, email, userId } });

        } catch (error) {
            console.error("Error logging in:", error);
            dispatch({ type: 'LOGIN_FAILURE', payload: error.response?.data || {} });
        }
    };
};

 
