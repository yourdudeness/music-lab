import { AuthFormContainer } from "../../../shared/components/AuthForm";

import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { useSignIn } from "../hooks/use-sign-in";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SignInParams } from "../api/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useState } from "react";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SignInParams>({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema)
  });
  const [test, setTest] = useState(false);

  const navigate = useNavigate();
  console.log(errors.root, "test");

  const handleNavigate = () => navigate("/sign-up");

  const signInMutation = useSignIn({
    onError: (error) => {
      if (error.response?.status === 400) {
        setError("root", {
          type: "manual",
          message: "Неверный логин или пароль"
        });
        setTest(true);
      }
    }
  });

  const onSubmit: SubmitHandler<SignInParams> = async (data) => {
    signInMutation.mutate({
      email: data.email,
      password: data.password
    });
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Логин"
        {...register("email")}
        errorMessage={errors.email?.message}
      />
      <Input
        placeholder="Пароль"
        {...register("password")}
        type="password"
        errorMessage={errors.password?.message}
      />
      <Button type="submit" intent="accent" className="mb-5 mt-5">
        Войти
      </Button>
      <Button onClick={handleNavigate}>Зарегистрироваться</Button>
      {Boolean(errors.root) && (
        <span className="text-red-500 text-sm">{errors.root?.message}</span>
      )}
      {test && <p>testing</p>}
    </AuthFormContainer>
  );
};
