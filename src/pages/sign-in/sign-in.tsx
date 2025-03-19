import { SignInForm } from "../../modules/AuthForm";
import { useRedirectToMain } from "../../shared/hooks/use-redirect-to-main";

export const SignInPage = () => {
  useRedirectToMain();

  return (
    <section className="h-screen w-lvw flex justify-center items-center">
      <SignInForm />
    </section>
  );
};
