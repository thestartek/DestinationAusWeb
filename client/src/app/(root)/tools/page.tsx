import Container from "@/components/ui/container";
import { Calculator } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
};

const Tools = () => {
  return (
    <Container className="min-h-[70vh]">
      Tools <Calculator />
    </Container>
  );
};

export default Tools;
