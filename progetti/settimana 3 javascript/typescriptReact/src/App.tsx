import { ButtonHTMLAttributes, DetailedHTMLProps, FormEventHandler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const appLogic = () => {
  /*
    1. Prender il nome attualmente inserito;
    2. Aggiungerlo alla lista di "names";
    3. Resettare il nome nella input;
  */

  // le operazioni set in rect sono asyncrone quindi i  nuovi valori non li vederemo all'interazione corrente ma alla prossima , guarda ad esmepio il console.log di nams 
  const [count, setCount] = useState(0)  // [ valore variabile , funzione che esegue ]
  const [name, setName] = useState('')
  const [names, setNames] = useState<string[]>([]);

  const inputHandler: React.FormEventHandler<HTMLInputElement> = (event) => {
    const value = (event.target as HTMLInputElement).value
    console.log("ciao")
    setName(value);
    setCount(count + 1);
  }

  const addName: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log({ name })
    console.log({ names })
    setNames(() => names.concat(name.trim()));
    setName(() => '');
  }

  const ResetNames = () => {
    console.log({ names })
    setNames(() => []);
  }

  return { count, name, names, inputHandler, addName, ResetNames };
}

function Greeting({name}:{name:string}){
  {
    if(name){
      return <p> <h1 > Hi {name}</h1> <hr /></p>
    }
      return  null
  }
}
function NameList(props: { names: string[] },) {
  console.log(props);
  return (<ul>{props.names.map((name, index) => (<NameItem name={name} key={name + index} />))}</ul>)
}

// tutti i parametri sono oggetti , 
function NameItem(props: { name: string }, index: number) {
  return (<li >{props.name}</li>)
}


function JsxPagetag() {
  const { count, name, names, inputHandler, addName, ResetNames } = appLogic();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={inputHandler}> */}
        {/* count is {count} */}
        {/* {} : e un modo per stampare un valore dinamico */}
        {/* </button> */}
       
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <ul>
        {/* quando abbiamo una fuzione map dobbiamo usare il parametro key{} nel dom per differenziale gli elementi 
        e consigliabile non usare gli index nella key ma un valore composto che sia univico ad esempio name+index , 
        perche react andando a fare il controllo solo sulle chiavi ad esempio se abbiamo un array con 2 elementi ,
        [0:"marina",1:"marco"] , se scambiamo i valori marco e marino e in : [0:"marco",1:"marina"]  e cancelliamo marina indice 1 , 
        react usera l'indece in memoria andrando a mostrare solo marino come risultato finale invece di marco */}

        {/* i componenti sono dei jsx */}
        {/* {names.map((name,index) => (<NameItem key={name+index}>{name}</NameItem>))} */}
        <NameList names={names} />
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

function App() {
  const { name, names, inputHandler, addName, ResetNames } = appLogic();
  return (
    <div style={{ marginTop: '40px' }}>
      <JsxPagetag />
      <Greeting name={name} />
          <form onSubmit={addName}>
            <input type="text" value={name} onInput={inputHandler} autoFocus />
            <button type="submit" disabled={!(name.trim().length > 0)}> Salva nome </button>
            <button type="reset" onClick={ResetNames} disabled={!(names.length > 0)}> Reset nomi </button>
          </form>
           <NameList names={names} />
        </div>
  )
}

export default App