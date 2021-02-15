import { createContext } from "react"

export const StateContext = createContext()

const StateProvider = ({ children, value }) => (
    <StateContext.Provider value={value}>
        {children}
    </StateContext.Provider>
)

