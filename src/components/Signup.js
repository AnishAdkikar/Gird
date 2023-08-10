import React, { useState } from 'react';

const SigninForm = () => {
  const [user, setUser] = useState({
    user_name: '',
    date_of_birth: '',
    gender: '',
    email_id: '',
    country: '',
    date_registered: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or API call here
    console.log(user); // Output user data for demonstration
  };

  return (
    <div>
      <h1>Signin Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="user_name"
            value={user.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="date_of_birth"
            value={user.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={user.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            name="email_id"
            value={user.email_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date Registered:</label>
          <input
            type="date"
            name="date_registered"
            value={user.date_registered}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SigninForm;