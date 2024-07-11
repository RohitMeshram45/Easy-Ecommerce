import { useState, useContext, useEffect, createContext } from "react";

// This is use of Context Api 

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }
        // eslint-disable-next-line
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )

}

// custom hooks
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }