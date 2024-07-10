"use client";

import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    <div>
      <Link href={`/blog`}>
        <div className="bg-white rounded-3xl shadow-md mx-2 group max-w-[360px] p-4">
          <h2 className="text-xl font-semibold my-2 px-2">{title}</h2>
          <p className="px-2 mb-2">{description}</p>
          <div>
            <p className="text-muted-foreground text-sm px-2">
              {new Date().getFullYear()}
            </p>
            <Button size={"lg"} variant={"ghost"}>
              Read Full News
            </Button>
          </div>
        </div>
        {/* <AspectRatio
          ratio={16 / 9}
          className="overflow-hidden object-contain rounded-t-md"
        >
          <Image
            src={`${image}`}
            alt={title}
            width={400}
            height={200}
            className="transition-all ease-in-out duration-500 mb-4 object-contain group-hover:scale-105"
          />
        </AspectRatio> */}
      </Link>
    </div>
  );
}
