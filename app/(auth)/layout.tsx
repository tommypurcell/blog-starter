"use client";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Determine the text based on the current pathname
  const text = pathname.includes("/sign-up") ? "Sign Up" : "Sign In";

  return (
    <>
      <div className="flex flex-col space-y-4 items-center justify-center h-screen">
        <h1 className="text-5xl font-bold ">{text}</h1>
        <div>{children}</div>
      </div>
    </>
  );
}
