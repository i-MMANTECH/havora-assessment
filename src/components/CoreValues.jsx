import React, { useState } from 'react';

const availableValues = [
  'Honesty', 'Loyalty', 'Family', 'Faith', 
  'Communication', 'Kindness', 'Ambition', 
  'Empathy', 'Respect', 'Humor'
];

const CoreValues = ({ data, updateData, onNext, onPrev }) => {
  const [error, setError] = useState('');

  const toggleValue = (val) => {
    const isSelected = data.values.includes(val);
    
    if (isSelected) {
      updateData({ values: data.values.filter(v => v !== val) });
      setError('');
    } else {
      if (data.values.length >= 5) {
        setError('You can only select up to 5 values.');
        return;
      }
      updateData({ values: [...data.values, val] });
      setError('');
    }
  };

  const handleNext = () => {
    if (data.values.length === 0) {
      setError('Please select at least one core value.');
      return;
    }
    onNext();
  };

  return (
    <div className="card">
      <h1>Core Values</h1>
      <p className="subtitle">Select up to 5 values that matter most to you.</p>

      <div className="pills-container">
        {availableValues.map((val) => {
          const isSelected = data.values.includes(val);
          const maxReached = data.values.length >= 5;
          const disabledClass = maxReached && !isSelected ? 'disabled' : '';

          return (
            <div 
              key={val} 
              className={`pill ${isSelected ? 'selected' : ''} ${disabledClass}`}
              onClick={() => toggleValue(val)}
            >
              {val}
            </div>
          );
        })}
      </div>

      {error && <p className="error-text" style={{ textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
      <p style={{ textAlign: 'center', fontSize: '0.875rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        {data.values.length} / 5 selected
      </p>

      <button className="btn btn-primary" onClick={handleNext}>
        Continue
      </button>
      <button className="btn btn-secondary" onClick={onPrev}>
        Back
      </button>
    </div>
  );
};

export default CoreValues;
