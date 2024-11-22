import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { TiWarning } from "react-icons/ti";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import LogInWithGoogle from "../../LogInWithGoogle";
import useLoginHandler from "../_hooks/useLoginHandler";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export type LoginInputs = {
  login: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const { loginError, loginEmail, loginPassword, handleLogin, setLoginEmail, setLoginPassword } =
    useLoginHandler();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    handleLogin(data);
  };

  return (
    <form className="flex flex-col gap-3 w-full items-center" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-4xl font-bold text-gray-700 ">Welcome back!</h1>
      <LogInWithGoogle />
      <div className="flex flex-row w-full gap-2">
        <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
        <p className="text-gray-400 text-sm">OR</p>
        <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
      </div>
      {loginError && (
        <div className="flex flex-row text-red-500 gap-1">
          <TiWarning />
          <p className="first-letter:capitalize text-sm  font-semibold">{loginError}!</p>
        </div>
      )}
      <div className="w-full">
        <Input
          {...register("login")}
          id="login"
          placeholder="Enter your work email"
          label="Work Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          className={errors.login && " border-red-500 hover:border-red-500 focus:border-red-500"}>
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
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
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
        Log in
      </Button>
    </form>
  );
};
