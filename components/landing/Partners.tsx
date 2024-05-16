import React from "react";
import Image from "next/image";
import part1 from "@/public/part1.png";
import part2 from "@/public/part2.png";
import part3 from "@/public/part3.png";
import part4 from "@/public/part4.png";
import part5 from "@/public/part5.png";

function Partner() {
  return (
    <main className="partner logo">
      <div className="flex flex-wrap m-auto justify-center">
        <Image
          src={part1}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-auto  m-auto saturate-0 hover:saturate-100 duration-200 hover:scale-110"
        />
        <Image
          src={part2}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-auto  m-auto saturate-0 hover:saturate-100 duration-200 hover:scale-110"
        />
        <Image
          src={part3}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-auto  m-auto saturate-0 hover:saturate-100 duration-200 hover:scale-110"
        />
        <Image
          src={part4}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-auto  m-auto saturate-0 hover:saturate-100 duration-200 hover:scale-110"
        />
        <Image
          src={part5}
          width={1000}
          height={1000}
          alt="hero image"
          className="w-auto  m-auto saturate-0 hover:saturate-100 hover:scale-110 duration-200"
        />
      </div>
    </main>
  );
}

export default Partner;
