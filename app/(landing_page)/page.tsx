import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/Hero"
import Partner from "@/components/landing/Partner";
import Navbar from "@/components/landing/Navbar";

const page = () => {
  return (
    <main>
      <div></div>
      <Navbar/>
      <Hero/>
      <Partner/>

      {/* SECTION TEMUKAN */}  
      <div>
        <Image
        src={""}
        width={1000}
        height={1000}
        alt="card-bg"
        className="card-bg"
        />
        <div className="card-content">
          <h2>Raja Ampat</h2>
          <p>Bali</p>
        </div>
      </div>
      </main>
  );
};

export default page;
