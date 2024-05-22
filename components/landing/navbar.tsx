"use client";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Search,
  MapPin,
  Globe,
  ChevronDown,
  ChevronUp,
  TrashIcon,
  UserIcon,
  LoaderCircleIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import React from "react";
import { useFetchData } from "@/hooks/useFetchData";
import axiosInstance from "@/helper/axiosInstance";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const count = searchParams.get("count") || "15";
  const limit = typeof count === "string" ? parseInt(count) : 15;

  const { data, isLoading, isSuccess, refetch, isRefetching } = useFetchData({
    queryKey: ["categoriesData", page],
    dataProtected: `categories?count=${count}&page=${page}`,
  });

  const list = [
    "Gunung",
    "Pantai",
    "Kuliner",
    "Outbond",
    "Sejarah",
    "Edukasi",
    "Romantis",
    "Alam"
  ];

  return (
    <>
      <Sheet>
        <div className="w-full shadow-sm border-b pb-2 bordercus flex justify-between items-center">
          <div className="sm:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="border rounded-full p-2 cursor-pointer bg-custom-Flax-Bloom/35">
                  <Search className="-scale-x-100 text-custom-Fennel-Flower " />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="">
                <div className="relative -m-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground text-custom-Fly-byNight" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full  rounded-lg  pl-8 md:w-[200px] lg:w-[336px] text-custom-Fly-byNight bg-custom-Bright-Manatee/10 placeholder:text-custom-Sky-High"
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <h1 className="text-custom-Lightish-Blue sm:hidden font-bold text-xl">
              TRAVOLKS
            </h1>
          </div>
          {/* Navbar at Desktop to Tablet */}
          <nav className="hidden sm:flex  justify-between w-full  items-center">
            <div>
              <h1 className="text-custom-Lightish-Blue font-bold sm:text-xl md:text-2xl">
                TRAVOLKS
              </h1>
            </div>
            <div className="relative  hidden  sm:inline mx-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground text-custom-Fly-byNight" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full  md:w-[300px] lg:w-[500px] rounded-full  pl-8  text-custom-Fly-byNight bg-custom-Bright-Manatee/10 placeholder:text-custom-Sky-High"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex text-xs  text-custom-Bright-Manatee gap-2 items-center cursor-pointer">
                  <Globe className="w-4 h-4" />
                  <p>Bahasa Indonesia</p>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem>*Content*</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-2  items-center cursor-pointer">
                  <div className="p-2 border bg-custom-Lightish-Blue/20  rounded-full">
                    <MapPin className="text-custom-Lightish-Blue w-5 h-5" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-xs text-custom-Bright-Manatee">Lokasi</p>
                    <div className="flex">
                      <p className="text-sm text-custom-Lightish-Blue font-bold">
                        Yogyakarta, Indonesia
                      </p>
                      <ChevronDown className="text-custom-Lightish-Blue" />
                    </div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem className="text-custom-Strong-Iris">
                  *Content*
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
        </div>
        <SheetContent
          side={"right"}
          className="flex flex-col h-screen justify-between">
          <div className="flex flex-col gap-3">
            <SheetHeader>
              <SheetTitle>Travolks!</SheetTitle>
              <SheetDescription>Find your next adventure</SheetDescription>
            </SheetHeader>
            <div className="relative ">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground text-custom-Fly-byNight" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full  rounded-lg  pl-8 md:w-[200px] lg:w-[336px] text-custom-Fly-byNight bg-custom-Bright-Manatee/10 placeholder:text-custom-Sky-High"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center cursor-pointer">
                  <MapPin />
                  <p>Indonesia</p>
                  <ChevronUp />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem className="text-custom-Strong-Iris">
                  *Content*
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center cursor-pointer">
                  <Globe />
                  <p>Indonesia</p>
                  <ChevronUp />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem className="text-custom-Strong-Iris">
                  *Content*
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap min-w-0 ">
          {list.map((item, index) => {
            return (
              <>
                <NavigationMenu key={index}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-custom-Bright-Manatee/70">{item}</NavigationMenuTrigger>
                      <NavigationMenuContent className="grid w-[50px] gap-3 p-2 md:w-[150px] md:grid-cols-1 lg:w-[250px]">
                      {data?.data?.categories?.map(
                        (category: {
                          name: string;
                          slug: string;
                          id: string;
                        }) => {
                          const { name, slug, id } = category;
                          return (
                            <>
                              {isLoading || isRefetching &&
                                <LoaderCircleIcon className="animate-spin w-5 h-5" />}
                                {isSuccess && !isRefetching && (
                                  <NavigationMenuLink key={id}
                                  href={`/places-by-category/${slug}`} className="hover:underline">
                                  {name}
                                </NavigationMenuLink>
                                )}
                                
                            </>
                          );
                        }
                      )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center mt-2 gap-2">
          <div className="rounded-full bg-custom-Lightish-Blue p-3">
            <TrashIcon className="w-5 h-5 text-custom-Sky-High" />
          </div>
          <div className="rounded-full bg-custom-Sky-High/40 p-3">
            <UserIcon className="w-5 h-5 text-custom-Lightish-Blue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
