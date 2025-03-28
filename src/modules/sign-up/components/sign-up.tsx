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
    formState: { errors }
  } = useForm<SignUpFormData>({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema) as any //TODO: fix any
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
      if (error.response?.status === 500) {
        setError("root", {
          type: "manual",
          message: "Ошибка попробуйте еще раз"
        });
      }
    }
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    const { confirmPassword, ...submitData } = data;

    await signUpMutation.mutate({
      email: submitData.email,
      password: submitData.password
    });
  };

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
          {...register("password")}
          type="password"
          errorMessage={errors.password?.message}
        />
        <Input
          placeholder="Повторите пароль"
          {...register("confirmPassword")}
          type="password"
          errorMessage={errors.confirmPassword?.message}
        />
        <Button type="submit" intent="accent" className="mb-5 mt-5">
          Зарегистрироваться
        </Button>

        {Boolean(errors.root) && (
          <span className="text-red-500 text-sm">{errors.root?.message}</span>
        )}
      </AuthFormContainer>
    </>
  );
};
