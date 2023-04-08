//MARK: Custom Resuable Hook

import React, { useReducer } from "react";

//Reusable Context/Provider
export default (reducer, actions, initialState) =>
{
    //Context
    const Context = React.createContext();

    //Provider
    const Provider = ({ children }) =>
    {
        const [state, dispatch] = useReducer(reducer, initialState);
        
        //Actions = {add_blog: (dispatch)=>{return()=>{}}}
        const boundActions = {};

        //Getting actions and looping through each action
        for (let key in actions)
        {
            //key === add_blog, actions === (dispatch)=>{()=>{}}
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };


    return { Context, Provider }; //Returns Object
};
