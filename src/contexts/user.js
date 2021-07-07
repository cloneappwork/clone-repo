import { createContext, useState } from "react";

export const UserContext= createContext();
export const UserContextProvider= (props)=>{
    const [user, setUser] = useState(null);
    //const [name, setName] = useState(null);

    return (
        <UserContext.Provider value={{user: [user, setUser] }}>
            {props.children}
        </UserContext.Provider>
    )
};