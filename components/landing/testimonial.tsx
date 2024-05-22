"use client";
import Image from "next/image";
import Lapon from "@/public/Lapon.png.jpg";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { dataTesti } from "@/constant/data";

export default function Testimonial() {
  return (
    <section className="flex flex-col items-center justify-around gap-y-6 py-16">
      <div className="flex flex-col items-center text-center gap-y-4">
        <p className=" text-xs md:text-xl font-sans text-custom-Ultra-Indigo font-bold">
          TESTIMONIAL DESTINIZE
        </p>
        <h1 className="font-bold text-2xl md:text-5xl">
          🏋️° Apa Kata Mereka Tentang Kami
        </h1>
        <p className="md:text-base text-xs max-w-sm md:max-w-4xl ">
          Penasaran apa saja review dari pengguna yang memakai aplikasi dan
          website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk
          cek dibawah!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {dataTesti.map((data) => {
          const { img, review, reviewer, job } = data;
          return (
            <>
              <Card key={reviewer}>
                <CardHeader>
                  <CardTitle>
                    <div>
                      <Image
                        className="w-44 rounded-full aspect-square mx-auto"
                        src={img}
                        alt={reviewer}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4 mx-2 items-center text-center">
                  <p className="text-custom-Asphalt-Blue text-base  ">
                    {review}
                  </p>
                  <div className="flex gap-x-2 ">
                    <Star className="text-orange-500 " />
                    <Star className="text-orange-500" />
                    <Star className="text-orange-500" />
                    <Star className="text-orange-500" />
                    <Star className="text-orange-500" />
                  </div>
                  <p className="font-semibold  text-custom-Lightish-Blue">
                    {reviewer}
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="font-bold text-custom-River-Styx mx-auto">
                    {job}
                  </p>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </section>
  );
}
