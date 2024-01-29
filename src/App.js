import { useState } from 'react';
import { Select, TextField, MenuItem, InputLabel, Box, FormControl } from '@mui/material'

import './App.css';
import feedstocks from './feedstocks';


function Feedstock() {
  const [selectedFeedstock, setSelectedFeedstock] = useState(null);
  const [weight, setWeight] = useState(null); 

  const handleChangeFeedstock = (event) => {
    setSelectedFeedstock(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  }

  const calculateTotalWeight = () => {
    if (weight) {
      return weight;
    }
    
    return 'Total Weight';
  }

  const calculateMoisture = () => {
    if (selectedFeedstock && weight) {
      return feedstocks[selectedFeedstock].moisture * parseInt(weight) / parseInt(weight);
    }

    return 'Moisture';
  }

  return (
    <Box sx={{ p: 10 }}>
      <Box>
        <FormControl>
          <InputLabel id='feedstock-select-label-1'>Feedstock</InputLabel>
          <Select
            labelId='feedstock-select-label-1'
            id='feedstock-select-1'
            label='Feedstock'
            value={selectedFeedstock}
            onChange={handleChangeFeedstock}
            sx={{ minWidth: 200 }}
          >
            {Object.values(feedstocks).map((feedstock) => (
              <MenuItem key={feedstock.slug} value={feedstock.slug}>{feedstock.label}</MenuItem>
            ))}
          </Select>

          <TextField
            label='Weight'
            variant='outlined'
            value={weight}
            onChange={handleChangeWeight}
          />
        </FormControl>
      </Box>

      <Box>
        <TextField
          label='Total Weight'
          value={calculateTotalWeight()}
          inputProps={{readOnly: true,}}
        />

        <TextField
          label='Moisture'
          value={calculateMoisture()}
          inputProps={{readOnly: true,}}
        />
      </Box>
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
