import { Button } from "@/components/ui/button";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import React from "react";
import Testimonial from "@/components/landing/testimonial";
import QuestionsSection from "@/components/landing/questions";
import Persuation from "@/components/landing/persuation";
import Footer from "@/components/landing/footer";

const page = () => {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <Hero />
        <Testimonial />
        <QuestionsSection />
        <Persuation />
        <Footer />
      </div>
    </>
  );
};

export default page;
