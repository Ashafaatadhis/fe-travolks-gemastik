import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-custom-Lightish-Blue font-bold text-3xl">
          Travolks!
        </h1>
      </div>

      <div className="hidden md:flex flex-row items-center justify-between gap-8">
        <div className="flex flex-row items-center gap-6">
          <Link href={"#"}>Link 1</Link>
          <Link href={"#"}>Link 2</Link>
          <Link href={"#"}>Link 3</Link>
          <Link href={"#"}>Link 4</Link>
        </div>
        <Button className="bg-custom-Lightish-Blue" asChild>
          <Link href={"/signup"}>Sign up!</Link>
        </Button>
      </div>
      <Menu className="h-6 w-6 block md:hidden" />
    </div>
  );
};

export default Navbar;
