import  Button from './eventos/Button'

function Evento({numero}){

    function meuEvento(){
        console.log(`Fui ativado! ${numero}`)
    }

    function meuEventoDois(){
        console.log(`Evento ativado!`)
    }

    function meuEventoTres(){
        console.log(`Terceiro evento ativado!`)
    }


    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
            <Button event={meuEventoDois} text="Primeiro Evento"/>
            <Button event={meuEventoTres} text="Outro Evento"/>
        </div>
    )       
}
 
export default Evento