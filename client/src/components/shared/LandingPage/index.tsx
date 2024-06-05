import { ArrowRight } from "lucide-react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-4 mt-8 md:mt-16 md:justify-center">
      <Image
        src="/landingpage.png"
        height={359}
        width={744}
        alt="Landing Page"
        className="md:w-[574px] md:h-[276px]"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-semibold text-3xl text-center">
          Startek Australia
        </h2>
        <p className="text-muted-foreground text-center">
          Your friend for Australian Dreams.
        </p>
        <CustomButton
          title="Get Started"
          icon={<ArrowRight className="text-slate-950" />}
        />
      </div>
    </section>
  );
};

export default LandingPage;
