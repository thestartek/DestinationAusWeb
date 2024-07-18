import Container from "@/components/ui/container";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools",
};

const Tools = () => {
  return (
    <Container className="min-h-[70vh] justify-center items-center">
      <Link
        href="/tools/pr-points-calculator"
        className="flex flex-col gap-2 items-center justify-center p-4 hover:bg-slate-200 rounded-xl hover:shadow-lg transition-all ease-in-out duration-700"
      >
        <Image
          src="/calculator.svg"
          width={70}
          height={70}
          alt="Points Calculator"
        />
        <h3 className="text-2xl font-semibold text-center">
          PR Points
          <br />
          Calculator
        </h3>
      </Link>
    </Container>
  );
};

export default Tools;
