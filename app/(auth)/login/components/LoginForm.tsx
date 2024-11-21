import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export const LoginForm: React.FC = () => {
  return (
    <>
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
    </>
  );
};
