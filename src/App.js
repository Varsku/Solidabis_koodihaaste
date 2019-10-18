import React from 'react';
import { useFetch } from './hooks'
import './App.css';
import { decryptCaesar } from './decryptCaesar'

function App() {
    const [data, loading] = useFetch('https://koodihaaste-api.solidabis.com/bullshit'); 
  return (
    <div className="App">
      {loading ? (
        "Loading...."
      ) : (
      <div className="container">
        <div className="BullshitTexts">
          <h1>Bullshit</h1>
          <ul>
            {data.bullshits.map((bullshit, i) => (
              <li key={i}>
                <p> {i}. {bullshit.message}</p>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="NoBullShitTexts">
          <h1>No Bullshit</h1>
          <ul>
            {data.bullshits.map((bullshit, i) => (
              <li key={i}>
                <p>{i}. {decryptCaesar(bullshit.message)}</p>
              </li>
            ))
        }
          </ul>
      </div>
    </div>
      )
    } 
  </div>
  );
}

export default App;
