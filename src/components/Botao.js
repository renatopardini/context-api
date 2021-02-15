import { useContext } from 'react'

import UserContext from "../contexts/UserContext"
import ThemeContext from "../contexts/ThemeContext"

export default () => {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    return (
        <button>{user.name} - {theme}</button>
    )
};