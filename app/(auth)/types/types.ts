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
