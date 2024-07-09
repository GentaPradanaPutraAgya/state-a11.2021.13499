import React, { useState } from 'react';
import './App.css';

const jsonData = [
  { id: 1, name: 'Genta Pradana Putra Agya' },
  { id: 1, name: 'A11.2021.13499' },
];

function App() {
  return (
    <div>
      <div className="App">
      <h1>TUGAS REACT JS</h1>
      {jsonData.map(item => (
        <p>{item.name}</p>
      ))
      }
    </div>

    <div className="App container">
          <h1 className="text-danger">BootStrap</h1>
            <button className="btn btn-primary">Submit</button>
        </div>

        <div>
          <h1>Konsep State</h1>
          <Statusstate />
        </div>
      </div>
    
    );
}

function Statusstate(){
  const [isOnline, setIsOnline] = useState(true);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };
  return(
    <div>
      <p>Status aplikasi saat ini: {isOnline ? 'Online' : 'Offline'}</p>
      <button onClick={toggleStatus}>Ganti Status</button>
    </div>
  )
}
export default App;

