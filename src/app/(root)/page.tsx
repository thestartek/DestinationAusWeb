import FAQ from "@/components/shared/FAQ";
import LandingPage from "@/components/shared/LandingPage";
import OurGoals from "@/components/shared/OurGoals";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto text-slate-950 dark:text-slate-200">
      <LandingPage />
      <OurGoals />
      <FAQ />
    </main>
  );
}
