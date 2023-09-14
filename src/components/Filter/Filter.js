import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className="filter-label">
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
