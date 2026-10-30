import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <SignIn routing="path" path="/sign-in" />
    </main>
  );
}
