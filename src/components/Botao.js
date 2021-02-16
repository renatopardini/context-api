// import { useContext } from 'react'

import { useStateContext } from "../contexts/StateContext"
// import UserContext from "../contexts/UserContext"
// import ThemeContext from "../contexts/ThemeContext"

export default () => {
    const [state, dispatch] = useStateContext()
    // const user = useContext(UserContext)
    // const theme = useContext(ThemeContext)
    return (
        <button>{state.user.name} - {state.theme}</button>
    )
};