// import { UserButton, auth } from "@clerk/nextjs";

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";

const Navbar = async () => {
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  // const stores = await prismadb.store.findMany({
  //   where: {
  //     userId,
  //   },
  // });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4"></div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
