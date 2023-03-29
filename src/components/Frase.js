import styles from './Frase.module.css';

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Componente Frase!</p>
            <h5>Este componente possui uma frase!</h5>
        </div>
    )
}

export default Frase