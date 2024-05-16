import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";
import React from "react";
import Testimonial from "@/components/landing/testimonial";
import QuestionsSection from "@/components/landing/questions";
import Persuation from "@/components/landing/persuation";
import Footer from "@/components/landing/Footer";
import Partner from "@/components/landing/Partners";
import Reservation from "@/components/landing/Reservation";

const page = () => {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <Hero />
        <Partner />
        <Reservation/>
        <Testimonial />
        <QuestionsSection />
        <Persuation />
        <Footer />
      </div>
    </>
  );
};

export default page;
