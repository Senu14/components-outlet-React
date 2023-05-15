import { useState } from 'react';

  function SimpleForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${userName}, Password: ${password}`);
  };

  return (
    <>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default SimpleForm;




