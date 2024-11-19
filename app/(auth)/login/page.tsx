"use client";

import { authFormTypes } from '../types/types';
import LogInWithGoogle from './_components/LogInWithGoogle';
import useLoginHandler from './_hooks/useLoginHandler';

const Login: React.FC<authFormTypes> = () => {
  const {
    // loginError,
    // loginEmail,
    // setLoginEmail,
    // loginPassword,
    // setLoginPassword,
    // handleLogin,
  } = useLoginHandler();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Logowanie</h1>
      <LogInWithGoogle />
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
      </div>
      <div className="flex h-full justify-center">
        <div className="flex flex-col w-[480px] py-[30px] px-[60px] mt-4 shadow-md bg-white rounded-2xl h-fit items-center gap-5">
          <h1 className="text-4xl font-bold text-gray-700">Welcome back!</h1>
          <button className="relative flex flex-row items-center justify-center bg-transparent border border-gray-300 rounded-md font-medium w-full p-2 hover:bg-gray-100 text-gray-700">
            <FcGoogle className="absolute left-4" size={20} />
            <p className="flex justify-center">Continue with Google</p>
          </button>
          <div className="flex flex-row w-full gap-2">
            <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
            <p className="text-gray-400 text-sm">OR</p>
            <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
          </div>
          <Input id="login-email" placeholder="Enter your work email" label="Work Email">
            <HiOutlineMail size={20} />
          </Input>
          <Input id="login-password" label="Password" placeholder="Enter password">
            <TfiLock />
          </Input>
          <Button className="w-full h-14 mt-3">Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
