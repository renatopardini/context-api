import Botao from './Botao';
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from 'react';

export default () => {
    const theme = useContext(ThemeContext)

    return (
        <header className="box">
            <header className={`box theme-${theme}`}>
                <Botao />
            </header>
        </header>
    )
};