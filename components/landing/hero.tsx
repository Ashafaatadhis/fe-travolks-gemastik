import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import React from 'react'
import hero from "@/public/hero.png";
import Image from 'next/image';

function Hero() {
    return (
      <section className="hero inline-flex pl-[120px] gap-20 place-content-end text-custom-Fly-byNight">
        <div className="kiri">
          <Badge variant="outline">• Explore the Wonderful Indonesia!</Badge>
          <h1 className="text-7xl font-bold text-cus">
            Liburan & nikmati
            <br />
            <span className="text-custom-Lightish-Blue">tempat baru</span> di
            <br />
            Indonesia
          </h1>
          <p className="w-[477px] mt-[30px]">
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
          <Button className="mt-[34px] bg-custom-Lightish-Blue">Mulai sekarang →</Button>
        </div>
        <div className="">
          <Image
            src={hero}
            width={1000}
            height={1000}
            alt="hero image"
            className="w-[600px] h-auto"
            />
        </div>
      </section>
    );
}

export default Hero