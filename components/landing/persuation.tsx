import { Button } from "@/components/ui/button";
import Image from "next/image";
import persuationImage from "@/public/persuationImg.png";
export default function Persuation() {
  return (
    <div className="flex h-full m-3 rounded-md items-center justify-between flex-wrap bg-custom-Lightish-Blue object-cover">
      <div className="w-2/4 p-2 h-64 flex flex-col items-start justify-between">
        <h1 className="text-4xl font-bold text-custom-Grams-Hair">Masih bingung cari tempat yang mana?</h1>
        <p className="text-custom-Grams-Hair">
          Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
          tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
          berikan.
        </p>
        <Button variant={"link"} className="bg-custom-Lightish-Blue text-custom-Grams-Hair">
          Mulai sekarang {"=>"}
        </Button>
      </div>
      <div >
        <Image src={persuationImage} alt="Persuation Image" />
        
      </div>
    </div>
  );
}
