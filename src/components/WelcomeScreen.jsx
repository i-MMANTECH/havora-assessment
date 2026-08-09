import React from 'react';

const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <div className="logo-circle">HV</div>
      </div>
      <h1>Welcome to HAVORA</h1>
      <p className="subtitle">Find intentional relationships and meaningful connections.</p>
      
      <button className="btn btn-primary" onClick={onNext}>
        Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen;
