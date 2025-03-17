import * as yup from "yup";
import { SignInParams } from "../api/user";

export const schema = yup.object().shape({
  email: yup.string().email("Не допустимый email").required("Email обязателен"),
  password: yup
    .string()
    .min(4, "Пароль должен содержать хотябы 4 символа")
    .required("Пароль обязательное поле")
});
