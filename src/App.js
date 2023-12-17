import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  function playSound(selector) {
    const audio = document.getElementById(selector)
    setPressedKey(selector);
    audio.play();
  }
  useEffect( ()=>{
    document.addEventListener("keydown", (event)=>{
        playSound(event.key.toUpperCase());
    })
  }, []);
  const[pressedKey, setPressedKey] = useState();
  return (
    <div className="App">
      <h1 id="heading">DRUM MACHINE</h1>
    <div id="drum-machine">
      <div id="display"> <h1>{pressedKey}</h1>
      </div>
      <div id= "container">
      {drumPads.map(
        (drumPad, index)  => (
          <button className="drum-pad" id={index}
          onClick = { ()=> {
            playSound(drumPad.text)
          } }
          >
            {drumPad.text}
            <audio className= "clip" 
            id = {drumPad.text} 
            src = {drumPad.src}>
            </audio>
          </button>
        ))}
        </div>
    
    </div>
    </div>
  );
}

export default App;
