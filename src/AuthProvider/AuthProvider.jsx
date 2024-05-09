import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = { createAccount }

    return (
        <AuthContext.Provider value={AuthInfo}>

        </AuthContext.Provider>
    )
};

export default AuthProvider;