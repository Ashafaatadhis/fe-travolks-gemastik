"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Package2, PanelLeft, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import axiosInstance from "@/helper/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import retreiveUserDataFromCookie from "@/helper/retriveUserDataFromCookie";
import { useFetchData } from "@/hooks/useFetchData";

const Navbar = () => {
  const router = useRouter();
  const userDataFromCookie = retreiveUserDataFromCookie();

  const { data: userProfileData, isLoading } = useFetchData({
    queryKey: ["userProfileData"],
    dataProtected: `profile/user/${userDataFromCookie.sub}`,
  });

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.delete("/auth/logout");
      if (res.data.statusCode === 200) {
        Cookies.remove("accessToken");
        Cookies.remove("user");

        toast.success("Log out successfully!");
        router.push("/signin");
      }
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data.message);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground">
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div>
        <h1 className="font-bold text-xl text-custom-Fly-byNight">TRAVOLKS!</h1>
      </div>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground text-custom-Sky-High" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full  rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] text-custom-Fly-byNight placeholder:text-custom-Sky-High"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={userProfileData?.data.image} />
            <AvatarFallback className="bg-custom-Sky-High text-custom-Grams-Hair">
              TRV
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="text-custom-Fly-byNight">
            {userProfileData?.data.fullname}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-custom-Fly-byNight">
            Support
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-custom-Strong-Iris">
            <h1 onClick={handleLogout} className="w-fit">
              Logout
            </h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
