import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";



const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center py-16">
      <div>
        <div className="space-y-6">
          <h1 className="p-2 bg-custom-Lightish-Blue/20 w-fit rounded-full text-sm font-bold text-custom-Lightish-Blue">
            ✈️ • Explore the wonderful indonesia!
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold">
            Liburan & nikmati{" "}
            <span className="text-custom-Lightish-Blue">tempat baru</span> di
            indonesia ️🏖️
          </h1>
          <p>
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
        </div>
        <div className="mt-6">
          <Button className="bg-custom-Lightish-Blue">Mulai sekarang</Button>
        </div>
      </div>
      <Image src={"/hero.png"} width={1000} height={1000} alt="Hero Image" />
    </div>
  );
};

export default Hero;
