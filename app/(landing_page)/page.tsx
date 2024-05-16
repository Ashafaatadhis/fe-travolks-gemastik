import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/Hero"
import Partner from "@/components/landing/Partner";
import { Navbar } from "@/components/landing/Navbar";
import des1 from "@/public/des1.png";
import des2 from "@/public/des2.png";
import des3 from "@/public/des3.png";
import des4 from "@/public/des4.png";


const page = () => {
  const card = [
    {
      img: des1,
      place: "Raja Ampat",
      origin: "Bali",
    },
    {
      img: des2,
      place: "Raja Ampat",
      origin: "Bali",
    },
    {
      img: des3,
      place: "Raja Ampat",
      origin: "Bali",
    },
    {
      img: des4,
      place: "Raja Ampat",
      origin: "Bali",
    },
  ];
  return (
    <main>
      <div></div>
      <Navbar />
      <Hero />
      <Partner />

      {/* SECTION TEMUKAN */}
      <div className="flex gap-x-3">
        
      </div>
    </main>
  );
};

export default page;
