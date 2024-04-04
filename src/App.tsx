import { useState } from 'react';
import './App.css';
import Counters from './components/Counters';

function App() {
  const [text, setText] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [startId, setStartId] = useState(0);

  function start() {
    const newNumebrs = text
      .split(',')
      .map(it => parseInt(it.trim()))
      .filter(it => it > 0);

    setNumbers(newNumebrs);
    setStartId(startId + 1);
  }


  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={start}>Start</button>
      </div>
      <Counters numbers={numbers} startId={startId} />
    </div>
  );
}

export default App;

