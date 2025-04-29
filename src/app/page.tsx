import Link from "next/link";

export default function HomePage() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f8f2d6] to-[#dcc594] text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="text-lg">This is the home page of the application.</p>

        <div className="mt-4 flex gap-4">
          <Link href={"/auth/sign-in"}>
            Sign In
          </Link>
          <Link href={"/auth/sign-up"}>
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
