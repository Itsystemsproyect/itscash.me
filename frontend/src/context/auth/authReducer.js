import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  USER_LOADED_VERIFIED,
  USER_LOADED_ADMIN,
  LIST_USERS,
} from "../types";

// eslint-disable-next-line

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOADED_VERIFIED:
      return {
        ...state,
        isVerified: true,
        isAdmin: false,
        isAuthenticated: true,        
        loading: false,
        user: action.payload,
      }
    case  USER_LOADED_ADMIN:
      return {
        ...state,
        isVerified: true,
        isAdmin: true,
        isAuthenticated: true,        
        loading: false,
        user: action.payload,
      }
    case USER_LOADED:
      return {
        ...state,
        isVerified: false,
        isAuthenticated: true,
        isAdmin: false,        
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LIST_USERS:
      return {
        ...state,
        users: action.payload
      };   
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
