import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const clips = [
  {
    key: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

//Apply the map method to const "clips" and assign its properties to become sound and index arguments
const App = () => (
  <div id="display" className="display">
    <h1>Drum Machinery</h1>
    {clips.map((sound, index) => (
      <DrumPad text={sound.key} key={index} audio={sound.url} />
    ))}
  </div>
);

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    
    this.audio = React.createRef();
  }
  /*componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. Also note: the render method is called before this executes*/ 
  //child element <audio> listens for the 'ended' event then will set the const parent as the event.target.parentNode. 
  //the classList API is used to remove class 'active'.
  componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    });
  }
  
  //Here playsound is an anonymous function that plays current audio clip based on key clicked.
  //const "id" is defined as the current audio's id.
  //const parent is defined as the <div> wrapping the child <audio> element.
  //on parent, use the classList API to add the class 'active'.
  //backticks indicate template literals. 
  //${} is merely a placeholder to contain the javascript expression
  playSound = () => {
    this.audio.current.play();
    
    const id = this.audio.current.id;
    
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
    
  //Display the key clicked in an H1 header.
	//the querySelector() method returns the first element that matches ('h1').
	//innertext property of the HTML Element interface represents the "rendered" text content of a node and its descendants.
	//${expression} is a Template literal placeholder to insert javascript expression {id}. 
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is in Effect`;
  }
  
  render() {
    const { text, audio } = this.props;
    
  /*<div> element containing the className 'drum-pad' is the parent. When I click on a .drum-pad element, the audio clip contained in its child <audio> element should be triggered.*/
	//onClick event is linked to the playSound function.
	//advise React to associate the <audio> element ref with the 'audio' created in the constructor. 
    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    )
  }
}
  //Play key when user uses keyboard
  //event listener attached to the document, listening for when the 'keydown' event is fired as a key is pressed.
  //const "id" is defined by the event's key letter and set to uppercase.
  //const "audio" is defined as the document Element ID to locate. Here its the ID of the key pressed.  
document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  
  //if audio plays, set playback position at 0 second mark.
  //const parent defined as the parent to the <audio> element which is <div> element containing child <audio> element.
  //on parent, use the classList API to add the class 'active'.
  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');
    
   //Display the key pressed in an H1 header.
	 //const display defined as parentNode.
   //The querySelector() method returns the first element that matches ('h1').
   //innertext property of the HTML Element interface represents the "rendered" text content of a node and its descendants.
   //${expression} is a Template literal placeholder to insert javascript expression {id}.   
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is in Effect`;
    audio.play();
  }
});

//Deprecated ReactDOM.render(...) from App.js file as per https://stackoverflow.com/questions/67962823/why-does-react-app-appear-twice-on-webpage/67962871#67962871
//Calling render twice will cause two versions of app to appear. 
//ReactDOM.render(<App />, document.getElementById('drum-machine'));

export default App
