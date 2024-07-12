"use client";

import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  createdByUs?: boolean;
  comments?: string[];
};

export function NewsCard({
  image,
  title,
  description,
  createdByUs,
  comments,
}: BlogCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <main className="group">
      <div className="bg-white select-none rounded-[1.2rem] shadow-md mx-2 group max-w-[360px] p-4">
        <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden rounded-[1.2rem]"
        >
          <Image
            src={`${image}`}
            alt={title}
            width={600}
            height={400}
            className="transition-all ease-in-out duration-500 mb-4 object-contain group-hover:scale-105"
          />
        </AspectRatio>
        <h2 className="text-xl font-semibold my-2 px-2 text-clip">{title}</h2>
        <p className="px-2 mb-2">{description.slice(0, 140)}...</p>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm px-2">
            {new Date().getFullYear()}
          </p>
          <Link
            href={"/news"}
            className={`text-primary font-bold ${buttonVariants({
              variant: "link",
              size: "lg",
            })}`}
          >
            Read Full News &nbsp;
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
