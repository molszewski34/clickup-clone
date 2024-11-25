'use client';

import { authFormTypes } from '../types/types';
import useSignUpHandler from './_hooks/useSignUpHandler';
const Signup: React.FC<authFormTypes> = () => {
  const {
    signUpFullName,
    setSignUpFullName,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    handleRegister,
  } = useSignUpHandler();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rejestracja</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            value={signUpFullName}
            onChange={(e) => setSignUpFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            required
          />
        </div>
        {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default Signup;
