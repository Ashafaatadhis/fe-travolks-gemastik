import Image from "next/image";
import Lapon from "@/public/Ujicoba/Lapon.png.jpg";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader, 
} from "@/components/ui/card";

export default function CardTesti() {
  return (
    <Card className="min-w-0 max-w-xs sm:max-w-sm h-[500px] border rounded-lg flex flex-col justify-center items-center drop-shadow-2xl px-2 m-2">
      <CardHeader>
        <CardContent>
          <div>
            <Image className="w-56 rounded-full" src={Lapon} alt="Lapon" />
          </div>
        </CardContent>
      </CardHeader>
      <CardDescription className="flex flex-col gap-y-4 mx-2 items-center text-center">
        <p className="text-custom-Asphalt-Blue text-base  ">
          Destinize membantu saya Mencari spot tempat wisata baru di Indonesia
          dengan Mudah
        </p>
        <div className="flex gap-x-2 ">
          <Star className="text-orange-500 " />
          <Star className="text-orange-500" />
          <Star className="text-orange-500" />
          <Star className="text-orange-500" />
        </div>
        <p className="font-semibold  text-custom-Lightish-Blue">
          Sandhika Galih
        </p>
        <p className="font-bold text-custom-River-Styx">Dosen di WPU</p>
      </CardDescription>
    </Card>
  );
}
