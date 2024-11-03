import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(15);
  const minCount = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{'--logo-speed': count + 's'}} className="App-logo" alt="logo" />
        <div className="card">
          <div>
            Counter: {count}
          </div>
          <div className='Button-container'>
            <button className='App-button' onClick={() => setCount((count) => count + 1)}>Increament ++</button>
            <button className='App-button' onClick={() => setCount((count) => count = minCount)}>Reset</button>
            <button className='App-button' onClick={() => setCount((count) => (count > minCount ? count - 1 : minCount))} disabled={count === minCount}>Decreament --</button>
          </div>
          <div className='infoText'>
            We are using the calculated value to increase/decrease the speed of our logo rotation. So, the minimum number of our counter is 1.
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
