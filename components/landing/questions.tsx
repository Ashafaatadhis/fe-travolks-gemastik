import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { dataQuestion } from "@/constant/data";
import { Button } from "@/components/ui/button";

export default function QuestionsSection() {
  return (
    <section className="flex flex-col gap-y-5 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm md:text-xl font-bold text-custom-Ultra-Indigo">
            FREQUENTLY ASKED QUESTION
          </p>
          <h1 className="text-2xl md:text-5xl font-bold">
            🧐Pertanyaan yang Sering Ditanyakan
          </h1>
        </div>
        <div className="flex items-center sm:w-1/3 w-full justify-end">
          <Button variant={"ghost"}>
            <p className="text-custom-Ultra-Indigo text-xs md:text-base">
              Lihat semua
            </p>
            <ChevronRight className="text-custom-Ultra-Indigo w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>

      <Accordion type="single" collapsible className="px-2 rounded ">
        {dataQuestion.map((data, index) => {
          const { question, answer } = data;
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="active:">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-custom-Asphalt-Blue  p-1">
                {answer}.
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
