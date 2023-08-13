import React from 'react';
import {Link } from 'react-router-dom';
import AssembleParts from './AssembleParts';
import { useStateContext } from '../context/StateProvider';
import StateProvider from '../context/StateProvider';
import  '../styles/PartsSelection.css';

const PartsSelection = ({ partsList}) => {
  const { selectedParts, setSelectedParts } = useStateContext([]);

  const togglePartSelection = (part) => {
    const isSelected = selectedParts?.includes(part);
    if (isSelected) {
      setSelectedParts(selectedParts.filter((id) => id !== part));
    } else {
      setSelectedParts([...selectedParts, part]);
    }
  };

  return (
    <div className='parts-selection-container'>
      <div className='parts-selection-header'>
        <Link to="/">
        <button className='back-button'>Back</button>
      </Link>
      <Link to="/assemble">
        <button className='next-button'>Next</button>
      </Link>
      </div>
      <div className='parts-list'>
        {partsList.map((part) => (
          <div
            key={part.id}
            className={`part-card ${
              selectedParts?.includes(part) ? 'selected' : ''
            }`}
            onClick={() => togglePartSelection(part)}
          >
            <img src={part.imageUrl} alt={part.name} className='part-image' />
            <p className='part-name'>{part.name}</p>
          </div>
        ))}
      </div>
      <StateProvider selectedParts={selectedParts}/>
    </div>
  );
};

export default PartsSelection;
