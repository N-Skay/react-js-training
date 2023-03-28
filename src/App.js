import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Nicolas';
  const Newname = name.toUpperCase();
  const url = 'https://via.placeholder.com/150'
  
  function sum(x,y){
    return x+y
  }



  return (
    <div className="App">

      <h4>Uso de tag's HTML simples com JSX:</h4>
      <h1>React JS</h1>
      <p>Primeira Aplicação</p>

      <hr></hr>

      <h4>Interpolação:</h4>
      <p>Variáveis sempre são inseridas dentro da função do componente, mas fora do 'return'.</p>
      <h5>Olá, {name}</h5>
      <p>Acima, um exemplo de interpolação com uma variável const.</p>
      <h5>Seu nome usando o toUpperCase: {Newname}</h5>
      <p>Interpolação também aceita operações como 2 + 2: {2 + 2}</p>

      <hr></hr>

      <h4>Exemplo de FUNÇÃO de soma:</h4>
      <p>Soma: {sum(1,2)}</p>
      <p>As funções novas vão abaixo das variáveis, mas nunca dentro do 'return'.</p>

      <hr></hr>

      <h4>Até mesmo inserção de imagens funcionam com a interpolação:</h4>
      <img src={url} alt='Interpolando imagem.'/>

      <hr></hr>

      <p>Assim são chamados outros componentes:</p>
      <HelloWorld/>

      <hr></hr>

      
    </div>
  );
}

export default App;
