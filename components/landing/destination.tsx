import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Destination = () => {
  return (
    <section>
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
    </section>
  );
};
