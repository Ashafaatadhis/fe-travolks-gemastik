import { Button } from "@/components/ui/button";
import Image from "next/image";
import persuationImage from "@/public/persuationImg.png";
export default function Persuation() {
  return (
    <section className="flex h-full m-3 rounded-md items-center justify-between flex-wrap bg-custom-Lightish-Blue object-cover">
      <div className="w-full sm:w-2/4 p-2 mx-3 h-48 md:h-64 flex flex-col  items-start space-y-3 sm:space-y-4 ">
        <h1 className="text-lg md:text-3xl font-bold text-custom-Grams-Hair ">Masih bingung cari tempat yang mana?</h1>
        <p className="text-custom-Grams-Hair text-xs md:text-base">
          Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
          tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
          berikan.
        </p>
        <Button variant={"link"} className="bg-custom-Lightish-Blue text-custom-Grams-Hair text-xs md:text-sm">
          Mulai sekarang {"=>"}
        </Button>
      </div>
      <div  className="inline  md:hidden  lg:inline">
        <Image src={persuationImage} className="block w-96" alt="Persuation Image" />
        
      </div>
    </section>
  );
}
