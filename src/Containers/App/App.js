import React,{useState} from 'react';
import styles from './App.module.css';
import Task from '../../Components/Task/Task'


function App() {


//States 

const [tache,setTache] = useState([
  
])

const [input,setInput] = useState('')

//Méthode

const cocheClicHandler = (index) => {
  
  const nouvelleTache = [...tache];
  nouvelleTache[index].coche = !(nouvelleTache[index].coche);
  setTache(nouvelleTache);

}

const supprimerTacheHandler = (index) => {
  
  console.log('test');
  const nouvelleTache = [...tache];
  nouvelleTache.splice(index,1);
  setTache(nouvelleTache);
}

const recupererValeur = (e) => {
  setInput(e.target.value);
}

const formulaireTeRaffraichitPasStp = (e) =>{
  e.preventDefault();
  const ajoutTache = {contenu:input ,coche:false}
  setTache([...tache,ajoutTache]);
  setInput('');
}

//Variable 

let boucleTache = tache.map ((t,index) =>{
  
  return(
  <Task
    key={index}
    tache={t.contenu}
    etatCoche={t.coche}
    cocheClicHandler={() => cocheClicHandler(index)}
    supprimerCaseHandler={() => supprimerTacheHandler(index)}
    
  />
  )
})

 
  return (
    <div className={styles.App}>
      <header>
        <span>TO-DO</span>
      </header>

      <div className={styles.add}>
        <form onSubmit={formulaireTeRaffraichitPasStp}>
          <input value={input} onChange={(e) => recupererValeur(e)} type="text" placeholder="Que souhaitez-vous ajouter ?" />
          <button type="submit">
            Ajouter
          </button>
        </form>
      </div>

    {boucleTache}
     
    </div>
  );
}

export default App;
