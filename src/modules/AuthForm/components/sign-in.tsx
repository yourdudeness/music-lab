import { AuthFormContainer } from "../../../shared/components/AuthForm";

import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { useSignIn } from "../hooks/use-sign-in";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { SignInParams } from "../api/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

export const SignInForm = () => {
  const signInMutation = useSignIn();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting } //errors for errors text, isSubmiting for loading form
  } = useForm<SignInParams>({
    shouldUseNativeValidation: true,
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<SignInParams> = async (data) => {
    try {
      signInMutation.mutate({
        email: data.email,
        password: data.password
      });
    } catch (error) {
      // setError("email", {
      //   type: "manual",
      //   message: "Invalid email or password"
      // });
      console.log(error, "error");
    }
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
        className="mt-7"
        {...register("password")}
        type="password"
        errorMessage={errors.password?.message}
      />
      <Button type="submit" intent="accent" className="mb-5 mt-15">
        Войти
      </Button>
      <Link to="/sign-up">Зарегистрироваться</Link>
    </AuthFormContainer>
  );
};
