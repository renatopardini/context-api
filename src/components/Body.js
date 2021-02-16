import Botao from './Botao';
import { useStateContext } from "../contexts/StateContext";
import Contagem from './Contagem';

export default () => {
    const [state, dispatch] = useStateContext()

    const handleButton = () => {
        dispatch({
            type: 'setName',
            name: 'Paulo'
        })
    }

    return (
        <article className={`box theme-${state.theme}`}>
            <Botao />

            <button onClick={handleButton}>Trocar para Paulo</button>

            <hr />

            <Contagem/>
        </article>
    );
}