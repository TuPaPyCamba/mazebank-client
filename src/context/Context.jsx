import React, { createContext, useContext, useState } from 'react';

const MazeContext = createContext();

export const MazeContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    return (
        <MazeContext.Provider value={{ token, setToken }}>
            {children}
        </MazeContext.Provider>
    );
};

export const useMazeContext = () => {
    return useContext(MazeContext);
}