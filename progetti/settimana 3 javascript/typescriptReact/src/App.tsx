import { ButtonHTMLAttributes, DetailedHTMLProps, FormEventHandler, useEffect, useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

const appLogic = () => {
  /*
    1. Prender il nome attualmente inserito;
    2. Aggiungerlo alla lista di "names";
    3. Resettare il nome nella input;
  */

  // le operazioni set in react sono asyncrone quindi i  nuovi valori non li vederemo all'interazione corrente ma alla prossima , guarda ad esmepio il console.log di nams 
  const [count, setCount] = useState(0)  // [ valore variabile , funzione che esegue ]
  const [name, setName] = useState('')
  const [names, setNames] = useState<string[]>([]);
  const [facts, setFacts] = useState<[]>([]);
  const [headMenu, setheadMenu] = useState<string[]>(['home', 'contatti', 'chi siamo', 'mappa']);
  const uniqueId = useId(); // ritorna un id univoco randomico per il componente 

  const [beer, setBeers] = useState<[]>([]);
  const [count2, setCount2] = useState(0    )  // [ valore variabile , funzione che esegue ]


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


  const sumCount = function (numberToAdd: number) {
    return () => setCount((count) => count + numberToAdd)
  }

  const sumCount2 = function (numberToAdd: number) {
    return () => setCount2((count2) => count2 + numberToAdd)
  }
  return { beer, facts, count, count2, name, names, headMenu, inputHandler, addName, ResetNames, setCount, setCount2, sumCount, sumCount2, setFacts, setBeers };
}

function Greeting({ name }: { name: string }) {
  {
    if (name) {
      return <p> <h1 > Hi {name}</h1> <hr /></p>
    }
    return null
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

function FormNames() {
  const { name, names, inputHandler, addName, ResetNames } = appLogic();
  return (<div style={{ marginTop: '40px' }}>
    <JsxPagetag />
    <Greeting name={name} />
    <form onSubmit={addName}>
      <input type="text" value={name} onInput={inputHandler} autoFocus />
      <button type="submit" disabled={!(name.trim().length > 0)}> Salva nome </button>
      <button type="reset" onClick={ResetNames} disabled={!(names.length > 0)}> Reset nomi </button>
    </form>
    <NameList names={names} />
  </div>)
}



function App() {
  const { beer, facts, count, count2, name, names, headMenu, inputHandler, addName, ResetNames, setCount, setCount2, sumCount,sumCount2, setFacts, setBeers } = appLogic();

  // react nel return puo ritornare al massimo solo 1 nodo html 

  // useEffect serve ad eseguire operazione al cambiare di detirminate dipendenze
  // useEffect() //hooks  
  // useEffect : richiede come primo elemento la funzione e come seonco l'array delle dipendeze , 
  // la funzione viene eseguita ogni volta che cambia la dipendeza 
  useEffect(() => {
    const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=";
    // fetch(url + count )
    // .then(res => res.json())
    // .then(json => setFacts(json))

    // con async e await 
    (async function fetchUrl() {
      await fetch(url + count).then(res => res.json()).then(json => setFacts(json))
    })()
  }, [count]);

  useEffect(() => {
    const url = "https://api.punkapi.com/v2/beers?page=";
    const UrlElementForPage = "&per_page=4";
    fetch(url + count2 + UrlElementForPage)
      .then(res => res.json())
      .then(json => setBeers(json))

  }, [count2]);
  return (
    <div>
      <Header items={headMenu}> header children </Header>
      <main> Sono il main </main>
      {/* <FormNames></FormNames> */}

      <main>
        <div>
          <h1> Cats Facts </h1>
          <button className='btn btn-secondary' onClick={sumCount(-1)}>-</button>
          <button className='d-inline-block mx-4'> {count}</button>
          <button className='btn btn-secondary' onClick={sumCount(+1)}>+</button>
          <div> {Array.isArray(facts) ? facts.map((fact: any, index: number) => <div key={fact._id}>{index + 1} - {fact.text}  </div>) : null}</div>
        </div>
        <hr />
        <div>
          <h1> Beers </h1>
          <button className='btn btn-secondary' onClick={sumCount2(-1)}>-</button>
          <button className='d-inline-block mx-4'> {count2}</button>
          <button className='btn btn-secondary' onClick={sumCount2(+1)}>+</button>
          <div> {Array.isArray(beer) ? beer.map((beer: any, index: number) => <div key={beer.id}>{index + 1} - {beer.name}  - {beer.description } </div>) : null}</div>
        </div>

      </main>



      <Footer> footer children by salvo &copy; &egrave; &grave;</Footer>
    </div>

  )
}

// 1) creare un layput con header e footer come layout 
// 2) nell'header deve mostrare un  menu con gli elementi passati da app 
// 3) nel footer mostrare i credits , non richiedere props 

export default App