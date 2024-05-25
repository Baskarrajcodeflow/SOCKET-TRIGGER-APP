import './App.css';
import { io } from 'socket.io-client';

//Backend HTTP URL Connection
const socket = io('http://localhost:3002');

function App() {
  const sendAlert = () => {
    console.log(true);
    socket.emit('alertMessage', 'Alert Message with Audio');
  };

  return (
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',margin:'20%'}}>
      <button style={{
     background: 'black',
     border:'solid 2px black',
     padding: '.375em 1.125em',
     fontSize: '1rem',
     color:'white',
     cursor:'pointer'
    }} onClick={sendAlert}>Button for Alert</button>
    </div>
  );
}
export default App;
