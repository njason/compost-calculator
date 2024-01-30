import { useState } from 'react';
import { Select, TextField, MenuItem, InputLabel, Box, FormControl } from '@mui/material'

import './App.css';
import feedstocks from './feedstocks';

/**
 * @typedef {Object} Feedstock
 * @property {string} weight
 * @property {string} slug
 */


function FeedstockList() {
  const [weight, setWeight] = useState(null);
  const [selectedFeedstock, setSelectedFeedstock] = useState(null);

  const handleChangeFeedstock = (event) => {
    setSelectedFeedstock(event.target.value);
  };

  // <FeedstockItem handleFeedstock={(event) => handleFeedstock(event, index)} index={index} />

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

  const feedstockProps = {
    index: 1,
    selectedFeedstock,
    handleChangeFeedstock,
    weight,
    handleChangeWeight
  };

  return (
    <Box>
      <Feedstock {...feedstockProps} />

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

function Feedstock({index, selectedFeedstock, handleChangeFeedstock, weight, handleChangeWeight}) {
  return (
    <Box>
      <Box>
        <FormControl>
          <InputLabel id={`feedstock-select-label-${index}`}>Feedstock</InputLabel>
          <Select
            labelId={`feedstock-select-label-${index}`}
            id={`feedstock-select-${index}`}
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
        <FeedstockList />
      </div>
    </div>
  );
}

export default App;
