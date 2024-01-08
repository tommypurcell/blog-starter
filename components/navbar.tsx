import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = async () => {
  const { userId } = auth();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <MainNav />
        <div className="flex-1 flex justify-center px-4 gap-x-2 max-w-xs">
          <Input className="w-full" placeholder="Search Posts" />
          <Button>Search</Button>
        </div>
        <div className="flex items-center space-x-4">
          {userId ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
