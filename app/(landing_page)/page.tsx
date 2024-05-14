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
        {card.map((content) => {
          const {img,place,origin,index}=content
          return (
            <>
              <div key={index} className="rounded-lg bg-slate-400 w-[278.46px] h-[392.36px]  overflow-hidden">
                <div className="rounded relative">
                  <Image
                    src={img}
                    width={1000}
                    height={1000}
                    alt="card-bg"
                    className="card-bg object-fill"
                  />
                  <div className="card-content backdrop-blur-sm bg-custom-Paper-White/60 absolute bottom-0 rounded-tr-lg px-7 py-3">
                    <h2 className="font-semibold z-20">{place}</h2>
                    <p className="text-custom-Asphalt-Blue">{origin}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default page;
