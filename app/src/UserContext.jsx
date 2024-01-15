import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export default function UserContextProvider ({children}) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        if(!user) {
            const data = localStorage.getItem('currentUser')
            setUser(data)
        }
    },[user])

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}