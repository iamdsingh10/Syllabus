import {  useState } from 'react';
import './FormValidation.css';

const debounceDelay = 1000;
let debounceTimer = null;

const logWithDebounce = (key, val) => {
  if (debounceTimer !== null) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    console.log(key, val);
  }, debounceDelay);
};

function FormValidation({ formError = '', onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [errorObj, setErrorObj] = useState('');

  

  const validatorMethods = {
    name: (key, val) => {
      if (/[0-9]/.test(val)) {
        setErrorObj((prev) => ({ ...prev, [key]: 'You cannot have numbers in it.' }));
      } else {
        setErrorObj((prev) => ({ ...prev, [key]: null }));
      }
    },
    email: (key, val) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        setErrorObj((prev) => ({ ...prev, [key]: 'Please enter a valid email.' }));
      } else {
        setErrorObj((prev) => ({ ...prev, [key]: null }));
      }
    },
    mobile: (key, val) => {
      if (!/^\d{10}$/.test(val)) {
        setErrorObj((prev) => ({ ...prev, [key]: 'Please enter a 10-digit mobile number.' }));
      } else {
        setErrorObj((prev) => ({ ...prev, [key]: null }));
      }
    }
  };

  const inputChangeHandler = (key) => (e) => {
    const val = e.target.value;
    setFormData((data) => ({
      ...data,
      [key]: val
    }));
    logWithDebounce(key, val);
    if (validatorMethods[key]) {
      validatorMethods[key](key, val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(formData);
    }
    setFormData({
      name: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Fill The Details</h2>

        <div className="field-container">
          <label>Name: </label>
          <input
            type="text"
            placeholder="type your Name"
            onChange={inputChangeHandler('name')}
            value={formData.name}
            required
          />
          {errorObj?.name && <div>{errorObj.name}</div>}
        </div>

        <div className="field-container">
          <label>Email: </label>
          <input
            type="email"
            placeholder="type your Email"
            onChange={inputChangeHandler('email')}
            value={formData.email}
            required
          />
          {errorObj?.email && <div>{errorObj.email}</div>}
        </div>

        <div className="field-container">
          <label>Mobile No: </label>
          <input
            type="number"
            placeholder="type your Number"
            onChange={inputChangeHandler('mobile')}
            value={formData.mobile}
            required
          />
          {errorObj?.mobile && <div>{errorObj.mobile}</div>}
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;