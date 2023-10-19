const initialState = {
    isAuthenticated: false,
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
            case 'FETCH_USER_DETAILS_SUCCESS':
                return {
                  ...state,
                  isAuthenticated: true,
                  user: action.payload
                };
        case 'LOGOUT':
        case 'SIGNUP_FAILURE':
        case 'FETCH_USER_DETAILS_FAILURE':
        case 'LOGIN_FAILURE':
            console.log('signupfailure')
            localStorage.removeItem('token');

            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
};

export default authReducer;
