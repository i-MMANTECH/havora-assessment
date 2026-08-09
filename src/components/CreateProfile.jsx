import React, { useState } from 'react';

const CreateProfile = ({ data, updateData, onNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Full Name is required';
    if (!data.age) newErrors.age = 'Age is required';
    else if (isNaN(data.age) || Number(data.age) < 18) newErrors.age = 'You must be at least 18';
    if (!data.occupation.trim()) newErrors.occupation = 'Occupation is required';
    if (!data.bio.trim()) newErrors.bio = 'Bio is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
    // Clear error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  return (
    <div className="card">
      <h1>Create Profile</h1>
      <p className="subtitle">Tell us a bit about yourself</p>

      <div className="form-group">
        <label>Full Name</label>
        <input 
          type="text" 
          name="name" 
          value={data.name} 
          onChange={handleChange} 
          placeholder="e.g. Emmanuel Aro"
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Age</label>
        <input 
          type="number" 
          name="age" 
          value={data.age} 
          onChange={handleChange} 
          placeholder="e.g. 25"
        />
        {errors.age && <span className="error-text">{errors.age}</span>}
      </div>

      <div className="form-group">
        <label>Occupation</label>
        <input 
          type="text" 
          name="occupation" 
          value={data.occupation} 
          onChange={handleChange} 
          placeholder="e.g. Software Engineer"
        />
        {errors.occupation && <span className="error-text">{errors.occupation}</span>}
      </div>

      <div className="form-group">
        <label>Short Bio</label>
        <textarea 
          name="bio" 
          value={data.bio} 
          onChange={handleChange} 
          placeholder="A little bit about who you are..."
        />
        {errors.bio && <span className="error-text">{errors.bio}</span>}
      </div>

      <button className="btn btn-primary" onClick={handleNext} style={{ marginTop: '1rem' }}>
        Continue
      </button>
    </div>
  );
};

export default CreateProfile;
