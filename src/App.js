import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import ADVPlist from './components/ADVPlist';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional'

function App() {

  const name = 'Nicolas';
  const Newname = name.toUpperCase();
  const nome = 'Nome Dinâmico';
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

      <h5>Exemplo de props:</h5>
      <SayMyName name="Nicolas"/>
      <SayMyName name="Matheus"/>
      <SayMyName name={nome}/>

      <hr></hr>

      <Pessoa 
      nome="Nicolas" 
      idade="18" 
      profissao="Programador Front-End" 
      foto="https://via.placeholder.com/100"/>

      <hr></hr>

      <h4>Componente Frase estilizado:</h4>
      <Frase/>

      <hr></hr>

      <h4>Componente Fragmentado:</h4>
      <List/>

      <hr></hr>

      <h4>Props Avançado:</h4>
      <ADVPlist/>

      <hr></hr>

      <h4>Componente de Eventos:</h4>
      <Evento numero="1"/>

      <hr></hr>

      <h4>Componente Forms com eventos:</h4>
      <Form/>

      <hr></hr>

      <h4>Renderização Condicional</h4>
      <Condicional/>

    </div>
  );
}

export default App;
