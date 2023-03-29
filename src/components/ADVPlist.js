import ADVPitem from "./ADVPitem";

function ADVPlist(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <ADVPitem marca="Ferrari" ano_lancamento={9999}/>
            <ADVPitem marca="Fiat" ano_lancamento={9999}/>
            <ADVPitem marca="Audi" ano_lancamento={9999}/>
            <ADVPitem/>
        </ul>
        </>
    )
}

export default ADVPlist