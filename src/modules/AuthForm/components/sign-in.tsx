import { AuthFormContainer } from "../../../shared/components/AuthForm";

import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { useSignIn } from "../hooks/use-sign-in";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { SignInParams } from "../api/user";
import { useAuth } from "../../../contexts/use-auth";

export const SignInForm = () => {
  const signInMutation = useSignIn();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting } //errors for errors text, isSubmiting for loading form
  } = useForm<SignInParams>({ shouldUseNativeValidation: true });

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
        Войти
      </Button>
      <Link to="/sign-up">Зарегистрироваться</Link>
    </AuthFormContainer>
  );
};
