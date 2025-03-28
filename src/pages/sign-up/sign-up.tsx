import { SignUpForm } from "../../modules/sign-up";
import { useRedirectToMain } from "../../shared/hooks/use-redirect-to-main";

export const SignUpPage = () => {
  useRedirectToMain();

  return (
    <section className="h-screen w-lvw flex justify-center items-center">
      <SignUpForm />
    </section>
  );
};
