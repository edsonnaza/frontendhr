import { LOGIN, LOGOUT } from "./actions-types";
const initialState = {
  user: {},
  
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
       user: [payload],
     
      };

    case LOGOUT:
      return {user: null};
 
    default:
      return { ...state };
  }
};

export default rootReducer;
