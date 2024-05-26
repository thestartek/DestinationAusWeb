"use client";

import CustomButton from "@/components/shared/CustomButton";
import { ArrowRight, MousePointer2 } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto text-slate-950 dark:text-slate-200">
      <CustomButton
        title="Get Started"
        icon={<ArrowRight className="text-slate-950" />}
      />
    </main>
  );
}
