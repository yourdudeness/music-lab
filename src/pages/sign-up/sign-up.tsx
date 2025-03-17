import { SignUpForm } from "../../modules/RegistrationForm";
import { useRedirectToMain } from "../../shared/hooks/use-redirect-to-main";

export const SignUpPage = () => {
  useRedirectToMain();
  return (
    <section className="h-screen w-lvw flex justify-center items-center">
      <SignUpForm />
    </section>
  );
};
