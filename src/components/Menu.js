import Botao from './Botao';
import { useStateContext } from "../contexts/StateContext";

export default () =>{
    const [state, dispatch] = useStateContext()
    return (
        <aside className={`box theme-${state.theme}`}>
            <Botao />
        </aside>
    )
};