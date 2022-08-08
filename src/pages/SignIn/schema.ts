import * as yup from "yup";

export const signinSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  passwordConfirmation: yup.string().oneOf(
    [yup.ref("password"), null],
    "Passwords must match"
  )
});