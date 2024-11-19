import { render, fireEvent, waitFor } from '@testing-library/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useLoginHandler from './useLoginHandler';
import { auth } from '@/db/firebase/lib/firebase';
import { useRouter } from 'next/navigation';

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  getAuth: jest.fn().mockReturnValue({}),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const TestComponent = () => {
  const {
    loginError,
    setLoginError,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  } = useLoginHandler();

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      {loginError && <div role="alert">{loginError}</div>}
    </form>
  );
};

describe('useLoginHandler', () => {
  it('should call signInWithEmailAndPassword with correct parameters', async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({
      user: { email: 'test@example.com', uid: 'userId' },
    });

    const { getByPlaceholderText, getByText } = render(<TestComponent />);

    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const button = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        'test@example.com',
        'password123'
      );

      expect(push).toHaveBeenCalledWith('/userId/home');
    });
  });

  it('should set error state when login fails', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <TestComponent />
    );

    (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce(
      new Error('Invalid email or password')
    );

    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const button = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(button);

    await waitFor(() => {
      const errorMessage = getByRole('alert');
      expect(errorMessage).toHaveTextContent('Invalid email or password');
    });
  });

  it('should display an unknown error message when an unknown error occurs', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <TestComponent />
    );

    (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce(
      new Error('Some unknown error')
    );

    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;
    const button = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'some@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'somepassword' } });
    fireEvent.click(button);

    await waitFor(() => {
      const errorMessage = getByRole('alert');
      expect(errorMessage).toHaveTextContent('Some unknown error');
    });
  });
});
