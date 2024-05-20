import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <section className="section">
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title">Login</h1>
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

export default LoginForm;