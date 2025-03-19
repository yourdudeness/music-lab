import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Не допустимый email").required("Email обязателен"),
  password: yup
    .string()
    .min(4, "Минимальная длина пароля 4 символа")
    .required("Пароль обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
});
