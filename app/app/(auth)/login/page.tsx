import { LoginForm } from "@/components/form/login-form";

export default async function LoginPage() {
  return (
    <div className="login flex h-[100dvh] w-full items-center justify-center">
      <LoginForm />
    </div>
  );
}
