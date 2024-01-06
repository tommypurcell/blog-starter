// import { UserButton, auth } from "@clerk/nextjs";

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = async () => {
  const { userId } = auth();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4"></div>

        {userId ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
