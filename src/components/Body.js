import Botao from './Botao';
import ThemeContext from "../contexts/ThemeContext";
import Contagem from './Contagem';

export default (props) => {
    const handleButton = () => {
        props.setUsername('Paulo');
    }

    return (
        <ThemeContext.Consumer>
        {value => (
            <article className={`box theme-${value}`}>
                <Botao />

                <button onClick={handleButton}>Trocar para Paulo</button>

                <hr />

                <Contagem/>
            </article>
        )}
        </ThemeContext.Consumer>
    );
}