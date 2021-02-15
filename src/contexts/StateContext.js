import { createContext, useContext, useReducer } from "react"

// usado para setar as informacoes
const initialState = {
    theme: 'light',
    user: {
        name: 'Renato',
        email: 'renatopardini@hotmail.com'
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'setTheme': 
            return { ...state, theme: action.theme }
        break;

        case 'setName': 
            let user = { ...state.user }
            user.name = action.name

            return { ...state, user }
        break;

        case 'setEmail':
            let user = { ...state.user }
            user.email = action.email

            return { ...state, user } 
        break;
    }

    return state
}

export const StateContext = createContext()

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateContext = () => useContext(StateContext) 



