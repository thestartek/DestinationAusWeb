import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomButton from "../CustomButton";
import { Store } from "lucide-react";

const FAQ = () => {
  return (
    <div className="mx-4">
      <h1 className="text-2xl font-semibold text-center mt-10">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto my-5"
      >
        <AccordionItem value="item-1" className="border-slate-400">
          <AccordionTrigger>Is It a Legit Platform?</AccordionTrigger>
          <AccordionContent>Yes, It definitely is !</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-slate-400">
          <AccordionTrigger>Is It a Legit Platform?</AccordionTrigger>
          <AccordionContent>Yes, It definitely is !</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center justify-center">
        <CustomButton icon={<Store />} title="Get mobile app" />
      </div>
    </div>
  );
};

export default FAQ;
