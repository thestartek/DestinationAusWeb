"use client";

import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ArticleProps = {
  image: string;
  title: string;
  _id: string;
  description: string;
  createdByUs?: boolean;
  comments?: string[];
};

export function ArticleCard({
  image,
  title,
  description,
  _id,
  createdByUs,
  comments,
}: ArticleProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <main className="bg-white group select-none rounded-[1.2rem] shadow-md mx-2 group md:max-w-[360px] p-4 flex flex-col justify-between">
      <div>
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-[1.2rem]"
        >
          <Image
            src={`${image}`}
            alt={title}
            fill
            className="transition-all ease-in-out duration-500 mb-4 object-contain group-hover:scale-105"
          />
        </AspectRatio>
        <h2 className="text-xl font-semibold my-2 px-2 text-clip">{title}</h2>
        <p className="px-2 mb-2">{description.slice(0, 140)}...</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm px-2">
          {new Date().getFullYear()}
        </p>
        <Link
          href={`/articles/${_id}`}
          className={`text-primary font-bold ${buttonVariants({
            variant: "link",
            size: "lg",
          })}`}
        >
          Read Full Article &nbsp;
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
