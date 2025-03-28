import { SignInForm } from "../../modules/sign-in";
import { useRedirectToMain } from "../../shared/hooks/use-redirect-to-main";

export const SignInPage = () => {
  useRedirectToMain();

  return (
    <section className="h-screen w-lvw flex justify-center items-center">
      <SignInForm />
    </section>
  );
};
