import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

let [bikes,setBikes] = useState([]);

  let  getBikesFromServer = async ()=>{
    let reqOptions = {
      method:"GET"
    };

    let JSONData = await fetch("http://localhost:2621/getzx6Rs",reqOptions);

    let JSOData = await JSONData.json();

    setBikes(JSOData);

    console.log(JSOData);
  }

  return (
    <div className="App">
      <button onClick={()=>{
        getBikesFromServer();
      }}>Get Bikes</button>
      {bikes.map((ele,i)=>{
        return (
        <div key={i}>
          <h2>{ele.name} {ele.model}</h2>
          <h2>{ele.price}</h2>
          <h2>{ele.type}</h2>
          <h2>{ele.displacement}</h2>
        </div>
        );
        

      })}
    </div>
  );
}

export default App;
