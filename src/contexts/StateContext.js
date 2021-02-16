import { createContext, useContext, useReducer, useEffect } from "react"

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
            let newUserName = { ...state.user }
            newUserName.name = action.name

            return { ...state, user: newUserName }
        break;

        case 'setEmail':
            let newUserEmail = { ...state.user }
            newUserEmail.email = action.email

            return { ...state, user: newUserEmail } 
        break;
    }

    return state
}

export const StateContext = createContext()

const localState = JSON.parse( localStorage.getItem('ctx') )

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, localState || initialState)

    useEffect(() => {
        localStorage.setItem('ctx', JSON.stringify(state))
    }, [state])

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext) 



