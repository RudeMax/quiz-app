import { LOGIN_USER, LOGOUT_USER } from "./Types";

const initState = {
  isLoggedIn: false,
  currentUser: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("user", action.payload);
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
