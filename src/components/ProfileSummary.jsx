import React from 'react';

const ProfileSummary = ({ data, onPrev }) => {
  return (
    <div className="card">
      <h1>Profile Summary</h1>
      <p className="subtitle">Review your HAVORA profile</p>

      <div className="summary-item">
        <div className="summary-label">Name & Age</div>
        <div className="summary-value">{data.name}, {data.age}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Occupation</div>
        <div className="summary-value">{data.occupation}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Short Bio</div>
        <div className="summary-value" style={{ lineHeight: '1.5' }}>{data.bio}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Looking For</div>
        <div className="summary-value">{data.intention}</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Core Values</div>
        <div className="summary-tags">
          {data.values.map(val => (
            <span key={val} className="summary-tag">{val}</span>
          ))}
        </div>
      </div>

      <button className="btn btn-primary" onClick={() => alert("Profile Setup Complete! Welcome to HAVORA.")} style={{ marginTop: '1rem' }}>
        Complete Setup
      </button>
      <button className="btn btn-secondary" onClick={onPrev}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileSummary;
