import React from "react";
import { AuthFormContainer } from "../../../shared/components/AuthForm";
import { useFormik } from "formik";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { useSignIn } from "../hooks/use-auth";

export const SignInForm = () => {
  const signInMutation = useSignIn();
  const {
    values,
    isSubmitting,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    handleChange
  } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values, actions) => {
      console.log(values, "val");
      signInMutation.mutate({
        email: values.email,
        password: values.password
      });
    }
  });
  return (
    <AuthFormContainer onSubmit={handleSubmit}>
      <Input
        placeholder="Логин"
        className="mb-7"
        name="email"
        onChange={handleChange}
      />
      <Input
        placeholder="Пароль"
        className="mb-15"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        intent="accent"
        className="mb-5"
      >
        Войти
      </Button>
      <Button>Зарегестрироваться</Button>
    </AuthFormContainer>
  );
};
