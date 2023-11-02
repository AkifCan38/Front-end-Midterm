import React, {useState} from "react";
import "./styles.css"
import Header from "./components/header";


function App() {

  const [minVal , setMinVal] = useState(0);
  const [maxVal , setMaxVal] = useState(10);
  const [randomNum , setRandomNum] = useState(5);
  const giveRandomNumber=()=>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal +1)+minVal))}
  

  return (
    
    <div className="hero">
      <Header/>
      <div className = "container">
      <div className = "randomNum">
      <p>Random Number : <span>{randomNum}</span></p>
        </div>
        <div className = "numContainer">
        <div>
          <p>Min:</p>
          <input
          type = "number"
          value = {minVal}
          onChange = {e => setMinVal(+e.target.value)}
          />
        </div>
        <div>
          <p>Max:</p>
          <input
          type = "number"
          value = {maxVal}
          onChange = {e => setMaxVal(+e.target.value)}
          />
          
        </div>
        </div>
        
        <button onClick={giveRandomNumber}>Get Random Number</button>
        
        <a
          className="App-link"
          href="https://github.com/AkifCan38/Front-end-Midterm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!!!!!!
        </a>
      </div>
    </div>
  );
}

export default App;
