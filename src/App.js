import { useState } from 'react';

import './App.css';
import feedstocks from './feedstocks';


function Feedstock() {
  const [selectedFeedstock, setSelectedFeedstock] = useState('bedded-diary');

  return (
    <div className='feedstock'>
      <select value={selectedFeedstock} onChange={e => setSelectedFeedstock(e.target.value)}>
        {feedstocks.map((feedstock, index) => (
          <option key={index} value={feedstock.slug}>
            {feedstock.label}
          </option>
        ))}
      </select>
      <div className='weight-field-container'>
        <label for='weight'>Weight (lbs)</label>
        <input name='weight' id='weight' />
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Compost Calculator</h3>
      </header>
      <div className='App-body'>
        <Feedstock />
      </div>
    </div>
  );
}

export default App;
