
//koden er fra https://github.com/Kanin60/Det-utrolige-teater/blob/main/src/context/UserContext.jsx

import { createContext, useState } from 'react';

export const UserContext = createContext();

//Her gemmes user fra login 
export const UserContextProvider = (props) => {
    const [userData, setUserData] = useState();

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {props.children}
        </UserContext.Provider>
    );
}

