import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import React from "react";
import Testimonial from "@/components/landing/testimonial";
import QuestionsSection from "@/components/landing/questions";
import Persuation from "@/components/landing/persuation";

const page = () => {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <Hero />
        <Testimonial />
        <QuestionsSection />
        <Persuation/>
      </div>
    </>
  );
};

export default page;
