/* TESTO ESERCIZIO:
MILESTONE 1
Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API 
e stampiamoli in console.

MILESTONE 2

Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:

nome
anno nascita
nazionalità
biografia
immagine
riconoscimenti

MILESTONE 3

Mostriamo in pagina
 una card per ciascun attore, con grafica a piacimento! */



import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [characters, setCharacters] = useState([]);
  const [actors, setActors] = useState([]);

  function fetchData() {
    console.log('Fetch the data');
    axios.get('https://lanciweb.github.io/demo/api/actresses/')
      .then(res => {
        console.log(res.data);
        setCharacters(res.data)

      })
      .catch(err => {
        console.error(err.message)
      })

  }

  function fetchActors() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(res => {
        console.log(res.data);
        setActors(res.data);
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  useEffect(() => { fetchData(); fetchActors(); }, []);

  return (
    <>
      <header>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1><strong>Attrici&Attori</strong></h1>
          </div>

          {/*<button className="btn btn-dark" onClick={fetchData}>Click</button>*/}
        </div>
      </header>
      <main>
        <section className="actresses mt-5 mb-5">
          <div className="container">
            <div className="row g-5 align-items-stretch">
              {characters.map((character, i) =>
                <div className="col-12 col-sm-6 col-md-4" key={character.id}>
                  <div className="card h-100 d-flex flex-column">
                    <img className="card-img-top img-fluid" src={character.image} alt="" />
                    <div className="card-body">
                      <h3>{character.name}</h3>
                      <h5>{character.birth_year}</h5>
                      <h5>{character.nationality}</h5>
                      <h5>{character.biography}</h5>
                      <h5 className="awards text-warning">{character.awards}</h5>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section id="actors">
          <div className="container">
            <div className="row g-5 align-items-stretch">
              {actors.map((actors, i) =>
                <div className="col-12 col-sm-6 col-md-4" key={actors.id}>
                  <div className="card h-100 d-flex flex-column">
                    <img className="card-img-top img-fluid" src={actors.image} alt="" />
                    <div className="card-body">
                      <h3>{actors.name}</h3>
                      <h5>{actors.birth_year}</h5>
                      <h5>{actors.nationality}</h5>
                      <h5>{actors.biography}</h5>
                      <h5 className="awards text-warning">{actors.awards}</h5>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
