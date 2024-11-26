export interface authFormTypes {
  loginForm: {
    loginError: string;
    loginEmail: string;
    loginPassword: string;
  }[];
  signUpForm: {
    signUpEmail: string;
    signUpPassword: string;
    signUpError: string;
  }[];
}

export enum RedirectTo {
  login = "Log in",
  signup = "Sign up",
}
