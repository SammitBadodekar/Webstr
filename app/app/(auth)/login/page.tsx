import { SparklesCore } from "@/app/home/sparkles";
import { LoginForm } from "@/components/form/login-form";

export default async function LoginPage() {
  return (
    <div className="login flex h-[100dvh] w-full items-center justify-center">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#000"
        />
      </div>
      <div className="z-50">
        <LoginForm />
      </div>
    </div>
  );
}
