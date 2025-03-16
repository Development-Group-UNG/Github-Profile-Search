import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    // const [userFollowing, setUserFollowing] = useState([]);
    // const [userFollowers, setUserFollowers] = useState([]);

    return (
        <context.Provider value={{
            userData,
            userRepos,
            // userFollowing,
            // userFollowers,
            setUserData,
            setUserRepos,
            // setUserFollowing,
            // setUserFollowers
        }}>
            {props.children}
        </context.Provider>
    );
}