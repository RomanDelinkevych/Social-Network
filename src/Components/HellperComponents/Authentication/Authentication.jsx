import React, {createContext, useEffect, useState} from "react";
import app from "./../../../base.js"
import {creatorOrChangerLocalStorageUid, deleteLocalStorageUid,} from "../../../LocalStorage/LocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {app.auth().onAuthStateChanged(setCurrentUser);}, []);

    if (currentUser === null) deleteLocalStorageUid()
    else creatorOrChangerLocalStorageUid(currentUser)

    return (
        <AuthContext.Provider
        value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}