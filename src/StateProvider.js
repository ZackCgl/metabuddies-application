import React, { createContext, useContext, useReducer} from 'react';

//bereid de datalaag voor
export const StateContext = createContext();

//Wrap onze app en provide de data
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);

export const useStateValue = () => useContext(StateContext);