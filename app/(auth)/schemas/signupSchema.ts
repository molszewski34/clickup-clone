import * as yup from "yup";

export const signupSchema = yup.object({
  fullName: yup.string().required(),
  login: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
