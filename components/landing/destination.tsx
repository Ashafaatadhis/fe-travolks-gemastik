import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import des1 from "@/public/des1.png";
import des2 from "@/public/des2.png";
import des3 from "@/public/des3.png";
import des4 from "@/public/des4.png";

export const Destination = () => {
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
  const isengStyle = "blur-sm hover:blur-none transition-all duration-200" ;
  return (
    <section className="my-9">
      <div className="header flex  items-center flex-wrap gap-2 justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm md:text-xl font-bold text-custom-Ultra-Indigo">
            Destinasi Favorit
          </p>
          <h1 className="text-xl sm:text-4xl font-bold">
            ✈️.Temukan Destinasi Terbaik
          </h1>
        </div>
        <div className="flex items-center sm:w-1/3 w-full justify-end">
          <Button variant={"ghost"}>
            <p className="text-custom-Ultra-Indigo text-xs md:text-base">
              Lihat semua
            </p>
            <ChevronRight className="text-custom-Ultra-Indigo w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between mt-3 flex-col sm:flex-row items-center flex-wrap gap-3">
        {card.map((content) => {
          const { img, place, origin,} = content;
          return (
            <>
              <Link href={"/"}>
                <div
                  key={place}
                  className="rounded-lg shadow-md bg-slate-400 w-[278.46px] h-[392.36px]  overflow-hidden">
                  <div className="rounded relative">
                    <Image
                      src={img}
                      width={1000}
                      height={1000}
                      alt="card-bg"
                      className={`card-bg object-fill ${isengStyle}`}
                    />
                    <div className="card-content backdrop-blur-sm bg-custom-Paper-White/60 absolute bottom-0 rounded-tr-lg px-7 py-3">
                      <h2 className="font-semibold z-20">{place}</h2>
                      <p className="text-custom-Asphalt-Blue">{origin}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};
