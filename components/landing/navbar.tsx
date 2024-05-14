"use client"
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="inline-flex">
            <div className="">
                <h1 className="">Travolks!</h1>
            </div>
            <div className="w-96">
                <Input type="text" placeholder="Cari Apapun di sini..." />
            </div>
            <div>
            <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
            </div>
        </nav>
    );
    };

export default Navbar;
