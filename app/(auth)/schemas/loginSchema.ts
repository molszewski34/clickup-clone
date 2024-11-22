import * as yup from "yup";

export const loginSchema = yup.object({
  login: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
