//Have All the context information 
//Provides all the supllies

import React, {createContext , useContext , useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer , initialState , children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);

/*// YourReducer.js
export const initialState = {
    // Your initial state properties here
};

export const reducer = (state, action) => {
    // Define how the state should change based on the action
    switch (action.type) {
        case 'UPDATE_SOMETHING':
            return {
                ...state,
                // Update something in the state
            };
        // More cases as needed
        default:
            return state;
    }
};

// App.js
import React from 'react';
import { StateProvider, useStateValue } from './YourContextFile';
import { initialState, reducer } from './YourReducer';

const App = () => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <YourComponentTree />
        </StateProvider>
    );
};

// YourComponent.js
import React from 'react';
import { useStateValue } from './YourContextFile';

const YourComponent = () => {
    const [{ /* your state properties }, dispatch] = useStateValue();

    return (
        // Your component JSX here
    );
};
*/


