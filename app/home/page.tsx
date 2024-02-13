import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <Image
        width={512}
        height={512}
        src="/logo.png"
        alt="Platforms on Vercel"
        className="w-48"
      />
      <h1 className="text-white">Welcome to Webstr</h1>
      <Button asChild>
        <Link href={`${process.env.NEXTAUTH_URL}`}>Go to Dashboard</Link>
      </Button>
    </div>
  );
}
