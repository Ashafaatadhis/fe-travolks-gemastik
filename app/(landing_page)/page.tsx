import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import  hero  from "@/public/hero.png"
import  part1 from "@/public/part1.png"
import  part2 from "@/public/part2.png"
import  part3 from "@/public/part3.png"
import  part4 from "@/public/part4.png"
import  part5 from "@/public/part5.png"
import { Button } from "@/components/ui/button";
import Hero from "./hero";
import Partner from "./partner";

const page = () => {
  return (
    <main>
      <Hero></Hero>
      <Partner></Partner>
      <section className="temukan">
        <div>
          <Image/>
          <div>
            <h2>Raja Ampat</h2>
            <p>Bali</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
