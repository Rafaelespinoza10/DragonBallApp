import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { types } from "./types";
import { AuthContext } from "./AuthContext";

const init = () =>{
    const user = JSON.parse( localStorage.getItem('user'));

    return{
        logged: !!user, 
        user, 
    }
}

const generateId = () =>  Math.random().toString(32).substring(2) + Date.now().toString(32);

export const AuthProvider = ( { children } ) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);
    
    const loginUser = (name ='', password ='')=>{
        const user ={id: generateId(), name, password};
        const action ={
            type: types.login, payload: user, 
        };

        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () =>{
        localStorage.removeItem('user');
        const action ={
            type: types.logout,
        }
        dispatch(action);
    }
    
    return (
        <AuthContext.Provider value={
            {
                ...state,
                login: loginUser,
                logout, 
            }
        }>
            {children}
        </AuthContext.Provider>
)
}
