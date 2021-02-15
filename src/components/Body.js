import Botao from './Botao';
import ThemeContext from "../contexts/ThemeContext";

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
            </article>
        )}
        </ThemeContext.Consumer>
    );
}