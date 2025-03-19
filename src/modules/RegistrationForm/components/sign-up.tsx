import React from "react";
import { AuthFormContainer } from "../../../shared/components/AuthForm";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { useSignUp } from "../hooks/use-sign-up";
import { SignUpParams } from "../api/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

interface SignUpFormData extends SignUpParams {
  confirmPassword: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting } //errors for errors text, isSubmiting for loading form
  } = useForm<SignUpFormData>({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema) as any
  });

  const signUpMutation = useSignUp({
    onSuccess: () => {
      navigate("/sign-in");
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        setError("root", {
          type: "manual",
          message: "Такой пользователь уже существует"
        });
      }
    }
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      const { confirmPassword, ...submitData } = data;
      await signUpMutation.mutate({
        email: submitData.email,
        password: submitData.password
      });
    } catch (error) {}
  };

  console.log(errors.root?.message, "asdfasdf");
  return (
    <>
      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Логин"
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <Input
          placeholder="Пароль"
          className="mt-7"
          {...register("password")}
          type="password"
          errorMessage={errors.password?.message}
        />
        <Input
          placeholder="Повторите пароль"
          className="mt-7"
          {...register("confirmPassword")}
          type="password"
          errorMessage={errors.confirmPassword?.message}
        />
        <Button type="submit" intent="accent" className="mb-5 mt-15">
          Зарегистрироваться
        </Button>
        {errors.root !== undefined && (
          <span className="text-red-500 ">{errors.root?.message}</span>
        )}
      </AuthFormContainer>
    </>
  );
};
