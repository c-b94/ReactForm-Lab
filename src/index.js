import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username)
    setUsername('')
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  return (
    <div id='container'>
      <div id='navbar'>
        Form.js
      </div>
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor='username'>UserName</label>
            <input type='text' name='username' value={username} onChange={handleChange}/>
            <button type='submit'>Sumbit</button>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
      </form>
    </div>
  )
}


ReactDOM.render(
  <Form />,
  document.getElementById('app')
)