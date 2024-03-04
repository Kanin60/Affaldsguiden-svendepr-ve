
    //koden kommer fra https://github.com/Kanin60/Hotel_Overlook/blob/main/src/context/UserContext.jsx

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

