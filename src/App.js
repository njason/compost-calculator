import { useState } from 'react';
import { Select, TextField, MenuItem } from '@mui/material'

import './App.css';
import feedstocks from './feedstocks';


function Feedstock() {
  const [selectedFeedstock] = useState('bedded-diary');

  return (
    <div className='feedstock'>
      <Select value={selectedFeedstock}>
        {feedstocks.map((feedstock, index) => (
          <MenuItem value={feedstock.slub}>{feedstock.label}</MenuItem>
        ))}
      </Select>

      <TextField label="Weight" variant="outlined" />
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
