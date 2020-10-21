import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DrumPad from './DrumPad';

const sounds = [
  {
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
]


 const App = () => (
  <div id="display" className="display">
    <h1>Play a sound</h1>
    {sounds.map((sound, idx) => (
      <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
    ))}
  </div>
);
export default App;


// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="Container" id="drum-machine">
//           <h1 className="text-center">Drum Machine Project</h1>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               Q
//               <audio src="./clip" className="clip btn btn-primary" id="Q"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               W
//               <audio src="./clip" className="clip btn btn-primary" id="W"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               E
//               <audio src="./clip" className="clip btn btn-primary" id="E"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               A
//               <audio src="./clip" className="clip btn btn-primary" id="A"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               S
//               <audio src="./clip" className="clip btn btn-primary" id="S"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               D
//               <audio src="./clip" className="clip btn btn-primary" id="D"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               Z
//               <audio src="./clip" className="clip btn btn-primary" id="Z"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               X
//               <audio src="./clip" className="clip btn btn-primary" id="X"></audio>
//               </button>
//             <button className="drum-pad btn btn-block btn-primary" id="drum-0">
//               C
//               <audio src="./clip" className="clip btn btn-primary" id="C"></audio>
//               </button>
            
//             <div id="display">
//           </div>
//         </div>
//       </div>
//     )
//   }
// }