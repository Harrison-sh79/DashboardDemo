import { SignUp } from "@clerk/nextjs";
import AuthLoading from "../../loading";
import { Suspense } from "react";

export default function AuthSignUpPage() {
  return (
    <Suspense fallback={<AuthLoading />}>
      <SignUp />
    </Suspense>
  );
}
