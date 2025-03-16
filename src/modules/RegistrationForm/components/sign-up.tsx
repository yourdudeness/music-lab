import React from "react";
import { AuthFormContainer } from "../../../shared/components/AuthForm";

import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { useSignUp } from "../hooks/use-sign-up";
import { SignUpParams } from "../api/user";

export const SignUpForm = () => {
  const signUpMutation = useSignUp();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting } //errors for errors text, isSubmiting for loading form
  } = useForm<SignUpParams>({ shouldUseNativeValidation: true });

  const onSubmit: SubmitHandler<SignUpParams> = async (data) => {
    try {
      await signUpMutation.mutate({
        email: data.email,
        password: data.password
      });
    } catch (error) {
      // setError("email", {
      //   type: "manual",
      //   message: "Invalid email or password"
      // });
      console.log(error);
    }
  };
  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Логин"
        className="mb-7"
        {...register("email", {
          required: "Email is required",
          validate: (value: string) => {
            if (!value.includes("@")) {
              return "Email must include @";
            }
            return true;
          }
        })}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <Input
        placeholder="Пароль"
        className="mb-15"
        {...register("password", {
          required: "Password is required",
          minLength: 4
        })}
        type="password"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <Button type="submit" intent="accent" className="mb-5">
        Зарегистрироваться
      </Button>
    </AuthFormContainer>
  );
};
