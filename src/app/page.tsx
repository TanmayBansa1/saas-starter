import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f8f2d6] to-[#dcc594] text-white">
    
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg">This is the home page of the application.</p>

      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </div>
    </main>
  );
}
