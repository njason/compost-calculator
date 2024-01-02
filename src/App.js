import { useState } from 'react';
import { Select, TextField, MenuItem, InputLabel, Box, FormControl } from '@mui/material'

import './App.css';
import feedstocks from './feedstocks';


function Feedstock() {
  const [selectedFeedstock, setSelectedFeedstock] = useState('');

  const handleChange = (event) => {
    setSelectedFeedstock(event.target.value);
  };

  return (
    <Box sx={{ p: 10 }}>
      <FormControl>
        <InputLabel id='feedstock-select-label-1'>Feedstock</InputLabel>
        <Select
          labelId='feedstock-select-label-1'
          id='feedstock-select-1'
          label='Feedstock'
          value={selectedFeedstock}
          onChange={handleChange}
          sx={{ minWidth: 200 }}
        >
          {feedstocks.map((feedstock) => (
            <MenuItem key={feedstock.slug} value={feedstock.slug}>{feedstock.label}</MenuItem>
          ))}
        </Select>

        <TextField label="Weight" variant="outlined" />
      </FormControl>
    </Box>
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
