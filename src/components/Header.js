import Botao from './Botao';
import { useStateContext } from "../contexts/StateContext";

export default () => {
    const [state, dispatch] = useStateContext()

    return (
        <header className="box">
            <header className={`box theme-${state.theme}`}>
                <button onClick={() => dispatch({type: 'setTheme', theme: 'light'})}>Light</button>
                <button onClick={() => dispatch({type: 'setTheme', theme: 'dark'})}>Dark</button>
                <Botao />
            </header>
        </header>
    )
};