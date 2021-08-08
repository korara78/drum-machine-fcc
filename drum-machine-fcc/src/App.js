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
   //This componentDidMount() method is called after the component gets mounted on the DOM hence "did". Note: the render method is called before this executes//
  componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    });
  }
  
  playSound = () => {
    this.audio.current.play();
    
    const id = this.audio.current.id;
    
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is in Effect`;
  }
  
  render() {
    const { text, audio } = this.props;
    
    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    )
  }
}
    
document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is in Effect`;
    audio.play();
  }
});

//Deprecated ReactDOM.render(...) from App.js file as per https://stackoverflow.com/questions/67962823/why-does-react-app-appear-twice-on-webpage/67962871#67962871
//Calling render twice will cause two versions of app to appear. 
//ReactDOM.render(<App />, document.getElementById('drum-machine'));

export default App
