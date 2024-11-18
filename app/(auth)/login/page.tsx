'use client';

import { authFormTypes } from '../types/types';
import useLoginHandler from './_hooks/useLoginHandler';

const Login: React.FC<authFormTypes> = () => {
  const {
    loginError,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  } = useLoginHandler();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Logowanie</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </div>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
};

export default Login;
