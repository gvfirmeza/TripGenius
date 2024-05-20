import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}, Email: ${email}`);
  };

  return (
    <section className="section">
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title">Inscreva-Se</h1>
      <label className='label'>
        Email:
        <input className='input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label className='label'>
        Usuário:
        <input className='input' type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label className='label'>
        Senha:
        <input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button className='button' type="submit">Enviar</button>
    </form>
    </section>
  );
}

export default SignUpForm;