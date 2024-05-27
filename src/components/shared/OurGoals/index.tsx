import { ArrowRight } from "lucide-react";
import CustomButton from "../CustomButton";
import GoalCard from "./GoalCard";
import Link from "next/link";

const OurGoals = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mt-10 mb-5">
        Our Goals
      </h2>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 mx-4">
        <GoalCard flexDirection="flex-row" />
        <GoalCard flexDirection="flex-row-reverse lg:flex-row" />
        <GoalCard flexDirection="flex-row" />
        <GoalCard flexDirection="flex-row-reverse lg:flex-row" />
      </div>
      <div className="flex items-center justify-center mt-5">
        <Link href="/blog">
          <CustomButton icon={<ArrowRight />} title="Explore Blogs" />
        </Link>
      </div>
    </div>
  );
};

export default OurGoals;
