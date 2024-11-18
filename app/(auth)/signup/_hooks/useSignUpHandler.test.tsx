import { render, fireEvent, waitFor } from '@testing-library/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/db/firebase/lib/firebase';
import useSignUpHandler from './useSignUpHandler';

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  getAuth: jest.fn().mockReturnValue({}),
}));

const TestComponent = () => {
  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    setSignUpError,
    handleRegister,
  } = useSignUpHandler();

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        value={signUpEmail}
        onChange={(e) => setSignUpEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={signUpPassword}
        onChange={(e) => setSignUpPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
      {signUpError && <div>{signUpError}</div>}
    </form>
  );
};

describe('useSignUpHandler', () => {
  it('should handle successful registration', async () => {
    const { getByPlaceholderText, getByText } = render(<TestComponent />);

    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
      user: { email: 'test@example.com' },
    });

    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const button = getByText('Sign Up');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        'test@example.com',
        'password123'
      );
    });
  });
});
