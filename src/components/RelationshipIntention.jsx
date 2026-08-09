import React, { useState } from 'react';

const options = [
  'Marriage',
  'Long-term Relationship',
  'Intentional Dating'
];

const RelationshipIntention = ({ data, updateData, onNext, onPrev }) => {
  const [error, setError] = useState(false);

  const handleSelect = (option) => {
    updateData({ intention: option });
    setError(false);
  };

  const handleNext = () => {
    if (!data.intention) {
      setError(true);
      return;
    }
    onNext();
  };

  return (
    <div className="card">
      <h1>Relationship Intention</h1>
      <p className="subtitle">What are you looking for on HAVORA?</p>

      <div className="option-grid">
        {options.map((option) => (
          <div 
            key={option} 
            className={`option-card ${data.intention === option ? 'selected' : ''}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>

      {error && <p className="error-text" style={{ textAlign: 'center', marginBottom: '1rem' }}>Please select an intention.</p>}

      <button className="btn btn-primary" onClick={handleNext}>
        Continue
      </button>
      <button className="btn btn-secondary" onClick={onPrev}>
        Back
      </button>
    </div>
  );
};

export default RelationshipIntention;
