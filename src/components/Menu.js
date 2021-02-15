import Botao from './Botao';
import ThemeContext from "../contexts/ThemeContext";

export default () =>(
    <ThemeContext.Consumer>
    {value => (
        <aside className={`box theme-${value}`}>
            <Botao />
        </aside>
    )}
    </ThemeContext.Consumer>
);