import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



export const Context = createContext();

export const DataProvider = ({children})=>{
    const [user, setUser] = useState(null);
    
    useEffect (()=>{
        const userStorage = localStorage.getItem("CURRENT_USER");
        setUser (userStorage);
    },[]);

    return(
        <Context.Provider value ={{user, setUser}}>{children}</Context.Provider>
    )

}

