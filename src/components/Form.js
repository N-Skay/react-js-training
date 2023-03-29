function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        console.log("Cadastro realizado")
    }


    return(
        <div>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUser}>
                <div><input type="text" placeholder="Digite seu nome:"/></div>
                <div><input type="submit" value="Cadastrar"/></div>
            </form>
        </div>

    )
}

export default Form