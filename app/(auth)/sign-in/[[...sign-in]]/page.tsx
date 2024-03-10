import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";
import AuthLoading from "../../loading";

export default function AuthSignInPage() {
  return (
    <Suspense fallback={<AuthLoading />}>
      <SignIn />
    </Suspense>
  );
}
