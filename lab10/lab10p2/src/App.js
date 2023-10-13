import {useState} from 'react'
import './App.css';

function App() {
  const [university, setUniversity] = useState();
  return (
    <div className="App">
      <div>
        <h1>Forms with Names</h1>
        <div style = {{display:'flex', gap:'4px'}}>
          <input defaultValue='Manee'></input>
          <span>Study in:</span>
          <input
          defaultValue="KKU"
          value={university}
          onChange={e => setUniversity(e.target.value)}
          ></input>
        </div>
        <div style = {{display:'flex', gap:'4px'}}>
          <input defaultValue='Manee'></input>
          <span>Study in:</span>
          <input
          defaultValue="KKU"
          value={university}
          onChange={e => setUniversity(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
