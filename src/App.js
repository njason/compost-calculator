import { useState } from 'react';
import { Select, TextField, MenuItem, InputLabel, Box, FormControl } from '@mui/material'
import { v4 as uuidv4 } from "uuid";

import './App.css';
import feedstocksDb from './feedstocks';

/**
 * @typedef {import('react').Dispatch<import('react').SetStateAction<null>>} ReactDispatch
 * @typedef {function(Event): void} EventHandler
 * 
 * @typedef {Object} FeedstockProps
 * @property {number} index
 * @property {string|null} selectedFeedstock
 * @property {EventHandler} handleChangeFeedstock
 * @property {string|null} weight
 * @property {EventHandler} handleChangeWeight
 */

function AppBody() {

  const calculateTotalWeight = () => {
    /*const validFeedstocks = selectedFeedstocks.filter(feedstock => feedstock.weight)
    if (weight) {
      return weight;
    }*/
    
    return 'Total Weight';
  };

  const calculateMoisture = () => {
    /*const validFeedstocks = selectedFeedstocks.filter((feedstock) => feedstock.selectedFeedstock && feedstock.weight);

    const sum = validFeedstocks.reduce )
    if (selectedFeedstocks && weight) {
      return feedstocks[selectedFeedstock].moisture * parseInt(weight) / parseInt(weight);
    }*/

    return 'Moisture';
  };

  /** @type {Array<[string|null, ReactDispatch]>} */
  const [feedstocks, setFeedstocks] = useState([
    { id: uuidv4(), selectedFeedstock: null, weight: null }
  ]);
  
  const create = newFeedstock => {
    setFeedstocks([...feedstocks, newFeedstock]);
  };

  const remove = id => {
    setFeedstocks(feedstocks.filter(feedstock => feedstock.id !== id));
  };

  const update = (id, updatedSelectedFeedstock) => {
    const updatedFeedstocks = feedstocks.map(feedstock => {
      if (feedstock.id === id) {
        return { ...feedstock, selectedFeedstock: updatedSelectedFeedstock };
      }

      return feedstock;
    });

    setFeedstocks(updatedFeedstocks);
  };

  const selectedFeedstockList = feedstocks.map(feedstock => (
    <Feedstock
      update={update}
      remove={remove}
      feedstock={feedstock}
      key={feedstock.id}
    />
  ));

  return (
    <Box>
      <Box>
        {selectedFeedstockList}
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
  );
}

/**
 * @param {FeedstockProps} param0 
 */
function Feedstock({ feedstock, remove, update }) {
  const [selectedFeedstock, setSelectedFeedstock] = useState(feedstock.selectedFeedstock);
  const [weight, setWeight] = useState(feedstock.weight);

  const handleChangeFeedstock = (event) => {
    setSelectedFeedstock(event.target.value);
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <InputLabel id={`feedstock-select-label-${feedstock.id}`}>Feedstock</InputLabel>
          <Select
            labelId={`feedstock-select-label-${feedstock.id}`}
            id={`feedstock-select-${feedstock.id}`}
            label='Feedstock'
            value={selectedFeedstock}
            onChange={handleChangeFeedstock}
            sx={{ minWidth: 200 }}
          >
            {Object.entries(feedstocksDb).map(([slug, feedstock]) => (
              <MenuItem key={slug} value={slug}>{feedstock.label}</MenuItem>
            ))}
          </Select>

          <TextField
            label='Weight'
            variant='outlined'
            value={weight}
            onChange={setWeight}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Compost Calculator</h3>
      </header>
      <div className='App-body'>
        <AppBody />
      </div>
    </div>
  );
}

export default App;
