import { useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContextJs";
import { types } from "../types/types";

const initialState = {
    logged : false,
}

export const AuthProvider = ({ children }) => {
  
  const [ authState, dispatch ] = useReducer( AuthReducer, initialState );

  const login = ( name = '' ) => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }
    dispatch(action);
  }

    return (
    <AuthContext.Provider value={ {
      ...authState,
      login : login
    }}>
         { children }
    </AuthContext.Provider>
  )
}
