import { useState } from "react"

function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`)
        console.log("Cadastro realizado")
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()


    return(
        <div>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUser}>
                <div><input type="text" placeholder="Digite seu nome:"
                onChange={(e) => setName(e.target.value)}
                /></div>

                <div><input type="password" placeholder="Digite sua senha:"
                onChange={(e) => setPassword(e.target.value)}
                /></div>
                <div><input type="submit" value="Cadastrar"/></div>
            </form>
        </div>

    )
}

export default Form