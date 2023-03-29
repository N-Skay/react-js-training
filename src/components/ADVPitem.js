import PropTypes from 'prop-types';

function ADVPItem({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

ADVPItem.propTypes ={
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

ADVPItem.defaultProps ={
    marca: "Sem marca",
    ano_lancamento: 0
}

export default ADVPItem