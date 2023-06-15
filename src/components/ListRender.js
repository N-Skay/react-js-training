function ListRender({itens}){
    return(
        <>
        <h3>Lista de Itens</h3>

        {
        itens.lenght > 0 ?
        (itens.map(
            (item, index) => (
                <p key={index}>{item}</p>
            )))
        : (
            <p>Não há itens na lista</p>
        )
        }

        </>
    )
}

export default ListRender