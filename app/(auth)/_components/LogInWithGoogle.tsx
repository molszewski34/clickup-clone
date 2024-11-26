import React from "react";
import { FcGoogle } from "react-icons/fc";
import useLoginWithGoogle from "../login/_hooks/useLoginWithGoogle";

const LogInWithGoogle = () => {
  const { handleLoginWithGoogle } = useLoginWithGoogle();
  return (
    <button
      onClick={handleLoginWithGoogle}
      className="relative flex flex-row items-center justify-center bg-transparent border border-gray-300 rounded-md font-medium w-full p-2 hover:bg-gray-100 text-gray-700">
      <FcGoogle className="absolute left-4" size={20} />
      <p className="flex justify-center">Continue with Google</p>
    </button>
  );
};

export default LogInWithGoogle;
