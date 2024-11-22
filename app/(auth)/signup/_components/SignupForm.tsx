import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { TiWarning } from "react-icons/ti";
// import { LuUser2 } from "react-icons/lu";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import LogInWithGoogle from "../../LogInWithGoogle";
import useSignUpHandler from "../_hooks/useSignUpHandler";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../schemas/signupSchema";

export type SignupInputs = {
  // fullName: string; TODO: uncomment when implemented in backend
  login: string;
  password: string;
};

export const SignupForm: React.FC = () => {
  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    // setSignUpError,
    handleRegister,
  } = useSignUpHandler();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({ resolver: yupResolver(signupSchema) });

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    handleRegister(data);
  };

  return (
    <form className="flex flex-col gap-3 w-full items-center" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl font-bold text-gray-700">Seconds to sign up!</h1>
      <LogInWithGoogle />
      <div className="flex flex-row w-full gap-2">
        <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
        <p className="text-gray-400 text-sm">OR</p>
        <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
      </div>
      {signUpError && (
        <div className="flex flex-row text-red-500 gap-1">
          <TiWarning />
          <p className="first-letter:capitalize text-sm  font-semibold">{signUpError}!</p>
        </div>
      )}
      {/* <Input id="full-name" placeholder="John Doe" label="Full name">
        <LuUser2 size={20} />
      </Input> TODO: uncomment when implementing fullName*/}
      <div className="w-full">
        <Input
          {...register("login")}
          id="login-email"
          placeholder="Enter your work email"
          label="Work Email"
          value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)}
          className={errors.login && "border-red-500 hover:border-red-500 focus:border-red-500"}>
          <HiOutlineMail size={20} color={errors.login && "red"} />
        </Input>
        {errors.login && (
          <div className="flex flex-row text-red-500 gap-1">
            <TiWarning />
            <p className="first-letter:capitalize text-xs  font-semibold">
              {errors.login.message}!
            </p>
          </div>
        )}
      </div>
      <div className="w-full">
        <Input
          {...register("password")}
          id="login-password"
          label="Password"
          placeholder="Enter password"
          type="password"
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
          className={
            errors.password && " border-red-500 hover:border-red-500 focus:border-red-500"
          }>
          <TfiLock color={errors.password && "red"} />
        </Input>
        {errors.password && (
          <div className="flex flex-row text-red-500 gap-1">
            <TiWarning />
            <p className="first-letter:capitalize text-xs  font-semibold">
              {errors.password.message}!
            </p>
          </div>
        )}
      </div>

      <Button className="w-full h-14 mt-3" type="submit">
        Sign up
      </Button>
    </form>
  );
};
