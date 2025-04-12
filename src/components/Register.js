import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering:', error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Sign Up</button>
    </div>
  );
}

export default Register;
