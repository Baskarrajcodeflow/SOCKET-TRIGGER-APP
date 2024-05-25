import './App.css';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import alertTone from '../src/Assets/mixkit-positive-notification-951.mp3';
import img from '../src/Assets/pie-chart-1569175.jpg'
const socket = io('http://localhost:3002');

function App() {
  useEffect(() => {
    socket.on('alertMessage', (alertMessage) => {
      if(alertMessage){
        alert(alertMessage)
        const playAudio = new Audio(alertTone);
        playAudio.play().catch(error => {
          // console.error("Error", error);
        });
      }else{
        alert('Error')
      }
    });
  }, []);

  return (
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <img src={img} style={{width:'50%',height:'50%',margin:'4%',}}></img>
    </div>
  );
}

export default App;
