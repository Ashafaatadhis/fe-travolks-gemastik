import { Button } from "@/components/ui/button";
import Image from "next/image";
import persuationImage from "@/public/persuationImg.png";
import { ArrowRight } from "lucide-react";

export default function Persuation() {
  return (
    <section className="rounded-md shadow-md flex flex-col md:flex-row justify-between items-center bg-custom-Lightish-Blue gap-12 mt-16 mb-24">
      <div className="px-10 py-10 md:py-0 space-y-6">
        <h1 className="text-white font-semibold text-4xl">
          Masih bingung cari tempat yang mana? 😁
        </h1>
        <p className="text-custom-Cloudless max-w-lg font-semibold">
          Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
          tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
          berikan.
        </p>
        <Button variant={"default"} className="gap-4 font-bold">
          <span>Mulai sekarang</span>
          <ArrowRight />
        </Button>
      </div>
      <div>
        <Image
          src={persuationImage}
          width={500}
          height={500}
          alt="Persuation Image"
        />
      </div>
    </section>
  );
}
